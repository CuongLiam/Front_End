let n = Number(prompt("type num n:"));

let result = Number.isInteger(Math.sqrt(n))
  ? `${n} là số chính phương`
  : `${n} không phải số chính phương`;

console.log(result);
