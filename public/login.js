const login = document.querySelector("#login");
const creat = document.querySelector("#create");
const emailinput = document.querySelector("#email");
const passwordinput = document.querySelector("#password");
const output = document.querySelector("#errorbox");

const emailregex = /^\S+@\S+.\S+/;
const passwordregex = /^(?=.*[!@#$%^&*?<>])(?=.*[A-Z])\S{4,}$/;


(async () => {
  let authenticated = false;
  const userName = localStorage.getItem('userName');
  if (userName) {
    const user = await getUser(userName);
    authenticated = user?.authenticated;
  }})();

login.addEventListener("click", async (event) => {
  event.preventDefault();
  loginOrCreate(`/api/auth/login`);
});

creat.addEventListener("click", async (event) => {
  event.preventDefault();
  loginOrCreate(`/api/auth/create`);
});

async function loginOrCreate(endpoint) {
  const email = emailinput.value;
  const password = passwordinput?.value;

  const etest = emailregex.exec(email);
  const ptest = passwordregex.exec(password);

  if (endpoint === `/api/auth/create`) {
    if ((!etest) && (!ptest)) {
      output.textContent = 'Both Invalid';
      return;
    }  else if (!etest) {
      output.textContent = 'Invalid Email';
      return;
    } else if (!ptest) {
      output.textContent = 'Invalid Password';
      return;
    }}

  const response = await fetch(endpoint, {
    method: 'post',
    body: JSON.stringify({ email: email, password: password }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const body = await response.json();

  if (response?.status === 200) {
    localStorage.setItem('userName', email);
    window.location.href = 'home.html';
  } else {
    output.textContent = `${body.msg}`
  }
}

function play() {
  window.location.href = 'home.html';
}

function logout() {
  fetch(`/api/auth/logout`, {
    method: 'delete',
  }).then(() => (window.location.href = '/'));
}

async function getUser(email) {
  // See if we have a user with the given email.
  const response = await fetch(`/api/user/${email}`);
  if (response.status === 200) {
    return response.json();
  }

  return null;
}
