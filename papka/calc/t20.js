let buttons = document.querySelectorAll(".button");
let res = document.getElementById("result");
let a =0;
let b =0;
let inputStage = 0;
let input = document.getElementById("input");

buttons.forEach(button => {
button.addEventListener("click", function(){
    let num = button.value;
   if(button.value == -2){
    input.value  ="";
    inputStage=0;
   }else if(button.value == "-"){
    input.value = input.value *-1;
   }else if(button.value == "."){
    input.value+=".";
   }else if(button.value == "enterz"){
       if(inputStage===0){
        a=Number(input.value);
        input.value  ="";
        inputStage++;
       }else if(inputStage===1) {
        b=Number(input.value);
        input.value  ="";
        inputStage=0;
       }
   }
   //
   else if(button.value == "+"){
        let result = a + " + "+ b +" = " + plus(a,b);
        res.textContent = `${result}`;

   }else if(button.value == "--"){
        let result = a + " - "+ b +" = " + minus(a,b);
        res.textContent = `${result}`;

   }else if(button.value == "*"){
        let result = a + " * "+ b +" = " + multiply(a,b);
        res.textContent = `${result}`;
   }else if(button.value == "/"){
        let result = a + " / "+ b +" = " + divide(a,b);
        res.textContent = `${result}`;
   }
   //
   else{
        input.value+=num;
   }
})
});

function plus(a,b){return a+b;}
function minus(a,b){return a-b;}
function multiply(a,b){return a*b;}
function divide(a,b){return a/b;}






