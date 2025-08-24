const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting Vercel build...');

try {
  // Install all dependencies using npm workspaces
  console.log('Installing dependencies with npm workspaces...');
  execSync('npm install', { stdio: 'inherit' });
  
  // Build the client app directly
  console.log('Building client app...');
  execSync('npm run build', { cwd: 'apps/client', stdio: 'inherit' });
  
  console.log('Vercel build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
