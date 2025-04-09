const form = document.getElementById("emailForm");
const emailInput = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = emailInput.value.trim();

  if (email === "") {
    message.textContent = "email không được để trống!";
    message.style.color = "red";
  } else {
    //   const regex = /^[^\s@]+@[^\s@]+\.(com|vn)$/;
    // //   https://www.w3schools.com/jsref/jsref_obj_regexp.asp

    //   if (regex.test(email)) {
    //     message.textContent = "email hợp lệ!";
    //     message.style.color = "green";
    //   } else {
    //     message.textContent = "email không hợp lệ!";
    //     message.style.color = "red";
    //   }

    const hasAss = email.includes("@");
    const endsWithComOrVn = email.endsWith(".com") || email.endsWith(".vn");

    if (hasAss && endsWithComOrVn) {
      message.textContent = "email hợp lệ!";
      message.style.color = "green";
    } else {
      message.textContent = "email không hợp lệ!";
      message.style.color = "red";
    }
  }
});
