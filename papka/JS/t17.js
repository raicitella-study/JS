function age(dr) {
    const day = new Date();
    let age = day.getFullYear()-dr.getFullYear();
    if(day.getMonth()>=dr.getMonth() && day.getDate()>=dr.getDate()){
        return age;
    }else{
        return age-1;
    }
}
const fullName = "      иВАНОВ иВАН иВАНОВИЧ";
const birthDate = " 2005-12-15";
const email = "         Ivanov.Ivan@Example.COM";
const regDate = "2026-09-10";
//1
let fullName1 = fullName.toLowerCase().trim().split(" ");
for (let i =0;i<fullName1.length; i++){
    fullName1[i] = fullName1[i][0].toUpperCase() + fullName1[i].slice(1);
}
let fullName2 = fullName1.join(" ");
console.log(`ФИО: ${fullName2}`);
//2
let email1 = email.toLowerCase().trim();
console.log(`Почта: ${email1}`);
console.log("Наличие в почте @: " + email1.includes("@"));
console.log("Окончание почты на com: " + email1.endsWith("com"));
//3
const days = ["","Понедельник", "Вторник","Среда","Четверг","Пятница","Суббота","Воскресение"];
const day =new  Date(birthDate);
const daydr = String(day.getDate()).padStart(2,"0"); 
const monthdr = String(day.getMonth()+1).padStart(2,"0");
const yeardr = day.getFullYear();

console.log(`День Рождения: ${daydr}.${monthdr}.${yeardr}`);
console.log(`День недели в который родился ${fullName1[1]}: ${days[day.getDay()]}`);
console.log(`Возраст: ${age(day)} лет`);
//4
const datereg =new  Date(regDate);
const today = new Date();
const dayreg = String(datereg.getDate()).padStart(2,"0"); 
const monthreg = String(datereg.getMonth()+1).padStart(2,"0");
const yearreg = datereg.getFullYear();
console.log(`Дата регистрации: ${dayreg}.${monthreg}.${yearreg}`);
try{
    let regDays = Math.floor((today-datereg)/86400000);
    if(regDays<0){
        throw new Error("Невозможно зарегистрироваться в будещем времени!");
    }else{
        console.log(regDays  +" суток с момента регистрации");
    }
}catch(error){
    console.log(error);
}
    


