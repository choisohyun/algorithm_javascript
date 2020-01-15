function solution(array, commands) {
    var answer = [];

    commands.forEach(element => {
        answer.push(array.slice(element[0] - 1, element[1]).sort((a, b) => a - b)[element[2] - 1]);
    });

    return answer;
}

