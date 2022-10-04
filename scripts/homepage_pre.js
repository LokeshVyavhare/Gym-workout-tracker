import { navbar, footer } from './Export_navbar&footerA.js';
import { popA, popQ } from './pop.js'
import checkPass from './passCheck.js';

// document.getElementById("navbar").innerHTML = navbar()
document.querySelector(".footerv").innerHTML = footer();

let login_status = JSON.parse(localStorage.getItem('login_status'));
let action_status = JSON.parse(localStorage.getItem('action_status'));

let norm = 'norm', regi = 'regi', signin_ = 'signin';
if (login_status === null) {
    login_status = false;
    localStorage.setItem('login_status', JSON.stringify(login_status));
}
if (action_status === null) {
    action_status = norm;
    localStorage.setItem('action_status', JSON.stringify(action_status));
}

if (login_status !== false) {
    // window.location.href = './umers homepage';
}

// functions
let hide = (id) => {
    document.getElementById(id).classList.remove('dis_grid');
    document.getElementById(id).classList.remove('display');
    document.getElementById(id).classList.add('notdisplay');
}
let show_bk = (id) => {
    document.getElementById(id).classList.remove('dis_grid');
    document.getElementById(id).classList.remove('notdisplay');
    document.getElementById(id).classList.add('display');
}
let show_gr = (id) => {
    document.getElementById(id).classList.remove('display');
    document.getElementById(id).classList.remove('notdisplay');
    document.getElementById(id).classList.add('dis_grid');
}

let norm_dis = () => {
    show_bk('buttonhome');
    hide('signin_form');
    hide('divinput')
}
let regi_dis = () => {
    hide('buttonhome');
    hide('signin_form');
    show_bk('divinput')
}
let signin_dis = () => {
    document.querySelector('#signin_form form').reset();
    hide('buttonhome');
    show_gr('signin_form');
    hide('divinput')
}
// signin_form, buttonhome, divinput;

if (action_status === norm) {
    norm_dis();

} else if (action_status === regi) {
    regi_dis();
} else if (action_status === signin_) {
    signin_dis();
}

document.querySelector('#logo').addEventListener('click', (event) => {
    action_status = norm;
    localStorage.setItem('action_status', JSON.stringify(action_status));
    norm_dis();
});
document.getElementById('register').addEventListener('click', (event) => {
    regi_dis();
    action_status = norm;
});
document.getElementById('register1212').addEventListener('click', (event) => {
    regi_dis();
    action_status = norm;
});
document.getElementById('startfree').addEventListener('click', (event) => {
    regi_dis();
    action_status = norm;
});
document.getElementById('login').addEventListener('click', (event) => {

    signin_dis();
    action_status = norm;
});
document.querySelector('#logo2').addEventListener('click', (event) => {
    action_status = norm;
    localStorage.setItem('action_status', JSON.stringify(action_status));
    norm_dis();
});
document.getElementById('register1').addEventListener('click', (event) => {

    regi_dis();
    action_status = norm;
});
document.getElementById('login1').addEventListener('click', (event) => {

    signin_dis();
    action_status = norm;
});

// signup/signin functionality:
let users = JSON.parse(localStorage.getItem('users')) || [];

document.querySelector('#regi_button').addEventListener('click', (event) => {

    let email = document.querySelector('#divinput input').value;
    if (email == '' || !email.includes('@')) {
        popA('Please enter correct email!')
    }
    else if (email_check(email)) {
        popA('Email is already registerd')
    }
    else {
        localStorage.setItem('signup_email', JSON.stringify(email));
        document.querySelector('#divinput input').value = '';
        window.location.href = "./profilePage.html";
    }

})



document.getElementById('cancel_signin').addEventListener('click', () => {
    action_status = norm;
    localStorage.setItem('action_status', JSON.stringify(action_status));
    norm_dis();
});

let bool_menu_bu = false;
document.getElementById('menubtn').addEventListener('click', (event) => {
    bool_menu_bu = !bool_menu_bu;
    if (bool_menu_bu) {
        document.getElementById('menubtn').innerHTML = '<b>X</b>'
        document.getElementById('extra_nav').classList.remove('notdisplay');
        document.getElementById('extra_nav').classList.add('display');
    } else {

        document.getElementById('menubtn').innerHTML = '&#8803;'
        document.getElementById('extra_nav').classList.add('notdisplay');
        document.getElementById('extra_nav').classList.remove('display');
    }
});

// passemail check
checkPass('signin_pass', 'instuctions_pass', 'signIn_bt');

// console.log(users);

function email_check(email) {
    if (users.length !== 0) {
        let ans = false;
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                ans = true;
                break;
            }
        }
        return ans;
    }
}
function pass_check(email, pass) {
    if (users.length !== 0) {
        let ans = false;
        for (let i = 0; i < users.length; i++) {
            if (users[i].email === email) {
                if (users[i].password === pass) {
                    ans = true;
                    break;
                }
            }
        }
        return ans;
    }
}


// Sign in functionality

document.querySelector('#signin_form form').addEventListener('submit', async (event) => {
    event.preventDefault();
    let log_in_email = document.getElementById('signin_email').value;
    let log_in_pass = document.getElementById('signin_pass').value;

    // console.log(log_in_email, log_in_pass)
    if (email_check(log_in_email)) {
        if (pass_check(log_in_email, log_in_pass)) {
            popA('Successfully Logged In!!', './homepage_user.html', true);
        } else {
            popA('Wrong password!', undefined, false);
        }

    } else {
        popA('No user found with this email!', undefined, false);
    }

});
