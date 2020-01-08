/**
 * Date: 2020-01-08
 * GitHub: https://github.com/choisohyun/algorithm_javascript
 * Explain: https://egg-programmer.tistory.com/123
 */

const solution = (participant, completion) => {
    let answer = '';

    participant.sort();
    completion.sort();
    let idx = 0;

    completion.some(x => {
        if (x !== participant[idx]) {
            answer = participant[idx];
            return true;
        }
        idx++;
    });

    if (answer === '') answer = participant[participant.length - 1];

    return answer;
}