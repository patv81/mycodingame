
// ENCOUNTER SURFACE
// By BLANC

const n = parseInt(readline());
const m = parseInt(readline());
let p1 = [];
let p2 = [];
for (let i = 0; i < n; i++) {
    var inputs = readline().split(' ');
    const x1 = parseInt(inputs[0]);
    const y1 = parseInt(inputs[1]);
    p1.push([x1, y1]);
}
for (let i = 0; i < m; i++) {
    var inputs = readline().split(' ');
    const x2 = parseInt(inputs[0]);
    const y2 = parseInt(inputs[1]);
    p2.push([x2, y2]);
}
function line(m, n) {
    let v = [m[0] - n[0], m[1] - n[1]];
    let f = (x) => -(x[0] - m[0]) * v[1] + (x[1] - m[1]) * v[0];
    //Ax+By+C
    f.a = -v[1]
    f.b = v[0]
    f.c = v[1] * m[0] - v[0] * m[1]
    f.p1 = m
    f.p2 = n
    return f;
}
function intline(l1, l2) {
    // let y = (-l1.c+l1.a*l2.c/l2.a)/(l1.b-l2.b*l1.a/l2.a);
    // let x = (-l1.c-l1.b*y)/l1.a;
    let a1 = l1.a, a2 = l2.a;
    let b1 = l1.b, b2 = l2.b;
    let c1 = l1.c, c2 = l2.c;
    let D = a1 * b2 - a2 * b1;
    if (D == 0) {
        // console.error("inline function error minus = 0 ", l1.a,l2.a);
        return undefined;
    }
    let Dx = -c1 * b2 + c2 * b1;
    let Dy = -c2 * a1 + c1 * a2;
    let x = Dx / D;
    let y = Dy / D;
    return [x, y];
}
function distance(p1, p2) {
    if (p1.length != 2 || p2.length != 2) {
        console.error(p1, p2);
    }
    return Math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2)
}

function checkbetween(p, a, b) {
    // if (line(a,b)(p)==0 && distance(p,a) < distance(a,b) && distance(p,b) < distance(a,b)){
    if (distance(p, a) < distance(a, b) && distance(p, b) < distance(a, b)) {
        return true;
    }
    return false;
}
function check1side(p1, p2, ...a) {
    let l = line(p1, p2);
    let size = a.map(x => l(x)).filter(x => x > 0).length;
    if (size == a.length || size == 0) {
        return true
    }
    return false
}
v = (...a) => a.reduce((a, b) => a.flatMap(d => b.map(e => [d, e])));
function compareE(a, b) {
    // a=[[1,1],[3,4]]
    // b=[[3,4],[1,1]]
    let case1 = a[1].join() == b[1].join() && a[0].join() == b[0].join();
    let case2 = a[1].join() == b[0].join() && a[0].join() == b[1].join();
    return case1 || case2;
}
function frontier(...arr) {
    let result = []
    let test = [];
    let copy = [...arr];
    for (let j = 0; j < copy.length; j++) {
        temp = copy.pop();
        tarr = [...copy];
        for (let i = 0; i < tarr.length; i++) {
            check = tarr.pop();
            if (check1side(check, temp, ...tarr)) {
                // l = line(check,temp)
                result.push([check, temp]);
                // if(result.map(x=>x[0]).join("|").split("|").indexOf(check.join(","))==-1 && ){
                // 	result.push([check,temp]);
                // }

            }
            tarr.unshift(check);
        }
        copy.unshift(temp);
    }
    let re2 = [];
    for (let i = 0; i < result.length - 1; i++) {
        for (let j = i + 1; j < result.length; j++) {
            if (compareE(result[i], result[j]))
                re2.push(result[i]);
        }
    }
    return re2.map(x => line(x[0], x[1]))

    // return re2;
}
function cutpoint(lar1, lar2) {
    let result = [];
    for (let i = 0; i < lar1.length; i++) {
        for (let j = 0; j < lar2.length; j++) {
            let p = intline(lar1[i], lar2[j])
            if (p == undefined) { continue; }
            if (checkbetween(p, lar1[i].p1, lar1[i].p2) && checkbetween(p, lar2[j].p1, lar2[j].p2)) {
                result.push(p);
            }
        }
    }
    return result;
}
function anglepoint(base, p1, p2) {
    return angleline(line(p1, base), line(p2, base));
}
function angleline(l1, l2) {
    let a1 = l1.a, a2 = l2.a;
    let b1 = l1.b, b2 = l2.b;
    let cos = (a1 * a2 + b1 * b2) / (Math.sqrt(a1 ** 2 + b1 ** 2) * Math.sqrt(a2 ** 2 + b2 ** 2));
    let sin = (a1 * b2 - a2 * b1) / (Math.sqrt(a1 ** 2 + b1 ** 2) * Math.sqrt(a2 ** 2 + b2 ** 2));
    let an = Math.atan2(b2 - b1, a2 - a1) / Math.PI * 180;
    // return an<0?an+180:an
    // // let re=  Math.acos(cos)/Math.PI*180;
    // console.log()
    // let re =Math.asin(sin)/Math.PI*180;
    let re = Math.acos(cos) / Math.PI * 180;
    return sin < 0 ? 360 - re : re;
}
function order(...parr) {
    let test = parr[0];
    let center = a => a.reduce((acc, cur) => [acc[0] + cur[0], acc[1] + cur[1]], [0, 0]).map(x => x / a.length);
    c = center(parr);
    // let re = parr.map(x=>anglepoint(c,test,x));
    let re = parr.sort((a, b) => anglepoint(c, test, a) - anglepoint(c, test, b))
    return re;
}

function checkinside(p, ...parr) {
    let re = [];
    let arr = order(...parr);
    for (let i = 0; i < arr.length; i++) {
        re.push(line(arr[i], arr[(i + 1) % arr.length])(p));
    }
    let check = re.filter(x => x > 0).length
    return check == arr.length || check == 0
    // return re;
}
function findex(lar1, lar2) {
    let re = [];
    for (let i = 0; i < lar1.length; i++) {
        if (checkinside(lar1[i], ...lar2)) {
            re.push(lar1[i]);
        }
    }
    for (let i = 0; i < lar2.length; i++) {
        if (checkinside(lar2[i], ...lar1)) {
            re.push(lar2[i]);
        }
    }
    return re;
}
function area(...parr) {
    op = order(...parr);
    size = op.length;
    re = 0;
    for (let i = 0; i < size; i++) {
        let x1 = parr[i][0], y1 = parr[i][1];
        let x2 = parr[(i + 1) % size][0], y2 = parr[(i + 1) % size][1];
        re += x1 * y2 - y1 * x2;
    }
    return re / 2;
}
function solver(a, b) {
    let t1 = findex(a, b);
    let covex1 = frontier(...a), covex2 = frontier(...b);
    let t2 = cutpoint(covex2, covex1);
    t3 = t1.concat(t2);
    t4 = order(...t3)
    let center = a => a.reduce((acc, cur) => [acc[0] + cur[0], acc[1] + cur[1]], [0, 0]).map(x => x / a.length);
    c = center(t4);
    return area(...t4);
}
console.log(Math.ceil(solver(p1, p2)));

