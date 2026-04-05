const { exec } = require('child_process');

exec('npm test', (error, stdout, stderr) => {
  const lines = stdout.split('\n');

  lines.forEach(line => {
    if (line.includes('@myprojects.com')) {
      console.log(line.trim());
    }
  });
});