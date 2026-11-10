let inputUsername = document.getElementById("username");
let inputLogin = document.getElementById("login");
let inputPassword = document.getElementById("password");
let inputAge = document.getElementById("age");


let button = document.getElementById("button");

button.addEventListener("click", function(){
    let name = inputUsername.value.trim();
    if(name == ""){
        h2.textContent = "VOID";
        console.log("VOID");
    }else{
            h2.textContent = "NOT VOID";
       console.log("NOT VOID");
    }
        let age = Number(inputnage.value);
            if(age < 18){
        h22.textContent = "ИДИ ОТСЮДА, МАЛОЛЕТКА";

    }else{
            h22.textContent = "ДОБРО ПОЖАЛОВАТЬ";
    }

})

