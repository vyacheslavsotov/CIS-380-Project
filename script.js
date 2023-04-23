const wrapper = document.querySelector('.wrapper');
const btnPopup = document.querySelector('.btnLogin');
const iconClose = document.querySelector('.icon-close')
const config = document.querySelector('.config')


// index page
btnPopup.addEventListener('click', ()=> {
  wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
  wrapper.classList.remove('active-popup');
});

// ------------------------------------------------------------


// dashboard page
function login() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  if (username == "example" && password == "password1.") {
    setTimeout(function() {
      window.location.href = "dashboard.html";
    }, 10);
    // Delay the redirect by 10 milliseconds
  } else {
    alert("Invalid username or password");
    return;
  }
}


//----------------------------------------------------------------

const updateBtn = document.getElementById('update-btn');

