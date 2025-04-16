document
  .getElementById("registerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const newUser = { email, password };

    let users = JSON.parse(localStorage.getItem("users")) || [];

    const emailExists = users.some((user) => user.email === email);
    if (emailExists) {
      alert("Email đã tồn tại!");
      return;
    }

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Đăng ký thành công!");
    document.getElementById("registerForm").reset();
    window.location.href = "login.html";
  });
