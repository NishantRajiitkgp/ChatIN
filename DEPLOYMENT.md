# Deployment Guide for Real-Time Chat App

## Prerequisites
- Node.js 18+ installed
- Vercel account
- Git repository connected to Vercel

## Environment Variables

Before deploying, make sure to set the following environment variable in your Vercel project:

```
NEXT_PUBLIC_SOCKET_URL=https://real-time-chat-tmzf.onrender.com
```

## Deployment Steps

### 1. Automatic Deployment (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Next.js framework
3. Set the environment variable in Vercel dashboard
4. Deploy

### 2. Manual Deployment
1. Run the build script: `npm run vercel-build`
2. Deploy the generated files to Vercel

## Build Process

The app uses a custom build script (`build-vercel.js`) that:
1. Installs client dependencies
2. Builds the Next.js app
3. Copies all necessary files to the root directory
4. Ensures proper monorepo handling

## Common Issues and Solutions

### Socket Connection Errors
- Ensure `NEXT_PUBLIC_SOCKET_URL` is set correctly
- Check if the socket server is running and accessible
- Verify CORS settings on the socket server

### Build Failures
- Clear `.next` and `node_modules` directories
- Run `npm install` in both root and client directories
- Check for version mismatches in React/Next.js

### Monorepo Issues
- The build script handles monorepo dependencies
- UI components are properly transpiled
- All necessary configuration files are copied

## File Structure After Build

```
/
├── .next/           # Next.js build output
├── public/          # Static assets
├── package.json     # Client package.json
├── next.config.mjs  # Next.js configuration
├── tsconfig.json    # TypeScript configuration
├── tailwind.config.ts # Tailwind configuration
└── postcss.config.js # PostCSS configuration
```

## Troubleshooting

### Build Script Issues
- Ensure you're running from the root directory
- Check if all paths exist
- Verify file permissions

### Runtime Errors
- Check browser console for errors
- Verify environment variables are set
- Check socket server status

## Support

If you encounter issues:
1. Check the build logs in Vercel
2. Verify all environment variables are set
3. Ensure the socket server is accessible
4. Check the deployment guide for common solutions
