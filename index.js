const button = document.querySelector("#usersubmit");
const emailinput = document.querySelector("#email");
const passwordinput = document.querySelector("#password");
const output = document.querySelector("#errorbox");

const emailregex = /^\S+@\S+.\S+/;
const passwordregex = /^(?=.*[!@#$%^&*?<>])(?=.*[A-Z])\S{4,}$/;


function test(etest, ptest) {
  const email = emailregex.exec(etest.value);
  const password = passwordregex.exec(ptest.value);

  if (email && password) {
    localStorage.setItem("username", etest.value);
    localStorage.setItem("password", ptest.value);
    window.location.href = "home.html";
  } else if (email) {
    output.textContent = 'Enter a valid password';
  } else if (password) {
    output.textContent = 'Enter a valid email';
  } else {
    output.textContent = 'Enter a valid email and password';
  }
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  test(emailinput, passwordinput);
});

emailinput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    test(emailinput, passwordinput);
  }
});

passwordinput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    test(emailinput, passwordinput);
  }
});