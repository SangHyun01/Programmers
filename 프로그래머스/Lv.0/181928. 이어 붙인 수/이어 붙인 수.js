function solution(num_list) {
    let odd = num_list.filter(el => (el%2 === 1));
    let even = num_list.filter(el => (el%2 === 0));
    return Number(odd.join('')) + Number(even.join(''));
}