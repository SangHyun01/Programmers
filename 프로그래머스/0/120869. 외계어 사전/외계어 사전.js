function solution(spell, dic) {
    // dic 을 순회
    for(let i=0; i<dic.length; i++){ // i = 2
        // 첫번째 spell이 포함되어 있으면 다음 스펠 검사
        let count = 0;
        
        for(let j = 0; j < spell.length; j++){ // j = 2
            if(dic[i].includes(spell[j])){ // dic[i] = dzx, spell[j] = x
                count++; // 3
            }else{
                break;
            }
            
        }
        
        if(count === spell.length){
                return 1;
        }
        
    }
    return 2;
}