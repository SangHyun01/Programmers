function solution(rsp) {
    let result = '';
    for(let i=0; i<rsp.length; i++){
        if(rsp[i] === '2'){
            result += '0';
        }else if(rsp[i] === '5'){
            result += '2';
        }else {
            result += '5';
        }
    }
    return result;
}