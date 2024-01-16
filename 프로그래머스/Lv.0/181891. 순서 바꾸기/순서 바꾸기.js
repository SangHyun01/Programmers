function solution(num_list, n) {
    let arr = num_list.slice(n,num_list.length);
    return result = arr.concat(num_list.slice(0,n));
}