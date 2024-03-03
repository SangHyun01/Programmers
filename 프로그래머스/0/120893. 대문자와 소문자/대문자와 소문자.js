function solution(my_string) {
    return [...my_string].map((x) => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('');
}