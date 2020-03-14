const reverseVowels = s => {
  const strList = s.split("");
  const vowels = "aeiou";
  let vowelIndexList = [];

  strList.forEach((element, index) => {
    if (vowels.includes(element.toLowerCase())) {
      vowelIndexList.push(index);
    }
  });

  const SIZE = vowelIndexList.length;
  const halfIndex = Math.floor(SIZE / 2);

  for (let i = 0; i < halfIndex; i++) {
    const j = vowelIndexList[i];
    let temp = strList[j];
    strList[j] = strList[vowelIndexList[SIZE - 1 - i]];
    strList[vowelIndexList[SIZE - 1 - i]] = temp;
  }

  return strList.join("");
};

console.log(reverseVowels("hello"));
console.log(reverseVowels("aA"));
console.log(reverseVowels("leetcode"));
