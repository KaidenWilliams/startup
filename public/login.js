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

  // if (authenticated) {
  //   document.querySelector('#playerName').textContent = userName;
  //   setDisplay('loginControls', 'none');
  //   setDisplay('playControls', 'block');
  // } else {
  //   setDisplay('loginControls', 'block');
  //   setDisplay('playControls', 'none');
  // }
// })();


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


























// async function logetest(etest, ptest) {

//   console.log("top of logetest")

//   const response = await fetch(`/api/auth/login`, {
//     method: 'post',
//     body: JSON.stringify({ email: etest, password: ptest }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   });

//   console.log("After logetest call")

//   if (response?.status === 401) {
//     console.log("401 error")

//     output.textContent = "Nonexistent User"

//   }
//   else if (response?.status === 402) {
//     console.log("401 error")

//     output.textContent = "Wrong password"
//   }
//   else {

//     console.log("going home")

//     window.location.href = "home.html";

//   }
// }


// async function regextest(etest, ptest) {

//   console.log("Top of regetext")

//   const email = emailregex.exec(etest);
//   const password = passwordregex.exec(ptest);

//   if (!(await getUser(etest))) {

//     console.log("await getuser check")

//   if (email && password) {

//     console.log("before account creation")

//     await fetch(`/api/auth/create`, {
//       method: 'post',
//       body: JSON.stringify({ email: etest, password: ptest }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     });

//     console.log("after account creation")

//     window.location.href = "home.html";
//   } else if (email) {
//     console.log("email bad")
//     output.textContent = 'Invalid password';
//   } else if (password) {
//     console.log("password bad")
//     output.textContent = 'Invalid email';
//   } else {
//     console.log("both bad")
//     output.textContent = 'Both Invalid';
//   }
// } else {
//   console.log("getuser account exists")
//   output.textContent = 'User exists'
// }

// }


// login.addEventListener("click", (event) => {
//   event.preventDefault();
//   logetest(emailinput.value, passwordinput.value);
// });

// creat.addEventListener("click", (event) => {
//   event.preventDefault();
//   regextest(emailinput.value, passwordinput.value);
// });

// async function getUser(email) {
//   // See if we have a user with the given email.
//   console.log("calling getUser")
//   console.log(`${email}`)
//   const response = await fetch(`/api/user/${email}`);
//   console.log("getUser worked")
//   if (response?.status === 404) {
//     return false;
//   } return true;
// }

