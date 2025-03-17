let a = Number(prompt(`type a`));
let b = Number(prompt(`type b`));

let randomNum = Math.round(Math.random() * (b-a) + a);

alert(`random from ${a} to ${b} : ${randomNum}`);
console.log(randomNum);