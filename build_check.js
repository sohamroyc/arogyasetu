const { execSync } = require('child_process');
try {
    execSync('npx vite build', { stdio: 'pipe' });
    console.log('Build succeeded');
} catch (error) {
    console.log('Build failed:');
    console.log(error.stdout.toString());
    console.error(error.stderr.toString());
}
