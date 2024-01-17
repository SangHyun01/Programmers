function solution(num_list) {
    const arr = num_list.sort((a,b)=>a-b);
    return arr.slice(0,5);
}