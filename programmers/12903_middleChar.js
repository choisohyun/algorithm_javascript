const solution = s => {
  const middleIndex = Math.floor(s.length / 2);
  const answer = "";

  if (s.length % 2 === 1) {
    answer = s.substring(middleIndex, middleIndex + 1);
  } else {
    answer = s.substring(middleIndex - 1, middleIndex + 1);
  }

  return answer;
};

console.log(solution("abcde"));
console.log(solution("qwer"));
console.log(solution("dfsdfsdjfksfd"));
console.log(solution("abcdefh"));
