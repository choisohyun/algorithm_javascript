// 완성 
/**
 * 참고 : https://dreammarker.tistory.com/67
 * 
 * 설명: https://egg-programmer.tistory.com/125
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