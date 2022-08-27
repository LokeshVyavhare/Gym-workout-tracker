
displayUser();
function displayUser(){
    let email = JSON.parse(localStorage.getItem('signup_email')) || [];

    let userData = JSON.parse(localStorage.getItem('users')) || [];


    let emailCheck = userData.filter(function(elem){
         return elem.email == email; 
        //  need to check the local storage email keyword by harshal
    });

    let displayNameOrEmail = document.getElementById('user_nameOremail');

    if(emailCheck.length!==0){
        if(emailCheck[0].name!=="")
        displayNameOrEmail.innerText = emailCheck[0].name;
        else
        displayNameOrEmail.innerText = email;
    }else{
        displayNameOrEmail.innerText = 'Complete Your Profile';
    }
}


