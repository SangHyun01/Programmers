function solution(intStrs, k, s, l) {
    const ret = [];
    intStrs.forEach(a => {
        const sliceStr = a.slice(s,s+l)
        const num = Number(sliceStr)
        if(num > k) ret.push(num)
    })
    return ret;
}