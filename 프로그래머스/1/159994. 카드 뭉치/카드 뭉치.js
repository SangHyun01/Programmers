function solution(cards1, cards2, goal) {
    let count = 0;
   for(let i=0; i<goal.length; i++){
       
       const findWord = goal[i];
       
       if(cards1[0] === goal[i]){
           cards1.shift();
           count++;
       }else if(cards2[0] === goal[i]){
           cards2.shift();
           count++;
       }else{
           return "No";
       }
    }
    return goal.length === count ? "Yes" : "No"
    
}