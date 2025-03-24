function solution(players, callings) {
    let rankMap = new Map();
    
    players.forEach((player, index)=> {
        rankMap.set(player, index);
    })
    
    for(let player of callings){
        let curRank = rankMap.get(player);
        if(curRank > 0){
            let frontPlayer = players[curRank - 1];
            
            players[curRank - 1] = player;
            players[curRank] = frontPlayer;
            
            rankMap.set(player, curRank - 1);
            rankMap.set(frontPlayer, curRank);
        }
    }
    return players
}