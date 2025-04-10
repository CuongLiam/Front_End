let userName = prompt(`nhap ten`);


if(userName === "ADMIN"){
    let pass = prompt(`nhap mat khau`);
    if(pass === "TheMaster"){
        console.log(`welcome TheMaster`);
    } else if(pass === null){
        console.log(`cancelled`)
    } else {
        console.log(`wrong password`);
    }
} else if(userName === null){
    console.log(`cancelled`);
} else {
    console.log(`i dont know you`);
}