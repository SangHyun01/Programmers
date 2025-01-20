function solution(age) {
    let arr = String(age).split('');
    let result = '';
    for(let i=0; i<arr.length; i++){
        result += String.fromCharCode(Number(arr[i]) + 97)
    }
    return result;
}