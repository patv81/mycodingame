// FLOWER BEDS
// By Fluxor

const N = parseInt(readline());
let arr = [];
let tarr = [];
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const x = parseInt(inputs[0]);
    const y = parseInt(inputs[1]);
    arr.push([x, y]);
}

function line(m, n) {
    let v = [m[0] - n[0], m[1] - n[1]];
    let f = (x) => -(x[0] - m[0]) * v[1] + (x[1] - m[1]) * v[0];
    //Ax+By+C
    f.a = -v[1]
    f.b = v[0]
    f.c = v[1] * m[0] - v[0] * m[1]
    f.p1 = m
    f.p2 =
        f.knowY = (y) => (-f.c - f.b * y) / (f.a);
    f.knowX = (x) => (-f.c - f.a * x) / (f.b);
    return f;
}

function area(...parr) {
    // op = order(...parr);
    op = [...parr];
    size = op.length;
    re = 0;
    for (let i = 0; i < size; i++) {
        let x1 = parr[i][0], y1 = parr[i][1];
        let x2 = parr[(i + 1) % size][0], y2 = parr[(i + 1) % size][1];
        // re += Number((x1 * y2 - y1 * x2).toPrecision(5));
        re += (x1 * y2 - y1 * x2);
    }
    return re / 2;
}

function cPoint(...parr) {
    let re = 0;
    size = parr.length;
    let t = 0;
    for (let i = 0; i < size; i++) {
        let p1 = parr[i];
        let p2 = parr[(i + 1) % size];
        re += countP(p1, p2);
        // console.error(p1,p2, re-t);
        t = re;
    }
    return re;
}
var gcd = function (a, b) {
    if (!b) {
        return a;
    }

    return gcd(b, a % b);
}
function countP(m, n) {
    let x = m[1] - n[1];
    let y = m[0] - n[0];
    let rate = gcd(Math.abs(x), Math.abs(y));

    return rate;
}
let b = cPoint(...arr);
let s = area(...arr);
console.error("this is b", b, s);
console.error(arr);
console.log(s + 1 - b / 2);
