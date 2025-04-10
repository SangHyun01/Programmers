function solution(nums) {
    const set = new Set(nums);
    return set.size >= Math.floor(nums.length/2) ? Math.floor(nums.length/2) : set.size;
}
// nums 를 set으로 저장해서 중복을 없애고

// [3,3,3,2,2,4] -> [3,2,4] 3개
// [3,1,2,3] -> [3,1,2] 2
// [3,3,3,2,2,2] -> [3,2] 3
// set한거의 size >= nums/2 return=nums/2
// size < nums/2 return=size