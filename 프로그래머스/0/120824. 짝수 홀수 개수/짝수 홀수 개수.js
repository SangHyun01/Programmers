function solution(num_list) {
    let result = [];
    result.push(num_list.filter(el => el%2===0).length);
    result.push(num_list.filter(el => el%2 === 1).length);
    return result;
}