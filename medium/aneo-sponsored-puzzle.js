// ANEO SPONSORED PUZZLE

const speed = parseInt(readline());
const lightCount = parseInt(readline());
max = speed;
var inputs = []
// console.log(speed)
for (let i = 0; i < lightCount; i++) {
    var input = readline().split(' ');
    const distance = parseInt(input[0]);
    const duration = parseInt(input[1]);
    inputs.push([distance, duration])
    // console.log(input)
}
for (let x = speed; x >= 1; x--) {
    re = 1;
    for (let [dis, dur] of inputs) {
        re *= checkPassed(x, dis, dur);
    }
    if (re == 1) {
        console.log(x);
        break;
    }
}
function checkPassed(speed, distance, duration) {
    // let t = distance/(speed*1000/3600);
    // return  Math.floor(t/duration)%2==0;
    let t = (distance / (speed * 1000) * 3600) / duration;
    t = Math.round(t * 100000) / 100000
    return Math.floor(t) % 2 == 0;
}
// Write an answer using console.log()
// To debug: console.error('Debug messages...');

// for(let x = speed; i>=1;i--){
//     if checkPassed(x,distance,duration)
// }
