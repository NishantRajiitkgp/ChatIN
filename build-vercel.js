const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting Vercel build...');

try {
  // Install all dependencies using npm workspaces
  console.log('Installing dependencies with npm workspaces...');
  execSync('npm install', { stdio: 'inherit' });
  
  // Build the client app directly (skip server to avoid turbo warnings)
  console.log('Building client app...');
  execSync('npm run build', { cwd: 'apps/client', stdio: 'inherit' });
  
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
  
  console.log('Vercel build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
