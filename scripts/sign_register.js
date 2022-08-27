
import { navbar, footer } from "./Export_navbar&footerA.js";
let containerNav = document.querySelector("#trainer_navbar");
containerNav.innerHTML = navbar();

let containerFoot = document.querySelector(".footerv");
containerFoot.innerHTML = footer();


let register = document.getElementById('register');


register.addEventListener("click", function () {
    localStorage.setItem("action_status", JSON.stringify("regi"));
    window.location.href = "./index.html";
})

let sign_in = document.getElementById('login');

sign_in.addEventListener("click", function () {

    let sign_pop = document.getElementById('signin_form');
    sign_pop.classList.remove('notdisplay');
    sign_pop.classList.add('display');
    document.querySelector('#blackblur').style.display = "block";
    document.querySelector('#blackblur').classList.add('background_blur');

    let cancel_btn = document.getElementById('cancel_signin');
    cancel_btn.addEventListener('click', function () {
        sign_pop.classList.add('notdisplay');
        sign_pop.classList.remove('display');
        document.querySelector('#blackblur').style.display = "none";
        document.querySelector('#blackblur').classList.remove('background_blur');
    })

})

