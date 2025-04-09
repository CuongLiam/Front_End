const form = document.getElementById("form");
let list  = document.getElementById("list");

let subjects = [];

form.addEventListener("submit", (event) => {

    event.preventDefault();
    // const formData = new FormData(form);
    // const name = formData.get("text");

    const name = form.text.value;
    
    if(name === ""){
        alert("Tên không được để trống!")
    } else{
        // subjects.push(name);

        const newLi = document.createElement("li");
        newLi.textContent = name;
        list.appendChild(newLi);

        form.text.value = ""; //for UI
    }  
})
