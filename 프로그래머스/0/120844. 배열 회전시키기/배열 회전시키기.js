function solution(numbers, direction) {
    // pop(), push(), unshift(), shift()
    if(direction === 'right'){
        const n = numbers.pop();
        numbers.unshift(n);
    }else {
        const n = numbers.shift();
        numbers.push(n);
    }
    return numbers;
}
// 만약 rigth 이면 요소의 인덱스를 +1 마지막 인덱스 이면 0으로 설정

// 만약 left 이면 요소의 인덱스를 -1 첫번째 인덱스이면 마지막 인덱스로 설정
