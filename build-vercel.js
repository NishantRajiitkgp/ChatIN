const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting Vercel build...');

try {
  // Install all dependencies using npm workspaces
  console.log('Installing dependencies with npm workspaces...');
  execSync('npm install', { stdio: 'inherit' });
  
  // Build all packages using turbo
  console.log('Building all packages with turbo...');
  execSync('npm run build', { stdio: 'inherit' });
  
  // Verify the client build output exists
  const nextDir = path.join('apps/client', '.next');
  if (fs.existsSync(nextDir)) {
    console.log('✅ Next.js build output found at:', nextDir);
    
    // List contents of .next directory
    const nextContents = fs.readdirSync(nextDir);
    console.log('📁 .next directory contents:', nextContents);
  } else {
    throw new Error('Next.js build output not found');
  }
  
  // Verify public directory exists
  const publicDir = path.join('apps/client', 'public');
  if (fs.existsSync(publicDir)) {
    console.log('✅ Public directory found at:', publicDir);
    
    // List contents of public directory
    const publicContents = fs.readdirSync(publicDir);
    console.log('📁 Public directory contents:', publicContents);
  } else {
    throw new Error('Public directory not found');
  }
  
  // Verify server build output exists
  const serverDistDir = path.join('apps/server', 'dist');
  if (fs.existsSync(serverDistDir)) {
    console.log('✅ Server build output found at:', serverDistDir);
    
    // List contents of dist directory
    const distContents = fs.readdirSync(serverDistDir);
    console.log('📁 Server dist directory contents:', distContents);
  } else {
    console.log('⚠️ Server build output not found (this is okay for client-only deployment)');
  }
  
  console.log('Vercel build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
