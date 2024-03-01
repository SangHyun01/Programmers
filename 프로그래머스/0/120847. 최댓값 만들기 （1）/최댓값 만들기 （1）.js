function solution(numbers) {
    let array = numbers.sort((a,b)=> b-a);
    return array[0] * array[1];
}