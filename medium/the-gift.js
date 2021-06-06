// THE GIFT

const N = parseInt(readline());
const C = parseInt(readline());
let sum = 0;
let arr = [];
for (let i = 0; i < N; i++) {
    const B = parseInt(readline());
    sum += B;
    arr.push(B);
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');
if (sum < C) {
    console.log('IMPOSSIBLE');
}
arr.sort((a, b) => a - b);
let re = [];
let left = C;
let man = N;
let shouldbe = Math.floor(left / man);
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < shouldbe) {
        left = left - arr[i];
        man--;
        shouldbe = Math.floor(left / man);
        re.push(arr[i]);
    } else {
        left = left - shouldbe;
        re.push(shouldbe);
        man--;
        shouldbe = Math.floor(left / man);
    }
}

console.error(N, sum);
console.error(C)
console.error(arr)
if (sum >= C) {
    console.log(re.join("\n"))
}