
// ROCK PAPER SCISSORS LIZARD SPOCK
// By _Vincent_
let ob = {};
ob["R"] = ["L", "C"];
ob["L"] = ["S", "P"];
ob["S"] = ["R", "C"];
ob["P"] = ["R", "S"];
ob["C"] = ["L", "P"];
function compare(input1, input2) {
    input1[2].push(input2[0]);
    input2[2].push(input1[0]);
    if (input2[1] === input1[1]) return input1[0] < input2[0] ? input1 : input2;
    if (ob[input1[1]].includes(input2[1])) {
        return input1;
    } else {
        return input2;
    }
}
const N = parseInt(readline());
let arr = [];
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');

    const NUMPLAYER = parseInt(inputs[0]);
    const SIGNPLAYER = inputs[1];
    arr.push([NUMPLAYER, SIGNPLAYER, []]);
}
while (arr.length > 1) {
    input1 = arr.shift();
    input2 = arr.shift();
    arr.push(compare(input1, input2));
}

console.log(arr[0][0])
console.log(arr[0][2].join(" "))
