function solution(phone_number) {
    let answer = '';
    let back = phone_number.substr(-4,4);
    let front = phone_number.substring(0,phone_number.length-4);
    
    let result = front.replace(/[0-9]/g,'*');
    
    answer = result + back;
    
    return answer;
}