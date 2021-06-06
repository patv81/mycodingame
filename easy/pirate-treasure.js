// PIRATE'S TREASURE
const W = parseInt(readline());
const H = parseInt(readline());
let arr = [];
for (let i = 0; i < H; i++) {
    var inputs = readline().split(' ');
    arr.push(inputs);
}
function access(arr, x, y) {
    try {
        return arr[x][y]
    } catch (e) {
        return undefined
    }
}
function around(arr, w, h) {
    let W = arr[0].length;
    let H = arr.length;
    let re = [];
    for (let i = w - 1; i < w + 1; i++) {
        let t = access(arr, h - 1, i)
        if (t != undefined) { re.push(t) }
    }
    for (let i = h - 1; i < h + 1; i++) {
        let t = access(arr, i, w + 1)
        if (t != undefined) { re.push(t) }
    }
    for (let i = w + 1; i > w - 1; i--) {
        let t = access(arr, h + 1, i)
        if (t != undefined) { re.push(t) }
    }
    for (let i = h + 1; i > h - 1; i--) {
        let t = access(arr, i, w - 1)
        if (t != undefined) { re.push(t) }
    }
    return re;
}
console.error(arr);
for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
        let t = around(arr, j, i);
        if (t.filter(x => x == 1).length == t.length && arr[i][j] == 0) {
            console.log(j, i);
        }
    }
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

// console.log('x y');
