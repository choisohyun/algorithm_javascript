// 미완성 
/**
 * 구현 의도: 1부터 문자열의 총 길이의 절반 개수만큼 나눠 배열에 저장하고, 저장한 요소를 차례대로 중복하는지, 중복하면 개수를 세어나가는 형식으로 진행. 마지막에는 그 개수를 세어 반환하도록 함
 * 
 * 문제점
 * 1. 3번 이상 중복되는 문자열을 다 지우지 못함
 * 2. 중복되는 값을 다 세지 못함
 */

const solution = s => {
    let min = 1000;

    for (let i = 1; i <= s.length / 2 + 1; i++) {
        min = (countZip(s, i) < min) ? countZip(s, i) : min;
    }

    return min;
}

const makeSplit = (s, count) => {
    let answer = 1;
    let start = 0;
    let end = count;
    let zip_string_list = [];

    while (answer <= s.length) {
        zip_string_list.push(s.slice(start, end));

        answer += count;
        start += count;
        end += count;
    }

    return zip_string_list;
}

const countZip = (s, n) => {
    let zip_string_list = makeSplit(s, n);
    let zip_count = [];
    let count = 1;
    let answer = 0;
    console.log(zip_string_list);
    for (let i = 0; i < zip_string_list.length - 1; i++) {
        if (zip_string_list[i] === zip_string_list[i + 1]) {
            zip_string_list.splice(i + 1, 1);
            count++;
        }
        else {
            if (count > 1) zip_count.push(count);
            count = 0;
        }
    }
    if (count > 1) zip_count.push(count);

    if (zip_count.length === 0) {
        answer = s.length;
    }
    else {
        let string_length = zip_string_list.reduce((sum, element) => sum += element.length, 0);
        console.log(string_length);
        answer = string_length + zip_count.length;
    }
    console.log(zip_count);
    console.log(zip_string_list);
    return answer;
}

console.log(solution("aabaccc"));
// console.log(solution("ababcdcdababcdcd"));
// console.log(solution("abcabcdede"));
// console.log(solution("abcabcabcabcdededededede"));
// console.log(solution("xababcdcdababcdcd"));