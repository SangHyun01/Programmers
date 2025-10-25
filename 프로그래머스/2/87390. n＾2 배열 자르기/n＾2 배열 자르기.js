function solution(n, left, right) {
   let answer = []
   
   for(let i=left; i<= right; i++) {
       const row = Math.floor(i/n);
       const col = i % n;
       
       const value = Math.max(row,col) + 1;
       
       answer.push(value);
   }
    return answer
}

