function solution(tickets) {
    const graph = {}
    for(const [from, to] of tickets) {
        if(!graph[from]) {
            graph[from] = [];
        }
         graph[from].push(to);
    }
    for(const key in graph) {
        graph[key].sort().reverse();
    }
    
    const stack = ['ICN'];
    const path = [];
    
    while(stack.length > 0){
        const current = stack[stack.length - 1];
        
        if(graph[current] && graph[current].length > 0) {
            const next = graph[current].pop();
            stack.push(next);
        } else {
            path.push(stack.pop());
        }
    }
    return path.reverse();
}