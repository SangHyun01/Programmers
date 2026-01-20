const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

// 1. N(물건의 개수)과 K(배낭이 견딜 수 있는 무게)
const [N, K] = input[0].split(" ").map(Number);

// 2. 각 물건의 [무게(W), 가치(V)]를 담은 2차원 배열
const items = [];
for (let i = 1; i <= N; i++) {
  items.push(input[i].split(" ").map(Number));
}

function solution(N, K, items) {
  // 무게 한도 K만큼의 1차원 배열만 만듭니다.
  let dp = new Array(K + 1).fill(0);

  for (let i = 0; i < N; i++) {
    const [W, V] = items[i];
    
    // 핵심: 뒤에서부터 앞으로 거꾸로 계산해야 합니다!
    // 앞에서부터 하면 '방금 넣은 물건'을 또 넣는 중복 계산이 발생하기 때문입니다.
    for (let j = K; j >= W; j--) {
      dp[j] = Math.max(dp[j], dp[j - W] + V);
    }
  }

  console.log(dp[K]);
}

solution(N, K, items);
