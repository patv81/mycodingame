
// EQUIVALENT RESISTANCE, CIRCUIT BUILDING

const N = parseInt(readline());
let arr = [];
let myMap = new Map();
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const name = inputs[0];
    const R = parseInt(inputs[1]);
    myMap.set(name, R);
}
function para(arr) {
    let sum = 0.0;
    for (let i = 0; i < arr.length; i++) {
        sum += typeof (arr[i]) == "string" ? 1 / myMap.get(arr[i]) : 1 / arr[i];
    }
    return 1 / sum;
}
function seri(arr) {
    let sum = 0.0;
    for (let i = 0; i < arr.length; i++) {
        sum += typeof (arr[i]) == "string" ? myMap.get(arr[i]) : arr[i];
    }
    return sum;
}

const circuit = readline();
arr = circuit.split(" ");
let stack = [];
for (let i = 0; i < arr.length; i++) {
    // console.error("arr",arr[i]);
    stack.push(arr[i]);
    if (arr[i] == ")") {
        let temp = [];
        temp.push(stack.pop());
        while (temp[temp.length - 1] != "(") {
            temp.push(stack.pop());
        }
        temp = temp.slice(1, -1);
        stack.push(seri(temp))
    }
    if (arr[i] == "]") {
        let temp = [];
        temp.push(stack.pop());
        while (temp[temp.length - 1] != "[") {
            temp.push(stack.pop());
        }
        temp = temp.slice(1, -1);
        stack.push(para(temp))
    }
}
console.log(stack[0].toFixed(1))

