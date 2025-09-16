function solution(n, computers) {
    var answer = 0;
    const visited = new Array(n).fill(false);
    
    for(let i=0; i<n; i++) {
        // 이 컴퓨터를 방문하지 않았으면
        if(!visited[i]) {
            // 새로운 네트워크 발견했으므로
            answer++;
            bfs(i, n, computers, visited)
        }
    }
    return answer;
}

function bfs(start, n, computers, visited) {
    const queue = [start];
    visited[start] = true;
    
    while(queue.length > 0) {
        const currentNode = queue.shift();
        
        for(let j=0; j<n; j++) {
            // 자기 자신이 아니고
            // 다른 컴퓨터와 연결되어있고
            // 방문하지 않은 것
            if(currentNode !== j && computers[currentNode][j] === 1 && !visited[j]) {
                visited[j] = true;
                queue.push(j);
            }
        }
    }
}