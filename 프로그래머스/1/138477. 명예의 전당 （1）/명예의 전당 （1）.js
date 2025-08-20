function solution(k, score) {
   let rank = []
   let result = []
   
   for(let i = 0; i<score.length; i++){
       // 일단 rank에 점수 추가
       rank.push(score[i]);
       
       // 내림차순
       rank.sort((a,b) => b - a)
       
       if(rank.length > k){
           rank.pop();
       }
       
       result.push(rank[rank.length-1])
   }
    return result;
}

 // let rank = [score[0]]
 //    let result = [score[0]];
 //    for(let i=1; i<score.length; i++){
 //        if(score[i] > rank[rank.length - 1]){ // rank의 마지막 점수보다 크고
 //            if(rank.length < k) { // rank의 길이가 k보다 작을때
 //                rank.push(score[i]); // rank에 점수 넣고
 //                rank.sort((a,b) => b-a); // 내림차순 정렬
 //                result.push(rank[rank.length - 1]); // rank의 마지막 점수를 result에 push
 //            } else {
 //                rank.pop();
 //                rank.push(score[i]);
 //                rank.sort((a,b) => b-a);
 //                result.push(rank[rank.length - 1]);
 //            }
 //        } else {
 //            result.push(rank[rank.length - 1]); // rank의 마지막 점수보다 작으면 그냥 마지막꺼
 //        }
 //    }
 //    return result;