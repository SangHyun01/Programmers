function solution(my_string) {
    let arr = [...my_string].filter(el => parseInt(el)).map(a => Number(a));
    return arr.reduce((a,b)=>a+b);
    
}