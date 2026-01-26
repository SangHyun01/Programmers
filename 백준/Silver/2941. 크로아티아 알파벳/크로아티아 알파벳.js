const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim();

function solution(str) {
  const croatian = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

  for (let alphabet of croatian) {

    str = str.split(alphabet).join("*");
  }


  console.log(str.length);
}

solution(input);