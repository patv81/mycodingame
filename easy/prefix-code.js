
// PREFIX CODE
// By chouch
const n = parseInt(readline());
let bi = [];
let ob = {};
for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    const b = inputs[0];
    const c = parseInt(inputs[1]);
    bi.push(b);
    ob[b] = String.fromCharCode(c);
}

const s = readline();
let pattern = new RegExp(bi.join("|"), "gm");
let arr = s.match(pattern);
let checkarr = s.replace(pattern, (m, ...f) => new Array(m.length).fill("*").join(""));
for (let i = 0; i < Math.max(checkarr.length, s.length); i++) {
    if (checkarr[i] !== "*") {
        console.log("DECODE FAIL AT INDEX " + String(i));
        exit();
    }
}

let result = [];
for (let i of arr) {
    result.push(ob[i]);
}
console.log(result.join(""));


