function solution(babbling) {
    let count = 0;
    const word = ["aya","ye","woo","ma"];
    for(let i=0; i<babbling.length; i++){
        let babble = babbling[i];
        for(let j=0; j<word.length; j++){
            if(babble.includes(word[j].repeat(2))){
                break;
            }
            babble = babble.split(word[j]).join(" ");
        }
        if(babble.split(" ").join("").length === 0){
            count++;
        }
    }
    return count;
}

// aya 는 그냥 비교하면 되는데
// aya + ye 같이 합쳐서 만들 수 있는 단어는 어떻게..?
