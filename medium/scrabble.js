// SCRABBLE
let ob = {};
ob.e = ob.a = ob.i = ob.o = ob.n = ob.r = ob.t = ob.l = ob.s = ob.u = 1;
ob.d = ob.g = 2
ob.b = ob.c = ob.m = ob.p = 3
ob.f = ob.h = ob.v = ob.w = ob.y = 4
ob.k = 5
ob.j = ob.x = 8
ob.q = ob.z = 10
function numC(arr) {
    let a = new Set(arr.split(""));
    let re = {}
    let t = [...a];
    t.map(x => re[x] = arr.match(new RegExp(x, 'g')).length);
    return re
}
function cal(str, o) {
    let pattern = new RegExp(Object.keys(o).join("|"), "g");
    let a = numC(str);
    let sum = 0;
    if ((str.match(pattern) || []).length != str.length) {
        return 0;
    }
    for (let i in o) {
        let m = Math.min(o[i], a[i] || 0)
        sum += m * ob[i]
        if (a[i] > o[i]) {
            return 0
        }
    }
    return sum;
}
const N = parseInt(readline());
let arr = [];
for (let i = 0; i < N; i++) {
    const W = readline();
    arr.push(W);
}

const LETTERS = readline();
const p = numC(LETTERS);
let t = arr.map(x => cal(x, p))
let index = t.indexOf(Math.max(...t))

console.log(arr[index]);
