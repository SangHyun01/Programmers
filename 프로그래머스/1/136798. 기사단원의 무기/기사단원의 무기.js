function solution(number, limit, power) {
    let sum = 0;
    for(let i=1; i<=number; i++){
        let count = 0;
        for(let j=1; j * j<=i; j++){
            if(i % j === 0){
                count++;
                if(j * j !== i){
                    count++;
                }
            }
        }
        if(count > limit){
            count = power;
        }
        sum += count;
            
    }
    return sum;
}

// 1부터 number 까지의 수들의 약수 개수를 구해서 배열에 저장
// 배열을 순회하면서 누적합을 구함.
// 만약 배열 요소가 limit 보다 크면 배열 요소를 power 로 함
// 누적합 리턴