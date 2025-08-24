"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
const crypto_1 = require("crypto");
const app = (0, express_1.default)();
const httpServer = (0, http_1.createServer)(app);
const io = new socket_io_1.Server(httpServer, {
    cors: {
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST"]
    }
});
const rooms = new Map();
io.on('connection', (socket) => {
    console.log('User connected:', socket.id);
    socket.on('set-user-id', (userId) => {
    });
    socket.on('create-room', () => {
        const roomCode = (0, crypto_1.randomBytes)(3).toString('hex').toUpperCase();
        rooms.set(roomCode, {
            users: new Set(),
            messages: [],
            lastActive: Date.now()
        });
        socket.emit('room-created', roomCode);
    });
    socket.on('join-room', (data) => {
        const parsedData = JSON.parse(data);
        const roomCode = parsedData.roomId;
        const room = rooms.get(roomCode);
        if (!room) {
            socket.emit('error', 'Room not found');
            return;
        }
        socket.join(roomCode);
        room.users.add(socket.id);
        room.lastActive = Date.now();
        socket.emit('joined-room', { roomCode, messages: room.messages });
        io.to(roomCode).emit('user-joined', room.users.size);
    });
    socket.on('send-message', ({ roomCode, message, userId, name }) => {
        const room = rooms.get(roomCode);
        if (room) {
            room.lastActive = Date.now();
            const messageData = {
                id: (0, crypto_1.randomBytes)(4).toString('hex'),
                content: message,
                senderId: userId,
                sender: name,
                timestamp: new Date()
            };
            room.messages.push(messageData);
            io.to(roomCode).emit('new-message', messageData);
        }
    });
    socket.on('disconnect', () => {
        rooms.forEach((room, roomCode) => {
            if (room.users.has(socket.id)) {
                room.users.delete(socket.id);
                io.to(roomCode).emit('user-left', room.users.size);
                if (room.users.size === 0) {
                    console.log(`Deleting empty room: ${roomCode}`);
                    rooms.delete(roomCode);
                }
            }
        });
    });
});
setInterval(() => {
    const now = Date.now();
    rooms.forEach((room, roomCode) => {
        if (room.users.size === 0 && now - room.lastActive > 3600000) {
            console.log(`Cleaning up inactive room: ${roomCode}`);
            rooms.delete(roomCode);
        }
    });
}, 3600000);
const PORT = process.env.PORT || 4000;
httpServer.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
