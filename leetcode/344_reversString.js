// 내 코드
const reverseString = s => {
  // const SIZE = s.length;
  // const halfIndex = Math.floor(SIZE / 2);

  // for (let i = 0; i < halfIndex; i++) {
  //   let temp = s[i];
  //   s[i] = s[SIZE - 1 - i];
  //   s[SIZE - 1 - i] = temp;
  // }
  s.reverse();

  console.log("s", s);
};

reverseString(["h", "e", "l", "l", "o"]);
reverseString(["H", "a", "n", "n", "a", "h"]);
