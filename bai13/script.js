console.log(`a.`);
for(let i = 10; i > 0; i-- ){
    console.log(`*`.repeat(i));
}

console.log(`b.`);
for(let i = 1; i <= 10; i++ ){
    console.log(`*`.repeat(i));
}

console.log(`c.`);
for(let i = 1; i <= 10; i++ ){
    console.log(` `.repeat(10 - i) +`*`.repeat(i));
}

console.log(`d.`);
for(let i = 10; i > 0; i-- ){
    console.log(` `.repeat(10 - i) + `*`.repeat(i));
}
