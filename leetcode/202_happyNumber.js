const isHappy = (n, dp = []) => {
    if (n === 1) return true;

    let nArray = String(n).split('');
    let calculate = nArray.reduce((sum, element) => sum += Math.pow((element), 2), 0);

    if (dp.includes(calculate)) return false;
    dp.push(calculate)
    return isHappy(calculate, dp);
};

console.log(isHappy(4));
console.log(isHappy(5));
console.log(isHappy(6));
console.log(isHappy(7));
console.log(isHappy(8));
console.log(isHappy(9));