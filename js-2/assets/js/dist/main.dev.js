"use strict";

function task1() {
  var sum = 0.1 + 0.2;
  document.getElementById("startTask1").innerHTML = "<span>".concat(sum.toFixed(1), "</span>");
}

function task2() {
  var a = '1';
  var b = 2;
  var sum = parseInt(a) + b;
  document.getElementById("startTask2").innerHTML = "<span>".concat(sum, "</span>");
}

function task3() {
  var file = 820;
  var flesh = document.getElementById('fleshAmount').valueAsNumber * 1024;
  var result = flesh / file;
  document.getElementById("startTask3").innerHTML = "<span>".concat(Math.floor(result), "</span>");
}

function task4() {
  var myWallet = document.getElementById('sumWallet').valueAsNumber;
  var priceChocolate = document.getElementById('chocolatePrice').valueAsNumber;
  var zdacha = myWallet % priceChocolate;
  var result = myWallet / priceChocolate;
  document.getElementById("startTask4").innerHTML = "<span>\u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u0440\u0438\u0434\u0431\u0430\u0442\u0438 ".concat(Math.floor(result), " \u0448\u043E\u043A\u043E\u043B\u0430\u0434\u043E\u043A, \u0443 \u0432\u0430\u0441 \u0437\u0430\u043B\u0438\u0448\u0438\u0442\u044C\u0441\u044F ").concat(zdacha.toFixed(2), " \u0433\u0440\u043D</span>");
}

function task5() {
  var num = document.getElementById('myNumber').valueAsNumber;
  var result = 0;

  while (num) {
    result = result * 10 + num % 10;
    num = Math.floor(num / 10);
  }

  document.getElementById("startTask5").innerHTML = "<span>".concat(result, "</span>");
}

function task6() {
  var sumaVkladu = document.getElementById('myVklad').valueAsNumber;
  var procent = 5 / 12 * 2;
  var narahProc = sumaVkladu / 100 * procent;
  document.getElementById("startTask6").innerHTML = "<span>\u0421\u0443\u043C\u0430 \u043D\u0430\u0440\u0430\u0445\u043E\u0432\u0430\u043D\u0438\u0445 \u0432\u0456\u0434\u0441\u043E\u0442\u043A\u0456\u0432 \u0441\u043A\u043B\u0430\u0434\u0430\u0454 ".concat(narahProc.toFixed(2), " \u0433\u0440\u043D</span>");
}

function task7() {
  var a = 2 && 0 && 3;
  var b = 2 || 0 || 3;
  var c = 2 && 0 || 3;
  document.getElementById("startTask7").innerHTML = "<span>a = ".concat(a, ", b = ").concat(b, ", c = ").concat(c, " </span>");
}