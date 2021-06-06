// NETWORK CABLING
let arr = [];
let t = [];
const N = parseInt(readline());
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const X = parseInt(inputs[0]);
    const Y = parseInt(inputs[1]);
    arr.push([X, Y]);
    t.push(X);
}
console.error(arr);
let minx = Math.min(...t);
let maxx = Math.max(...t);
arr.sort((a, b) => a[1] - b[1]);
y = arr[Math.ceil((arr.length - 1) / 2)][1];
let sum0y = arr.reduce((ac, b) => ac + Math.abs(b[1] - y), 0)
console.log(sum0y + maxx - minx);