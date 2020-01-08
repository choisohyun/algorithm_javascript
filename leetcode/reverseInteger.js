/**
 * Date: 2020-01-08
 * GitHub: https://github.com/choisohyun/algorithm_javascript
 * Explain: https://egg-programmer.tistory.com/124
 */

const reverse = x => {
    const MAX_NUMBER = Math.pow(2, 31);
    const absolute = Math.abs(x);

    let reverseNumbers = Number(absolute.toString().split('').reverse().join(''));
    if (reverseNumbers > MAX_NUMBER) return 0;
    let answer = (x < 0) ? -reverseNumbers : reverseNumbers;

    return answer;
}



console.log(reverse(1534236469));
console.log(reverse(120));
console.log(reverse(-123));