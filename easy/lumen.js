
// LUMEN
// By Sceurpien

const N = parseInt(readline());
const L = parseInt(readline());
function access(arr, x, y) {
    try {
        return arr[x][y];
    } catch (e) {
        return undefined;
    }
}
// let N=5;let L=3;
let arr = [];
for (let i = 0; i < N; i++) {
    arr.push(new Array(N).fill(0));
}

function circle(arr, x, y, num) {
    if (num == 0) {
        if (access(arr, y, x) > -1) {
            arr[y][x]++;
        }
    }
    xtl = x - num;
    ytl = y - num;
    for (let i = 0; i < 2 * num; i++) {
        if (access(arr, ytl, xtl + i) > -1) {
            arr[ytl][xtl + i]++;

        } else { continue; } //arr == 0 || arr == undifined
    }
    xtr = x + num;
    ytr = y - num;
    for (let i = 0; i < 2 * num; i++) {
        if (access(arr, ytr + i, xtr) > -1) {
            arr[ytr + i][xtr]++;

        } else { continue; } //arr == 0 || arr == undifined
    }
    xbr = x + num;
    ybr = y + num;
    for (let i = 0; i < 2 * num; i++) {
        if (access(arr, ybr, xbr - i) > -1) {
            arr[ybr][xbr - i]++;
        } else { continue; } //arr == 0 || arr == undifined
    }
    xbl = x - num;
    ybl = y + num;
    for (let i = 0; i < 2 * num; i++) {
        if (access(arr, ybl - i, xbl) > -1) {
            arr[ybl - i][xbl]++;
        } else { continue; } //arr == 0 || arr == undifined
    }
}

arrC = [];
l = [];
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    l.push(inputs);
    for (let j = 0; j < N; j++) {
        if (l[i][j] == 'C') {
            arrC.push([i, j]);
        }
    }
}
for (let [x, y] of arrC) {
    for (let i = 0; i < L; i++) {
        for (let j = L - i; j > 0; j--) {

            circle(arr, x, y, i);
        }
    }
}

let sum = 0;
for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
        if (arr[i][j] == 0) {

            sum++;
        }
    }
}

console.log(sum);
