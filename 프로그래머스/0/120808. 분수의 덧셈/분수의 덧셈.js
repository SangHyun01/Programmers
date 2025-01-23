function solution(numer1, denom1, numer2, denom2) {
    let result = [];
    // 분자의 합
    let numer = numer1 * denom2 + numer2 * denom1;
    // 분모의 합
    let denom = denom1 * denom2;

    // 최대공약수(GCD) 계산 함수
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

    // 최대공약수를 이용해 기약 분수로 변환
    let greatestCommonDivisor = gcd(numer, denom);
    result[0] = numer / greatestCommonDivisor;
    result[1] = denom / greatestCommonDivisor;

    return result;
}
