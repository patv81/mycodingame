// Mime type
const N = parseInt(readline()); // Number of elements which make up the association table.
const Q = parseInt(readline()); // Number Q of file names to be analyzed.
let arr = {};
arr["nothing"] = "UNKNOWN";
for (let i = 0; i < N; i++) {
    var inputs = readline().split(' ');
    const EXT = inputs[0].toLowerCase(); // file extension
    const MT = inputs[1]; // MIME type.
    arr[EXT] = MT;
}
console.error(N, Q)
console.error(arr)
console.error("------------")
for (let i = 0; i < Q; i++) {
    const FNAME = readline(); // One file name per line.
    console.error(FNAME);
    let regex = /\.([^\.]*)$/m;
    let result = FNAME.match(regex) || ["nothing"];
    console.error("this", result)
    console.log(arr[result.slice(-1).pop().toLowerCase()] || "UNKNOWN");
    console.error("------------")
    // console.log("no")
}

// Write an answer using console.log()
// To debug: console.error('Debug messages...');


// For each of the Q filenames, display on a line the corresponding MIME type. If there is no corresponding type, then display UNKNOWN.

