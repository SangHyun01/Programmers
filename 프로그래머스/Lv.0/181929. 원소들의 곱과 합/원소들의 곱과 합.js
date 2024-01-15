function solution(num_list) {
    let mul_sum = 1;
    let add_sum = 0;
    for(let i=0; i<num_list.length; i++){
        mul_sum *= num_list[i];
        add_sum = add_sum + num_list[i];
    }
    return result = mul_sum < add_sum**2 ? 1 : 0;
}