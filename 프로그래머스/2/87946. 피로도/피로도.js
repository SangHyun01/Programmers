function solution(k, dungeons) {
   let maxVisited = 0; // 던전 최대 방문 횟수
    const n = dungeons.length;
    
    // 각 던전 방문했는지 여부
    const visited = new Array(n).fill(false);
    
    function dfs(currentFatigue, count) {
        maxVisited = Math.max(maxVisited, count);
        
        for(let i=0; i<n; i++) {
            const [requiredFatigue, consumedFatigue] = dungeons[i];
            
            // 1. 아직 방문하지 않은 던전이고,
            // 2. 현재 피로도로 입장 가능한 경우
            if(!visited[i] && currentFatigue >= requiredFatigue) {
                visited[i] = true;
                
                // 다음 던전으로 재귀호출, 피로도 차감, 카운트 증가
                dfs(currentFatigue - consumedFatigue, count+1);
                
                // 현재 경로 탐색이 끝났으므로 방문 해제 처리
                // 다음 순서로 탐험할 때 이 던전 다시 방문할 수 있도록
                visited[i] = false;
            }
        }
    }
    dfs(k, 0);
    
    return maxVisited;
}