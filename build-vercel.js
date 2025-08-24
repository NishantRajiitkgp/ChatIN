const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('Starting Vercel build...');

try {
  // Install dependencies in client app
  console.log('Installing client dependencies...');
  execSync('npm install', { cwd: 'apps/client', stdio: 'inherit' });
  
  // Build the client app
  console.log('Building client app...');
  execSync('npm run build', { cwd: 'apps/client', stdio: 'inherit' });
  
  // Copy public directory to root for Vercel
  console.log('Copying public directory...');
  const publicSrc = path.join('apps', 'client', 'public');
  const publicDest = 'public';
  
  if (fs.existsSync(publicDest)) {
    fs.rmSync(publicDest, { recursive: true, force: true });
  }
  
  // Use cross-platform copy
  if (process.platform === 'win32') {
    execSync(`xcopy "${publicSrc}" "${publicDest}" /E /I /Y`, { stdio: 'inherit' });
  } else {
    execSync(`cp -r "${publicSrc}" "${publicDest}"`, { stdio: 'inherit' });
  }
  
  console.log('Vercel build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
