let password = document.getElementById("password");
let btn = document.getElementsByClassName("btn")[0];
let eye = document.getElementById("eye");


eye.addEventListener("click", function () {
    if(password.type === "password"){
        password.setAttribute("type", "text");
        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");
    } else{
        password.setAttribute("type", "password");
        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");
    }
})
