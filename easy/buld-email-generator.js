// BULK EMAIL GENERATOR
// By JBM

let arr = [];
let p = /\(.*?\)/g;
const N = parseInt(readline());
let count = 0;
let str = "";
for (let i = 0; i < N; i++) {

    const line = readline();

    arr.push(line);
}
str = arr.join("\n");
p = /\((.|\n)+?\)/gm;
arr = str.match(p);
arr = arr.map(x => x.replace(/\(|\)/g, "").split("|"));
temp = str.replace(p, "###");
for (let i = 0; i < arr.length; i++) {
    temp = temp.replace("###", arr[i][i % arr[i].length]);
}
console.log(temp);



// console.log('Hello coders,');
// console.log("");
// console.log("I keep getting an error 492 in the notification area.");
// console.log("Are you aware of that?");
// console.log("")
// console.log("No choice");
// console.log("Lotsa 3 choices");
// console.log("Does it blend?");
// console.log("Lines");
// console.log("by two");
// console.log("");