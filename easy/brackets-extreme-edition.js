
// BRACKETS, EXTREME EDITION.
// By Plopx

const e = readline();

let arr = [];
let inz = ["{", "[", "("];
let out = ["}", "]", ")"];
let ob = { "}": "{", "]": "[", ")": "(" };
let temp = 1;
for (let i = 0; i < e.length; i++) {
    if (inz.includes(e[i])) {
        arr.push(e[i]);
        temp = arr[i];
    }
    else if (out.includes(e[i])) {
        if (ob[e[i]] != arr[arr.length - 1]) {
            console.log(false);
            exit();
        } else {
            arr.pop();
        }
    }
}
if (arr.length > 0) {
    console.log(false);
    exit();
}
console.log('true');
