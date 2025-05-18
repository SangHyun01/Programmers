function solution(citations) {
    let answer = 0;
    for(let i=0;i<=citations.length; i++){
        const more = citations.filter(c => c>= i).length;
        if(more >= i) answer = i
    }
    return answer;
}


// 2부터 가장 큰수-1만큼 증가시키면서
// 2일때 -> i 보다 작으면 arr에 push arr길이랑 전체-arr길이 같으면 answer