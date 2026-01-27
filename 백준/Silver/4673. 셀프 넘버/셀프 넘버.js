function d(n) {
  let num = n;
  let sum = n;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

function solution() {
  const isNotSelfNumber = new Array(10001).fill(false);

  for (let i = 1; i <= 10000; i++) {
    const generated = d(i);
    if (generated <= 10000) {
      isNotSelfNumber[generated] = true;
    }
  }

  const result = [];
  for (let i = 1; i <= 10000; i++) {
    if (!isNotSelfNumber[i]) {
      result.push(i);
    }
  }
  
  console.log(result.join('\n'));
}

solution();