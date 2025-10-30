function solution(picks, minerals) {
    let answer = 0;
    
    // 캘 수 있는 최대 광물의 수
    // 곡괭이 수랑 미네랄 개수 중 더 적은 수만큼 채굴 가능
    const picks_count = (picks.reduce((a,c) => a+c)) * 5; // 곡괭이 수
    const minerals_count = minerals.length;
    
    const max_possible = Math.min(picks_count, minerals_count);
    
    // 피로도 계산표
    const fatigue = {
        "diamond": {"diamond": 1, "iron":1, "stone":1},
        "iron" : {"diamond": 5, "iron":1., "stone":1},
        "stone" : {"diamond":25, "iron":5, "stone":1}
    };
    
    // 5개씩 자른 그룹을 담을 배열
    let groups = [];
    
    for(let i=0; i<max_possible; i+=5) {
        const chunk = minerals.slice(i, i+5);
        
        // 돌 곡괭이 기준으로 피로도 계산
        let cost = 0;
        for(const mineral of chunk) {
            cost += fatigue["stone"][mineral];
        }
        groups.push({minerals: chunk, cost:cost})
    }

    // 비용 기준 내림차순 (피로도 큰 것부터 채굴)
    groups.sort((a,b) => b.cost - a.cost);

    const pickTypes = ["diamond","iron","stone"];
        
    for(let i=0; i<picks.length; i++) {

        const pickType = pickTypes[i];
        let pickCount = picks[i] // 해당 곡괭이 개수

        // 곡괭이 다 쓰거나 캘 그룹이 없을 때까지
        while(pickCount > 0 && groups.length > 0) {
            const currentGroup = groups.shift();

            // 실제 피로도 계산
            for(const mineral of currentGroup.minerals) {
                answer += fatigue[pickType][mineral];
            }
            pickCount--;
        }
    }
    return answer;
}

// 곡괭이는 아무거나 있는대로 선택 가능, 광물은 순서대로
// 가장 피로도 높은걸 가장 좋을 곡괭이로 채굴해야함

// 5개씩 잘라서 피로도 비교
// 피로도 비교하려면 다이아몬드는 다 1이니까 비교할수 없음. 돌 기준으로 비교
// 그룹1= 25+25+25+5+5 = 85
// 그룹2=25+5+1=31

// result=0
// 그룹1을 다이아몬드로 캐야함
// 1+1+1+1+1
// 그룹2를 철로 캠
// 5+1+1
// result = 12
// (1+3+2)*5 = 30

// 그룹1 25+25+25+25+25=125
// 그룹2 5+5+5+5+5= 25
// 그룹3 = 25
    
// 곡괭이 개수 10개라 광물 10개까지 채굴 가능


