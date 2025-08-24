# Vercel Deployment Guide

This guide will help you deploy your real-time chat application to Vercel successfully.

## ✅ Fixed Issues

The following Vercel deployment errors have been resolved:

1. **Missing `vercel-build` script** - Added to root package.json
2. **Monorepo dependency resolution** - Configured npm workspaces properly
3. **Build script optimization** - Simplified and optimized for Vercel
4. **Next.js configuration** - Removed problematic experimental options
5. **Proper output directory** - Set to `apps/client/.next`

## Prerequisites

- Node.js 18+ installed
- Vercel CLI installed (`npm i -g vercel`)
- Vercel account

## Deployment Steps

### 1. Environment Variables

Set these environment variables in your Vercel project settings:

```bash
NEXT_PUBLIC_SOCKET_URL=https://your-socket-server-url.com
NEXT_TELEMETRY_DISABLED=1
```

### 2. Build Configuration

The project is now properly configured with:
- **Build Command**: `npm run vercel-build` ✅
- **Install Command**: `npm install` ✅
- **Framework**: Next.js ✅
- **Output Directory**: `apps/client/.next` ✅

### 3. Monorepo Structure

This project uses a monorepo structure with npm workspaces:
```
real-time-chat-main/
├── package.json (with workspaces config) ✅
├── apps/
│   ├── client/          # Next.js frontend
│   └── server/          # Socket.io backend
├── packages/
│   ├── ui/              # Shared UI components
│   ├── eslint-config/   # Shared ESLint config
│   └── typescript-config/ # Shared TS config
```

### 4. Deployment Commands

#### Option 1: Vercel CLI (Recommended)
```bash
# Login to Vercel
vercel login

# Deploy from project root
vercel --prod

# Follow the prompts to link to your Vercel project
```

#### Option 2: Git Integration
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect the Next.js framework
3. The build command is already set to: `npm run vercel-build`
4. Deploy

### 5. Build Process

The `vercel-build` script now:
1. ✅ Installs all dependencies using npm workspaces
2. ✅ Properly links monorepo packages
3. ✅ Builds the Next.js application
4. ✅ Outputs to `apps/client/.next`

### 6. Troubleshooting

#### If you still encounter issues:

1. **Clear Vercel cache**:
   - Go to your Vercel project settings
   - Clear build cache
   - Redeploy

2. **Check build logs**:
   - Look for specific error messages
   - Verify all dependencies are installed

3. **Verify workspace configuration**:
   - Ensure `workspaces` array is in root package.json
   - Check that all package names start with `@repo/`

4. **Common solutions**:
   - The build script handles monorepo dependencies automatically
   - UI components are properly exported from `@repo/ui`
   - TypeScript paths are configured correctly

### 7. Performance Features

- ✅ Next.js 15 with App Router
- ✅ Tailwind CSS optimized for production
- ✅ Components optimized with proper tree-shaking
- ✅ Vercel Analytics integrated
- ✅ Static page generation

### 8. Monitoring

- Build logs available in Vercel dashboard
- Function logs for serverless functions
- Performance metrics and analytics

## Support

If you encounter issues:
1. ✅ Check the Vercel build logs
2. ✅ Verify environment variables are set
3. ✅ Ensure all dependencies are properly configured
4. ✅ The monorepo structure is now properly handled

## Recent Fixes Applied

- Added `vercel-build` script to root package.json
- Configured npm workspaces in root package.json
- Optimized build-vercel.js script
- Fixed Next.js configuration
- Set proper output directory in vercel.json
- Created comprehensive .vercelignore file
