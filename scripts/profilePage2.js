
let BM = document.querySelector("#Body_measurements").addEventListener("click", function () {
    BMfunc()
})

function BMfunc() {
    let general = document.getElementById("general-container")

    general.classList.remove("display")
    general.classList.add("not-display")

    let upper_body_general = document.getElementById("general")
    upper_body_general.classList.remove("focus")


    let BM = document.getElementById("Body_measurements-container")
    BM.classList.remove("not-display")
    BM.classList.add("display")

}
let general = document.querySelector("#general").addEventListener("click", function () {
    generalfunc()
})

function generalfunc() {
    let general = document.getElementById("general-container")
    general.classList.remove("not-display")
    general.classList.add("display")

    let upper_body_general = document.getElementById("general")
    upper_body_general.classList.add("focus")

    let BM = document.getElementById("Body_measurements-container")
    BM.classList.remove("display")
    BM.classList.add("not-display")

}

let privacy = document.getElementById("privacy").addEventListener("click", function () {
    privacyfunc()
})
function privacyfunc() {
    let general = document.getElementById("general-container")
    general.classList.remove("display")
    general.classList.add("not-display")

    let upper_body_general = document.getElementById("general")
    upper_body_general.classList.remove("focus")

    let BM = document.getElementById("Body_measurements-container")
    BM.classList.remove("display")
    BM.classList.add("not-display")

    let privacy = document.getElementById("privacy-data")
    privacy.classList.remove("not-display")
    privacy.classList.add("display")

}


// BMfunc()

// email data
let userData = JSON.parse(localStorage.getItem("signup_email")) || []
document.getElementById("email-id").innerText = userData

let users = JSON.parse(localStorage.getItem("users")) || []

// adding event listener
let form = document.querySelector("form")
    .addEventListener("submit", (event) => {
        // event.preventDefault();
        addData(users)
    })
// above function
function addData(users) {
    let name = document.getElementById("name1").value
    let password = document.getElementById("password1").value
    let conf_password = document.getElementById("password2").value

    if (users.length == 0) {
        let obj = {
            "name": name,
            "email": userData,
            "password": password,
            "conf_password": conf_password

        }

        users.push(obj)
        localStorage.setItem("users", JSON.stringify(users))
    } else {
        users.forEach((ele, i) => {

            let obj = {
                "name": name,
                "email": userData,
                "password": password,
                "conf_password": conf_password

            }

            if (userData == ele.email && name !== "") {
                users[i]["name"] = name
                localStorage.setItem("users", JSON.stringify(users))

            }
            else if (userData == ele.email && password !== "" && conf_password !== "") {

                if (password === conf_password) {
                    users[i]["password"] = password;
                    users[i]["conf_password"] = conf_password;
                    localStorage.setItem("users", JSON.stringify(users))
                }
                else {
                    alert("password is incorrect")
                }
            }

            else {
                users.push(obj)
                localStorage.setItem("users", JSON.stringify(users))

            }
        });
    }

}

// privacy division functionality

let make_private = document.querySelector(".isPublic").addEventListener("click", function () {
    privatefunc()
})

function privatefunc() {
    let public = document.querySelector(".public")
    public.classList.remove("display")
    public.classList.add("not-display")
    let private = document.querySelector(".private")
    private.classList.remove("not-display")
    private.classList.add("display")

}

let make_public = document.querySelector(".isPrivate").addEventListener("click", function () {
    publicfunc()
})

function publicfunc() {
    let private = document.querySelector(".private")
    private.classList.remove("display")
    private.classList.add("not-display")
    let public = document.querySelector(".public")
    public.classList.remove("not-display")
    public.classList.add("display")

}


