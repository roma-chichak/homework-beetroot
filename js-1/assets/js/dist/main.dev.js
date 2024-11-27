"use strict";

var FirstName;
var lastname;
var first_name;
var lastName;
/*
let змінна
let alert
let 123
let qwerty-qwert
*/

var userName = prompt("Enter your name");
alert("Hello, ".concat(userName, "!"));
var currentYear = 2024;
var age = prompt("Enter your age");
var birthYear = currentYear - age;
alert("You birthed in ".concat(birthYear));
var dovszyna = prompt("Вкажіть довжину сторони квадрата");
var per = dovszyna * 4;
alert("\u041F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u043A\u0432\u0430\u0434\u0440\u0430\u0442\u0430 - ".concat(per, " \u0441\u043C"));
var pi = 3.14;
var r = prompt("Вкажіть радіус кола");
var s = pi * Math.pow(r, 2);
alert("\u041F\u043B\u043E\u0449\u0430 \u043A\u043E\u043B\u0430 - ".concat(s, " \u0441\u043C"));
var vidstan = prompt("Вкажіть відстань між містами");
var timeForTrip = prompt("За скільки годин ви бажаєте дістатись до міста");
var speed = vidstan / timeForTrip;
alert("\u0412\u0430\u043C \u043F\u043E\u0442\u0440\u0456\u0431\u043D\u043E \u0440\u0443\u0445\u0430\u0442\u0438\u0441\u044C \u0437\u0456 \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E ".concat(speed, " \u043A\u043C/\u0433\u043E\u0434"));
var currentCourse = 0.95;
var enterDollar = prompt("Введіть кількість доларів");
var euro = enterDollar * currentCourse;
alert("".concat(enterDollar, " \u0434\u043E\u043B\u0430\u0440\u0456\u0432 = ").concat(euro, " \u0454\u0432\u0440\u043E"));