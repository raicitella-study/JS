//1
try{
    console.log(UserName);
}catch(error){
    console.log(error.name, ": ", error.message);
}

//2
function UserAge(age) {
    if(age <0 | age>120){
        throw new Error("Некорректный возраст!");
    }
    if(age>=1){
        return true;
    }
}
try{
   console.log( UserAge(-5));
}catch(error){
    console.log("Ошибка:", error.message);
}
