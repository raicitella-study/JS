const word = "Привет";
const name = "Иван";

const message = `Добро пожаловать, ${name}`;
console.log(message);

console.log(message.length);

console.log(message[4]);

console.log(message.length-1);

console.log(message.toUpperCase()); //верхний регистр
console.log(message.toLowerCase()); // нижний регистр

const login = "                        student        ";

console.log(login);
console.log(login.trim()); //убирает пробелы, все


const message1 = `Добро пожаловать, ${name}`;

console.log(message1.includes("Добро"));

const file = "document.pdf";

console.log(file.startsWith("document"));
console.log(file.endsWith("pdf"));

const text = "programming";

console.log(text.slice(0,7)); //вырезает сиволы из строки начинает с 0 индекса и до 7 включительно 
console.log(text.slice(7)); //вырезает с начала 7 символов
console.log(text.slice(-7)); //вырезает с конца 7 символов

console.log(text.replace("programming","code"));
const text1 = "код код код";
console.log(text1.replace("код","code"));
console.log(text1.replaceAll("код","code"));

const text3 = "Роман,  Анна, Иван";

const names = text3.split(",");
console.log(names);

console.log(names.join("-"));
