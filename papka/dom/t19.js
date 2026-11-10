let title = document.getElementById("title");
console.log(title);

let text = document.querySelector(".text"); //найдет первых попавшийся эллемнт с классом text
let text2 = document.querySelectorAll(".text"); //найдет все эллемнты с классом text

console.log(text2);

title.textContent = "New world"; //меняем заголовок 

let container = document.querySelector(".container")

container.innerHTML = "<h1>!</h1>"; //наполняет HTML кодом

title.style.backgroundColor = "blue";

container.style.margin = "100px";
container.style.border = "5px solid red" ;

title.classList.add("class");
title.classList.remove();
title.classList.toggle("one"); 
title.classList.contains("one");

let button = document.getElementById("bt");

button.addEventListener("click", function(){
    
    title.textContent = "ЧЕЕЕЕЕ";
    
})

let input = document.getElementById("input");
let result = document.getElementById("result");

input.addEventListener("input", function(){
result.textContent = input.value;
})

let select = document.getElementById("color");
select.addEventListener("change", function(){
console.log(select.value);
})

