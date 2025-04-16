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

    const user = {
      email: email,
      password: password,
    };

    localStorage.setItem("registeredUser", JSON.stringify(user));

    alert("Đăng ký thành công!");
    document.getElementById("registerForm").reset();
  });
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

    const user = {
      email: email,
      password: password,
    };

    localStorage.setItem("registeredUser", JSON.stringify(user));

    alert("Đăng ký thành công!");
    document.getElementById("registerForm").reset();
  });
