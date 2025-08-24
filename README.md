# ChatIN - Real-Time Chat Application

A modern, real-time chat application built with Next.js, Socket.IO, and TypeScript. Create temporary chat rooms that automatically expire when all users leave, perfect for quick conversations and temporary collaborations.

## ✨ Features

- **Real-time messaging** with instant message delivery
- **Temporary rooms** that auto-expire when empty
- **Room code sharing** - simple 6-character codes for easy room access
- **User presence** - see when users join and leave
- **Modern UI** with dark/light theme support
- **Responsive design** that works on all devices
- **Auto-cleanup** of inactive rooms
- **Message grouping** by sender for better readability

## 🚀 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Socket.IO Client** - Real-time communication
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **Socket.IO** - Real-time bidirectional communication
- **TypeScript** - Type-safe server code

### Development Tools
- **Turborepo** - Monorepo build system
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Vercel Analytics** - Performance monitoring

## 📁 Project Structure

```
real-time-chat-main/
├── apps/
│   ├── client/                 # Next.js frontend application
│   │   ├── app/               # App Router pages
│   │   ├── components/        # Reusable UI components
│   │   └── lib/              # Utility functions
│   └── server/                # Node.js backend server
│       └── index.ts          # Socket.IO server implementation
├── packages/                   # Shared packages
│   ├── ui/                   # Shared UI components
│   ├── eslint-config/        # Shared ESLint configuration
│   └── typescript-config/    # Shared TypeScript configuration
└── turbo.json                 # Turborepo configuration
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 15+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd real-time-chat-main
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the `apps/client` directory:
   ```env
   NEXT_PUBLIC_SOCKET_URL=http://localhost:4000
   ```

### Development

1. **Start the backend server**
   ```bash
   cd apps/server
   npm run dev
   ```
   The server will run on `http://localhost:4000`

2. **Start the frontend application**
   ```bash
   cd apps/client
   npm run dev
   ```
   The client will run on `http://localhost:3000`

3. **Open your browser**
   Navigate to `http://localhost:3000` to use the application

### Production Build

1. **Build the client**
   ```bash
   cd apps/client
   npm run build
   npm start
   ```

2. **Build the server**
   ```bash
   cd apps/server
   npm run build
   npm start
   ```

## 🎯 How to Use

### Creating a Room
1. Click "Create New Room" button
2. A unique 6-character room code will be generated
3. Share this code with others to invite them

### Joining a Room
1. Enter your name in the name field
2. Enter the room code provided by the room creator
3. Click "Join Room" to enter the chat

### Chatting
- Type your message in the input field
- Press Enter or click "Send" to send messages
- Messages are delivered in real-time to all room participants
- See when users join and leave the room

### Room Management
- Rooms automatically expire when all users leave
- Inactive rooms are cleaned up after 1 hour
- Room codes are temporary and not persistent

## 🔧 Configuration

### Server Configuration
- **Port**: Configure via `PORT` environment variable (default: 4000)
- **CORS**: Currently configured for `http://localhost:3000`
- **Room cleanup**: Inactive rooms are cleaned up every hour

### Client Configuration
- **Socket URL**: Configure via `NEXT_PUBLIC_SOCKET_URL` environment variable
- **Theme**: Supports system, light, and dark themes
- **Analytics**: Vercel Analytics integration for performance monitoring

## 🚀 Deployment

### Backend Deployment
The server can be deployed to any Node.js hosting platform:
- **Render**: Already configured with the provided URL
- **Heroku**: Set the `PORT` environment variable
- **Vercel**: Deploy as a serverless function
- **Railway**: Direct Node.js deployment

### Frontend Deployment
The Next.js client can be deployed to:
- **Vercel**: Recommended for Next.js applications
- **Netlify**: Static export deployment
- **AWS Amplify**: Full-stack deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Nishant Raj** - Developer of ChatIN

## 🙏 Acknowledgments

- Built with modern web technologies for optimal performance
- Socket.IO for reliable real-time communication
- Next.js team for the excellent React framework
- Tailwind CSS for the beautiful design system

---

**Happy Chatting! 💬**
