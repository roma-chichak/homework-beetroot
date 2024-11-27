let FirstName
let lastname
let first_name
let lastName

/*
let змінна
let alert
let 123
let qwerty-qwert
*/


const userName = prompt("Enter your name")
alert(`Hello, ${userName}!`)


const currentYear = 2024
const age = prompt("Enter your age")

const birthYear = currentYear - age
alert(`You birthed in ${birthYear}`)


const dovszyna = prompt("Вкажіть довжину сторони квадрата")
const per = dovszyna * 4
alert(`Периметр квадрата - ${per} см`)


const pi = 3.14
const r = prompt("Вкажіть радіус кола")
const s = pi * Math.pow(r, 2)
alert(`Площа кола - ${s} см`)


const vidstan = prompt("Вкажіть відстань між містами")
const timeForTrip = prompt("За скільки годин ви бажаєте дістатись до міста")
const speed = vidstan / timeForTrip
alert(`Вам потрібно рухатись зі швидкістю ${speed} км/год`)


const currentCourse = 0.95
const enterDollar = prompt("Введіть кількість доларів") 
let euro = enterDollar * currentCourse
alert(`${enterDollar} доларів = ${euro} євро`)






