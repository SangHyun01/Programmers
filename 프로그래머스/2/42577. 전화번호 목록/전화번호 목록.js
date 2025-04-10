function solution(phone_book) {
    let newArr = phone_book.sort();
    for(let i=0; i<newArr.length-1; i++){
        if(newArr[i+1].startsWith(newArr[i])){
            return false;
        }
    }
    return true;
}