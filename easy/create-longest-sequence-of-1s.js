// CREATE LONGEST SEQUENCE 1S
const b = readline();
let arr = b.split(/0/);
arr = arr.map(x => x.length || 0)
console.error(arr);
let max = -1;
for (let i = 0; i < arr.length - 1; i++) {
    let temp = arr[i] + arr[i + 1];
    if (temp > max) {
        max = temp;
    }
}
console.log(max + 1)