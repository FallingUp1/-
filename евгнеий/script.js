let dc = document;

let PoleLogin = dc.querySelector('#login').value;
let PolePassword = dc.querySelector('#password').value;

let SubmitButton = dc.querySelector('#SubmitButton');


let CounterButton = dc.querySelector('#CounterButton');
let CounterText = dc.querySelector('#CounterText').value;

let ChangeColorButton = dc.querySelector('#ChangeColor');

let UserLogin = "User";
let UserPassword = "123";

let ManagerLogin = "Manager";
let ManagerPassword = "1234";

let AdminLogin = "Admin";
let AdminPassword = "12345";

class User {
   Autorization(PoleLogin, PolePassword){

     if(PoleLogin == UserLogin && PolePassword == UserPassword){
        console.log("Вы вошли как пользователь");
        CounterButton.style.display = 'none';
        CounterText.style.display = 'none';
     }
     else if (PoleLogin == ManagerLogin && PolePassword == ManagerPassword){
        console.log("Вы вошли как менеджер");
        CounterButton.style.display = 'block';
        CounterText.style.display = 'none';
     }
     else if (PoleLogin == AdminLogin && PolePassword == AdminPassword){
        console.log("Вы вошли как Админ");
        CounterButton.style.display = 'block';
        CounterText.style.display = 'block';
     }
   }

}


SubmitButton.addEventListener('click',function(PoleLogin,PolePassword){
    let user1 = new User;

    let login = PoleLogin;
    let password = PolePassword;

    user1.Autorization(login,password);
   
});




