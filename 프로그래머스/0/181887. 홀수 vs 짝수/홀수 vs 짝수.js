function solution(num_list) {
    let evenSum = 0;
    let oddSum = 0;
    num_list.map((v,i) => {
        !(i%2) ? evenSum += v : oddSum += v
    });
    return oddSum > evenSum ? oddSum : evenSum;
}