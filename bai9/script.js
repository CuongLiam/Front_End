let a = Number(prompt("Type num a"));
let b = Number(prompt("Type num b"));
let c = Number(prompt("Type num c"));

let delta = Number(Math.pow(b, 2) - 4 * a * c);

if (delta < 0) {
    console.log("Phương trình vô nghiệm");
} else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    console.log(`Phương trình có 2 nghiệm là: ${x1} và ${x2}`);
}