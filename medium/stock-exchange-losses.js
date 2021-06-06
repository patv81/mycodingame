// STOCK EXCHANGE LOSSES
const n = parseInt(readline());
var inputs = readline().split(' ');
let arr = [];
for (let i = 0; i < n; i++) {
    const v = parseInt(inputs[i]);
    arr.push(v);
}

let max = 0;
let imax = -1;
let min = 99999999;
let imin = -1;
let los = 0;
let previous = arr[0]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
        imax = i;
        min = max;
        imin = i;
    }
    if (arr[i] < min) {
        min = arr[i];
        imin = i;

    }
    if (imax < imin && los < max - min) {
        // console.error(max,min,imax,imin)
        los = max - min;
    }
}
console.log(parseInt(-los))