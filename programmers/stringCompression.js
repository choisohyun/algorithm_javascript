// 미완성 
/**
 * 구현 의도: 1부터 문자열의 총 길이의 절반 개수만큼 나눠 배열에 저장하고, 
 * 저장한 요소를 차례대로 중복하는지, 중복하면 개수를 세어나가는 형식으로 진행. 
 * 마지막에는 그 개수를 세어 반환하도록 함
 * 
 * 문제점
 * - 기본 테스트케이스는 통과하지만 채점하면 모든 테스트케이스를 통과하지 못함
 * - 너무 복잡하게 만들었음
 * - 문제가 뭔지 모르겠음
 */

const solution = s => {
    let min = 1000;

    for (let i = 1; i <= s.length / 2 + 1; i++) {
        min = (countZip(s, i) < min) ? countZip(s, i) : min;
    }

    return min;
}

const countZip = (s, position) => {
    let answer = 1;
    let start = 0;
    let end = position;
    let count = 1;
    let result = "";

    while (answer <= s.length) {
        let currWord = s.slice(start, end);
        let nextWord = s.slice(start + position, end + position);

        answer += position;
        start += position;
        end += position;

        if (currWord === nextWord) {
            count++;
        }
        else {
            if (count === 1) {
                result += currWord;
            }
            else {
                result += count + currWord;
            }
            count = 1;
        }
    }

    return result.length;




}

console.log(solution("aabbaccc"));
console.log(solution("ababcdcdababcdcd"));
console.log(solution("abcabcdede"));
console.log(solution("abcabcabcabcdededededede"));
console.log(solution("xababcdcdababcdcd"));