
// HUFFMAN CODE
// By Crypticsy
class Node {
    constructor(w, left = 0, right = 0) {
        this.w = w;
        this.left = left;
        this.right = right;
    }
}
const n = parseInt(readline());
var inputs = readline().split(' ');
let sum = 0;
let arr = [];
for (let i = 0; i < n; i++) {
    const wi = parseInt(inputs[i]);
    sum += wi;
    arr.push(wi);
}
if (n == 1) {
    console.log(sum * n);
    exit()
}
let tarr = arr.map(x => new Node(x / sum));
while (tarr.length != 1) {
    tarr = tarr.sort((a, b) => a.w - b.w)
    let t1 = tarr.shift();
    let t2 = tarr.shift()
    tarr.push(new Node(t1.w + t2.w, t1, t2))
}
let ro = tarr[0];
function label(root) {
    if (root.left) {
        root.left.sym = root.sym + '0'
        label(root.left);
    }
    if (root.right) {
        root.right.sym = root.sym + '1'
        label(root.right);
    }
}
ro.sym = "";
label(ro);
let result = 0;
function travel(root) {
    if (root.left == 0 && root.right == 0) {
        result += root.w * sum * root.sym.length
    }
    if (root.left) {
        travel(root.left);
    }
    if (root.right) {
        travel(root.right);
    }
}
travel(ro)
console.log(result);

