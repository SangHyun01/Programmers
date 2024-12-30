function solution(s) {
    let ans = [];
    let Arr = s.split('');
    Arr.forEach((item)=>{
        if(s.indexOf(item) === s.lastIndexOf(item)){
            ans.push(item);
        }
    })
    return ans.sort().join("");
}