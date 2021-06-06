
// SUDOKU VALIDATOR
// By redCroc

let arr = [];
for (let i = 0; i < 9; i++) {
    var inputs = readline().split(' ').map(x => parseInt(x));
    arr.push(inputs);
}
function foo(num, index) {
    bigcol = Math.floor(num / 3);
    bigrow = num % 3;
    col = Math.floor(index / 3);
    row = index % 3;
    return [bigcol * 3 + col, bigrow * 3 + row]
}
function sub(arr, num) {
    let re = [];
    for (let i = 0; i < 9; i++) {
        let index = foo(num, i);
        re.push(arr[index[0]][index[1]]);
    }
    return re;
}
function getcol(arr, num) {
    return arr.map((val, index) => val[num]);
}
let target = "123456789";
for (let i = 0; i < 9; i++) {
    let t1 = [...arr[i]].sort((a, b) => a - b).join("")
    let t2 = getcol(arr, i).sort((a, b) => a - b).join("")
    let t3 = sub(arr, i).sort((a, b) => a - b).join("")
    if (t1 + t2 + t3 != target + target + target) {
        console.log("false");
        exit();
    }
}


console.log('true');
