function solution(t, p) {
    let sameArr = [];
    for(let i=0; i<t.length; i++){
        let sliceStr = t.substr(i,p.length);
        if(sliceStr.length !== p.length){
            continue;
        }
        sameArr.push(sliceStr);
    }
    let answer = sameArr.filter((word) => word <= p).length;
    return answer;
}