document.getElementById('btn-login').addEventListener('click', function(){
    const emailField  = document.getElementById('user-email');
    const email = emailField.value;
    // console.log(email);
    const passwordField  = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(password);
    if(email=== 'tuhin@gmail.com' && password==='tuhin'){
        window.location.href='bank.html';
    }
    else{
        alert('Invalid user Name or Password');
    }

})