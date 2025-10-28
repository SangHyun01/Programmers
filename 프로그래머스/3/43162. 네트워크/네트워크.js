function solution(n, computers) {
    // 컴퓨터 개수만큼 방문 배열 만들고 false 초기화
    let visited = new Array(n).fill(false);
    
    // 네트워크 셀 개수
    let answer = 0;
    
    // dfs 함수
    function dfs(currentNode) {
        // 현재 노드 방문 처리
        visited[currentNode] = true;
        
        for(let neighbor=0; neighbor < n; neighbor++) {
            if(computers[currentNode][neighbor] === 1 && !visited[neighbor]) {
                dfs(neighbor);
            }
        }
    }
    for(let i=0; i<n; i++) {
        // 아직 i번째 컴퓨터 방문 안했음으면
        if(!visited[i]) {
            answer++;
            
            dfs(i);
        }
    }
    
    return answer;
}

