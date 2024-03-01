function solution(sides) {
    let line = sides.sort((a,b)=>b-a);
    return line[0] < line[1] + line[2] ? 1 : 2;  
}