function solution(plans) {
    // 완료한 과제 담을 배열
    let finish = [];
    
    // 잠시 멈춘 과제 담을 스택
    let paused = [];
    
    // 시작 시간 기준으로 오름차순 정렬
    let sorted_plans = plans.sort((a,b) => {
        const timeA = timeToMinute(a[1]);
        const timeB = timeToMinute(b[1]);
        
        return timeA - timeB;
    });
    
    for(let i=0; i<sorted_plans.length - 1; i++) {
        const current_plan = sorted_plans[i]; // 현재 과제
        const next_plan = sorted_plans[i+1]; // 다음 과제
        
        const current_name = current_plan[0];
        const current_start = timeToMinute(current_plan[1]);
        const current_playtime = Number(current_plan[2]); // 과제 진행 시간
        const current_finish = current_start + current_playtime // 과제 진행 후 시간
        
        // 다음 과제 시작 시간
        const next_start = timeToMinute(next_plan[1]);
        
        // 앞 과제 종료가 다음 과제 시작보다 늦으면
        if(current_finish > next_start) {
            // 과제 남은 시간
            const remaining_time = current_finish - next_start;
            
            // 진행 중이던 과제 스택에 넣음
            paused.push([current_name, remaining_time]);
        } else { // 앞 과제가 다음 과제 시작 전에 끝나면 finish에 담음
            finish.push(current_name);
            
            // 다음 과제 시작전까지 남는 시간
            let free_time = next_start - current_finish;
            
            while(free_time > 0 && paused.length > 0) {
                let [paused_name, paused_playtime] = paused.pop(); // 가장 최근 과제 꺼냄
                
                // 남은 시간동안 다 끝낼 수 있으면
                if(free_time >= paused_playtime) {
                    finish.push(paused_name);
                    free_time -= paused_playtime;
                } else { // 다 못 끝내면
                    paused_playtime -= free_time;
                    paused.push([paused_name, paused_playtime]);
                    free_time=0;
                }
            }   
        }   
    }
    
    finish.push(sorted_plans[sorted_plans.length - 1][0]);
    
    while(paused.length > 0) {
        finish.push(paused.pop()[0]);
    }
    return finish;
}

// 시간을 분으로 바꿔주는 함수
function timeToMinute(timeStr) {
    const [hour, minute] = timeStr.split(":").map(Number);
    return hour * 60 + minute;
}


// 시작 시간 11 * 60 + 40
// 끝나는 시간 700 + 30 730

// 시작 시간 12 * 60 + 10
// 끝나는 시간 730 + 20 = 750

// 시작 시간 12 * 60 + 30 = 750
// 끝나는 시간 750 + 40

// 시작 시간 기준 오름차순 정렬

// [science,760,50] 760+50<=810 끝남 result에 추가 현재 시간=810 아직 history 전까지 시간 남음
// [music, 740, 40] 40-10=30분남음
// [history, 840, 30] 현재 시간=840+30=870 result에 추가
// [computer, 750, 100] 100-10=90분 남음
// 멈춘 과제 큐 [music:30,computer:90-30=60]
// finish = [science,history,computer,music]
// finish+큐 값이 plans.length랑 같아지면 큐에서 pop해서 finish에 추가


