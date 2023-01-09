//피자 나눠 먹기(1)https://school.programmers.co.kr/learn/courses/30/lessons/120814
function solution(n) {
    var answer = 0;
    let plate = n/7;
    answer = Math.ceil(plate);
    
    return answer;
}
// 다른 사람 풀이
function solution(n) {
    return Math.ceil(n / 7)
}