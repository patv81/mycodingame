// ENCRYPTION / DECRYPTION OF ENIGMA MACHINE
// By SudeepMukherje
const operation = readline();
function createRot(str) {
    let ob = {};
    let arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    temp = str.split("");
    arr = arr.split("");
    arr.forEach((cur, index) => ob[cur] = temp[index]);
    return ob;
}
function createReRot(str) {
    let ob = {};
    let arr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    temp = str.split("");
    arr = arr.split("");
    temp.forEach((cur, index) => ob[cur] = arr[index]);
    return ob;
}
const pseudoRandomNumber = parseInt(readline());

let rots = {};
let rerots = {};
for (let i = 0; i < 3; i++) {
    const rotor = readline();
    rots[i] = createRot(rotor);
    rerots[2 - i] = createReRot(rotor);
}
let message = readline();

message = message.split('');
function encode(rots, mess) {
    return mess.map(current => {
        let re = current;
        for (let i in rots) {
            re = rots[i][re];
        }
        return re;
    }
    )
}
let result = "";
if (operation == 'ENCODE') {
    message = message.map((x, index) =>
        String.fromCharCode((x.charCodeAt() + index + pseudoRandomNumber - 65) % 26 + 65)
    );
    result = encode(rots, message);
}
else {
    result = encode(rerots, message);

    result = result.map((x, index) =>
        String.fromCharCode(Math.abs(x.charCodeAt() + 26 - index % 26 - pseudoRandomNumber % 26 - 65 % 26) % 26 + 65)
    );
}

console.log(result.join(""));
