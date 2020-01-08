/**
 * Date: 2020-01-08
 * GitHub: https://github.com/choisohyun/algorithm_javascript
 * Explain: https://egg-programmer.tistory.com/124
 */

const reverse = x => {
    const MAX_NUMBER = Math.pow(2, 31);
    const abs_number = Math.abs(x);

    let reverseNumbers = Number(abs_number.toString().split('').reverse().join(''));
    if (reverseNumbers > MAX_NUMBER) return 0;
    let answer = (x < 0) ? -reverseNumbers : reverseNumbers;

    return answer;
}