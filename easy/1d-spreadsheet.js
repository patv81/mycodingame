// 1D SPREADSHEET
// By PolyB
const N = parseInt(readline());
let arr = [];
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const operation = inputs[0];
    const arg1 = inputs[1];
    const arg2 = inputs[2];

    arr.push([operation, arg1, arg2]);
}

function access(input) {
    if (input == "_") return undefined;

    index = input.split("$");
    if (index.length == 2) {
        temp = arr[parseInt(index[1])];
        if (typeof (temp) == "object") {
            return action(temp[0], temp[1], temp[2], parseInt(index[1]));
        }
        return temp;
    }
    return parseInt(input);
}
function action(op, in1, in2, index) {
    let t1 = access(in1);
    let t2 = access(in2);

    switch (op) {
        case "VALUE":
            if (t1 !== undefined) {
                arr[index] = t1;
            }
            // arr[index]=t1||arr[index];

            break;
        case "ADD":
            if (t1 !== undefined && t2 !== undefined) {
                arr[index] = t1 + t2;
            }
            break;
        case "MULT":
            if (t1 !== undefined && t2 !== undefined) {
                arr[index] = t1 * t2;
            }
            break;
        case "SUB":
            if (t1 !== undefined && t2 !== undefined) {
                arr[index] = t1 - t2;
            }
            break;
    }
    return arr[index];
}
for (let i = 0; i < arr.length; i++) {
    if (typeof (arr[i]) == "object") {

        action(arr[i][0], arr[i][1], arr[i][2], i);
    }
}
for (let i = 0; i < arr.length; i++) {
    console.log(parseInt(arr[i]));
}
