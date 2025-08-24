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
  
  // Copy .next directory to root for Vercel
  console.log('Copying .next directory...');
  const nextSrc = path.join('apps', 'client', '.next');
  const nextDest = '.next';
  
  if (fs.existsSync(nextDest)) {
    fs.rmSync(nextDest, { recursive: true, force: true });
  }
  
  // Use cross-platform copy
  if (process.platform === 'win32') {
    execSync(`xcopy "${nextSrc}" "${nextDest}" /E /I /Y`, { stdio: 'inherit' });
  } else {
    execSync(`cp -r "${nextSrc}" "${nextDest}"`, { stdio: 'inherit' });
  }
  
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
  
  // Copy package.json from client to root for Vercel
  console.log('Copying client package.json...');
  const packageSrc = path.join('apps', 'client', 'package.json');
  const packageDest = 'package.json';
  
  if (fs.existsSync(packageDest)) {
    fs.rmSync(packageDest, { recursive: true, force: true });
  }
  
  if (process.platform === 'win32') {
    execSync(`copy "${packageSrc}" "${packageDest}"`, { stdio: 'inherit' });
  } else {
    execSync(`cp "${packageSrc}" "${packageDest}"`, { stdio: 'inherit' });
  }
  
  // Copy next.config.mjs to root
  console.log('Copying next.config.mjs...');
  const configSrc = path.join('apps', 'client', 'next.config.mjs');
  const configDest = 'next.config.mjs';
  
  if (fs.existsSync(configDest)) {
    fs.rmSync(configDest, { recursive: true, force: true });
  }
  
  if (process.platform === 'win32') {
    execSync(`copy "${configSrc}" "${configDest}"`, { stdio: 'inherit' });
  } else {
    execSync(`cp "${configSrc}" "${configDest}"`, { stdio: 'inherit' });
  }
  
  // Copy tsconfig.json to root
  console.log('Copying tsconfig.json...');
  const tsConfigSrc = path.join('apps', 'client', 'tsconfig.json');
  const tsConfigDest = 'tsconfig.json';
  
  if (fs.existsSync(tsConfigDest)) {
    fs.rmSync(tsConfigDest, { recursive: true, force: true });
  }
  
  if (process.platform === 'win32') {
    execSync(`copy "${tsConfigSrc}" "${tsConfigDest}"`, { stdio: 'inherit' });
  } else {
    execSync(`cp "${tsConfigSrc}" "${tsConfigDest}"`, { stdio: 'inherit' });
  }
  
  // Copy tailwind.config.ts to root
  console.log('Copying tailwind.config.ts...');
  const tailwindSrc = path.join('apps', 'client', 'tailwind.config.ts');
  const tailwindDest = 'tailwind.config.ts';
  
  if (fs.existsSync(tailwindDest)) {
    fs.rmSync(tailwindDest, { recursive: true, force: true });
  }
  
  if (fs.existsSync(tailwindSrc)) {
    if (process.platform === 'win32') {
      execSync(`copy "${tailwindSrc}" "${tailwindDest}"`, { stdio: 'inherit' });
    } else {
      execSync(`cp "${tailwindSrc}" "${tailwindDest}"`, { stdio: 'inherit' });
    }
  }
  
  // Copy postcss.config.js to root
  console.log('Copying postcss.config.js...');
  const postcssSrc = path.join('apps', 'client', 'postcss.config.js');
  const postcssDest = 'postcss.config.js';
  
  if (fs.existsSync(postcssDest)) {
    fs.rmSync(postcssDest, { recursive: true, force: true });
  }
  
  if (fs.existsSync(postcssSrc)) {
    if (process.platform === 'win32') {
      execSync(`copy "${postcssSrc}" "${postcssDest}"`, { stdio: 'inherit' });
    } else {
      execSync(`cp "${postcssSrc}" "${postcssDest}"`, { stdio: 'inherit' });
    }
  }
  
  console.log('Vercel build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
