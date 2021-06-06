// RECTANGLE PARTITION
// By java_coffee_cup
var inputs = readline().split(' ');
const w = parseInt(inputs[0]);
const h = parseInt(inputs[1]);
const countX = parseInt(inputs[2]);
const countY = parseInt(inputs[3]);
var inputs = readline().split(' ');

let arrx = [0, w];
let arry = [0, h];
for (let i = 0; i < countX; i++) {
    const x = parseInt(inputs[i]);
    arrx.push(x);
}
var inputs = readline().split(' ');
for (let i = 0; i < countY; i++) {
    const y = parseInt(inputs[i]);
    arry.push(y);
}
arrx = arrx.sort((x, y) => x - y);
arry = arry.sort((x, y) => x - y);
let arr = [];
for (let i = 0; i < arry.length; i++) {
    let temp = []
    for (let j = 0; j < arrx.length; j++) {
        temp.push([arrx[j], arry[i]]);
    }
    arr.push(temp)
}
let distance = (a, b) => Math.abs(a[0] - b[0] + a[1] - b[1])

let sum = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
        for (let ax = j + 1; ax < arr[0].length; ax++) {
            for (let ay = i + 1; ay < arr.length; ay++) {
                if (distance(arr[i][j], arr[ay][j]) == distance(arr[i][j], arr[i][ax])) {
                    sum++;
                }
            }
        }
    }
}
console.log(sum);