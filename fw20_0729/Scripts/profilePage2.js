

let BM=document.querySelector("#Body_measurements").addEventListener("click",function(){
    BMfunc()})

function BMfunc() {
    let general=document.getElementById("general-container")
    general.classList.remove("display")
    general.classList.add("not-display")

    let BM=document.getElementById("Body_measurements-container")
    console.log(BM);
    BM.classList.remove("not-display")
    BM.classList.add("display")

}
let general=document.querySelector("#general").addEventListener("click",function(){
    generalfunc()})

    function generalfunc() {
        let general=document.getElementById("general-container")
        general.classList.remove("not-display")
        general.classList.add("display")
    
        let BM=document.getElementById("Body_measurements-container")
        console.log(BM);
        BM.classList.remove("display")
        BM.classList.add("not-display")
    
    }
// BMfunc()


let userData=JSON.parse(localStorage.getItem("signup_email"))||[]
document.getElementById("email-id").innerText=userData

let users=JSON.parse(localStorage.getItem("users"))||[]

let form=document.querySelector("form")
.addEventListener("submit",(event)=>{
event.preventDefault()


let name=document.getElementById("name1").value
let password=document.getElementById("password1").value
let conf_password=document.getElementById("password2").value

let obj={
    "name":name,
    "password":password,
    "conf_password":conf_password
}

if(password===conf_password){
    users.push(obj)
    localStorage.setItem("users",JSON.stringify(users))
}
else{
    alert("password is incorrect")
}



})
