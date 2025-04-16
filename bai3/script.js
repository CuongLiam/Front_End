const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Vui lòng nhập đầy đủ Email và Password!");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    alert("Đăng nhập thành công!");
    localStorage.setItem("currentUser", JSON.stringify(user));
    window.location.href = "index.html";
    alert("Email hoặc mật khẩu không đúng!");
  }
});
