// harshal part
let navbar1 = document.querySelector("#container")
import navbar from "./Export_navbarB.js"
navbar1.innerHTML = navbar()
// harshal part

displayUser();
function displayUser() {
    let email = JSON.parse(localStorage.getItem('signup_email')) || [];

    let userData = JSON.parse(localStorage.getItem('users')) || [];


    let emailCheck = userData.filter(function (elem) {
        return elem.email == email;
        //  need to check the local storage email keyword by harshal
    });

    let displayNameOrEmail = document.getElementById('user_nameOremail');

    if (emailCheck.length !== 0) {
        if (emailCheck[0].name !== "")
            displayNameOrEmail.innerText = emailCheck[0].name;
        else
            displayNameOrEmail.innerText = email;
    } else {
        displayNameOrEmail.innerText = 'Complete Your Profile';
    }
}



let logoutBtn = document.querySelector('.menu_logout');
logoutBtn.addEventListener("click",function(){
    localStorage.setItem("login_status",JSON.stringify(false));
    localStorage.setItem("signup_email",JSON.stringify(null));
    window.location.href = "./index.html"
})

let submenu = document.querySelector(".dropdown");
let dropdown = document.querySelector(".dropdown-content");

submenu.addEventListener("click",function(){
    
    setTimeout(function(){
        dropdown.style.display = "block";
    },200)
})

document.addEventListener('click', function (event) {
    let outClick = document.getElementById('logout_container').contains(event.target);
    if (!outClick) {
        dropdown.style.display = "none";
    }
})

