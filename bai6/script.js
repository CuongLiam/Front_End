document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();// prevent reload, or default thingy
  
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    const validUsername = "abc";
    const validPassword = "123";
  
    if (username === validUsername && password === validPassword) {
      console.log("Đăng nhập thành công!");
    } else {
      console.log("oops!");
    }
  });
  