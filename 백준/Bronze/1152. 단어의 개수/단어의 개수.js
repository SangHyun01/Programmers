const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim();

if (input === '') {
    console.log(0);
} else {
    console.log(input.split(' ').length);
}