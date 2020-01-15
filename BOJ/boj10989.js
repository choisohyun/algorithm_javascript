// 미완성: 백준에서 nodejs가 안됨(메모리초과)
let fs = require('fs');
let N = fs.readFileSync('/dev/stdin').toString();
let array = [];
for (i = 0; i <= N; i++) {
    array[i] = fs.readFileSync('/dev/stdin').toString();
}

// cuntingSort(array);

// const cuntingSort = (array) => {
// let max = Math.max(...array);
let answer = [];
let count = [];

array.forEach(number => count[number]++);

for (let i = 1; i < count.length; i++) {
    count[i] += count[i - 1];
}

for (let i = array.length - 1; i >= 0; i--) {
    answer[--count[array[i]]] = array[i];
}

answer.forEach(x => console.log(x));
// }