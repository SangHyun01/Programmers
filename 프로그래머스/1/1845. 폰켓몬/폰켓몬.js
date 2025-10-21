function solution(nums) {
    // 중복 제거
    let set  = new Set(nums);
    
    // 찾고자 하는 개수
    let find_count = nums.length / 2;
    
    // 종류의 개수
    let counts = set.size;
    
    let result = Math.min(find_count, counts);
    
    return result
}


