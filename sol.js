const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin
});
const lines = [];
rl.on('line', (line) => {
    lines.push(line);
}).on('close', () => {
    const a = lines[1].split(' ').map(Number);
    let sum = 0;
    const result = [];
    for (let i = 0; i < a.length; i += 1) {
        sum += a[i];
        result.push(sum);
    }
    const res = result.join(' ');
    process.stdout.write(res.toString());
});