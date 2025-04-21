const saveToStorage = function (name) {
    localStorage.setItem("name", name);
}

const loadFromStorage = function () {
    // const data = localStorage.getItem("name");
    // return data ? JSON.parse(data) : null;

    return localStorage.getItem("name");
}

let edit_btn = document.getElementById("edit-btn");
let btn = document.getElementById("btn");
let input = document.getElementById("input");
let userName = document.getElementById("name");

let inputValue;

// const modalInput = bootstrap.Modal.getInstance(
//     document.getElementById("exampleModal")
// );

const modalInput = new bootstrap.Modal(document.getElementById("exampleModal"));
const popup = new bootstrap.Modal(document.getElementById("popup"));

// const popup = bootstrap.Modal.getInstance(
//     document.getElementById("popup")
// );

btn.addEventListener("click", function (){

    inputValue = input.value;
    if(inputValue == ""){
        alert("Vui lòng nhập tên của bạn!");
        return;
    }

    modalInput.hide();
    saveToStorage(inputValue);
    showPopup();
})

const showPopup = function (){
    popup.show();
    
    // userName.innerHTML = `<h1>Xin chao ! ${inputValue}</h1>`;
    userName.innerHTML = `<h1>Xin chao ! ${loadFromStorage()}</h1>`;

}

edit_btn.addEventListener("click", function (){
    modalInput.show();
    popup.hide();
    input.value = loadFromStorage();
})  