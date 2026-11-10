let studets = [
    {
    name: "Кирилл",
    age: 17,
    group: "ИСП25-23",
    grades: [2,3,4,4,5,5,5,5,5,],
},
    {
    name: "Игорь",
    age: 16,
    group: "ИСП25-23",
    grades: [2,3,4,4,5,5,5,5,5,],
},
    {
    name: "Саша",
    age: 18,
    group: "ИСП25-23",
    grades: [2,3,4,4,5,5,5,5,5,],
},
 {
    name: "Кирилл",
    age: 21,
    group: "ИСП25-23",
    grades: [4,3,4,5,5,5,5,5,5,],
},
    {
    name: "Роман",
    age: 20,
    group: "ИСП25-23",
    grades: [2,3,4,4,5,5,5,5,5,],
}]

let result = studets.map(function (studets) {
    return studets.name
})

console.log(result);