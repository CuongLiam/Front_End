let cd = Number(prompt(`nhap chieu dai`));
let cr = Number(prompt(`nhap chieu rong`));

document.writeln(`<pre>`);

for(let i = 0; i < cd; i++){
    if(i === 0 || i == cd - 1){
        document.writeln(`*`.repeat(cr) + `<br>`);
    } else{
        document.writeln(`*` + ` `.repeat(cr - 2) + `*` + `<br>`);
    }
}

document.writeln(`</pre>`);