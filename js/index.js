const name = document.getElementById('name');
const surname = document.getElementById('surname');
const number = document.getElementById('number');
const email = document.getElementById('email');
const password = document.getElementById('password');
const btn = document.getElementById('btn');
const img = document.getElementById('img');
const footer = document.getElementById('footer');
const userData = document.getElementById('user-data');
const form = document.getElementById('form')

function userdata() {
    return `
     <div class="form">
      <h1>${name.value}</h1>
    <p>
       <b><span>SurName:</span></b>
       <span>${surname.value}</span>
    </p>
    <p>
       <b><span>Mobile Number:</span></b>
       <span>${number.value}</span>
    </p>
    <p>
       <b><span>Email Adress:</span></b>
       <span>${email.value}</span>
     </p>
    <p>
      <b><span>Password:</span></b>
      <span>${password.value}</span>
     </p>
     </div>
    `
}

btn.addEventListener('click', function() {
    userData.classList.remove('hidden')
    userData.innerHTML += userdata()
    form.reset()
    form.focus()
})