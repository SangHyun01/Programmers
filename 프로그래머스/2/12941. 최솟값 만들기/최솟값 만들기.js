function solution(A,B){
    // 누적 합
    let total_sum = 0;
    
    // 오름차순 정렬
    let sortedA = A.sort((a,b) => a-b); // 1,2,4   1,2
    // 내림차순 정렬
    let sortedB = B.sort((a,b) => b-a); // 5,4,4   4,3
    
    for(let i=0; i<sortedA.length; i++) {
        total_sum += (sortedA[i] * sortedB[i]);
    }
    return total_sum;
}
    
