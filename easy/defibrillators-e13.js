// DEFIBRILLATORs

const LON = readline();
const LAT = readline();
const N = parseInt(readline());
let a = {};
a['lon'] = parseFloat(LON.replace(',', '.'));
a['lat'] = parseFloat(LAT.replace(',', '.'));
let min = 9999999;
let re = {};
for (let i = 0; i < N; i++) {
    const DEFIB = readline();
    let arr = DEFIB.split(";");
    let b = {};
    b['lon'] = parseFloat(arr[4].replace(',', '.'));
    b['lat'] = parseFloat(arr[5].replace(',', '.'));
    let x = (b['lon'] - a['lon']) * Math.cos((a['lat'] + b['lat']) / 2 * Math.PI / 180);
    let y = b['lat'] - a['lat'];
    let d = Math.sqrt(x ** 2 + y ** 2) * 6371;

    if (min > d) {
        min = d;
        re['name'] = arr[1];
    }
}
console.log(re['name']);
// Write an answer using console.log()
// To debug: console.error('Debug messages...');



