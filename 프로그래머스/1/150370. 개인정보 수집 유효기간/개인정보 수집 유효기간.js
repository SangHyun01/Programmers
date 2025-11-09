function solution(today, terms, privacies) {
   
    let result = [];
    
    // 약관을 Map으로 생성
    const termsMap = new Map();
    for(const term of terms) {
        const [type, monthStr] = term.split(" ");
        
        termsMap.set(type, Number(monthStr));
    }
    
    // 오늘 날짜
    const todayDay = dateToDay(today)
    
    privacies.forEach((privacy, i) => {
        const [privacyDay, privacyType] = privacy.split(" ") // 공백 기준
        
        // 수집일
        const collectionDay = dateToDay(privacyDay);
        
        const termInDays = termsMap.get(privacyType) * 28;
        const lastValidDay = collectionDay + termInDays - 1;
        
        // 파기 해야함
        if(lastValidDay < todayDay) {
            result.push(i+1);
        }
    });
    return result;
}

// 날짜를 일수로 변경하는 함수
function dateToDay(str) {
    const [year, month, day] = str.split(".").map(Number); // . 기준으로 쪼갬
    
    return (year * 12 * 28) + (month * 28) + day; // 일 수 리턴 
}

// 날짜를 모드 일로 변환해서 비교

// 1년: 12*28 = 336
// 1달:28

// 2021*336+5*28+2