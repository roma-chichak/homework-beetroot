function task1() {
    const sum = 0.1 + 0.2
    document.getElementById("startTask1").innerHTML = `<span>${sum.toFixed(1)}</span>`
}

function task2() {
    let a = '1'
    let b = 2

    const sum = parseInt(a) + b
    document.getElementById("startTask2").innerHTML = `<span>${sum}</span>`
}

function task3() {
    const file = 820
    const flesh = document.getElementById('fleshAmount').valueAsNumber * 1024

    const result = flesh / file
    document.getElementById("startTask3").innerHTML = `<span>${Math.floor(result)}</span>`
}

function task4() {
    const myWallet = document.getElementById('sumWallet').valueAsNumber
    const priceChocolate = document.getElementById('chocolatePrice').valueAsNumber
    
    const zdacha = myWallet % priceChocolate
    const result = myWallet / priceChocolate

     document.getElementById("startTask4").innerHTML = `<span>Ви можете придбати ${Math.floor(result)} шоколадок, у вас залишиться ${zdacha.toFixed(2)} грн</span>`
    

}

function task5() {
    let num = document.getElementById('myNumber').valueAsNumber

    let result = 0
    while (num) {
        result = result * 10 + num % 10;
        num = Math.floor(num / 10);
    }

     document.getElementById("startTask5").innerHTML = `<span>${result}</span>`
}

function task6() {
    let sumaVkladu = document.getElementById('myVklad').valueAsNumber
    let procent = 5 / 12 * 2
    
    let narahProc = sumaVkladu / 100 * procent

     document.getElementById("startTask6").innerHTML = `<span>Сума нарахованих відсотків складає ${narahProc.toFixed(2)} грн</span>`
}

function task7() {
    let a = 2 && 0 && 3
    let b = 2 || 0 || 3
    let c = 2 && 0 || 3

     document.getElementById("startTask7").innerHTML = `<span>a = ${a}, b = ${b}, c = ${c} </span>`
}