let input = prompt(`nhap 1 ki tu`);

if(input.length ===1 && ((input >= 'a' && input <= 'z') || (input >= 'A' && input <= 'Z'))){
    console.log(`ki tu ${input} la chu cai`);
} else{
    console.log(`${input} khong phai chu cai`);
}