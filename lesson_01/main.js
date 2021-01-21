// 1. Задать температуру в градусах по Цельсию. 
// Вывести в alert соответствующую температуру в градусах по Фаренгейту.
// Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию

var tempCels;
var tempFahr;

tempCels = 35;
tempFahr = (9 / 5) * tempCels + 32;
alert("Температура в градусах по Фаренгейту: " + tempFahr);


// 2. Работа с переменными.
// a) Объявить две переменные: admin и name. Записать в name строку «Василий»;

var admin;
var name;

name = "Василий";
admin = name;

// b) Скопировать значение из name в admin. Вывести admin (должно вывести «Василий»).
alert(admin);


// 4. *Чему будет равно JS-выражение 1000 + "108"?
alert(1000 + "108"); // 1000108


// 5. *Самостоятельно разобраться с атрибутами тега script (async и defer).
// The defer attribute tells the browser not to wait for the script. 
// Instead, the browser will continue to process the HTML, build DOM.
// The script loads “in the background”, and then runs when the DOM is fully built
// But the defer attribute, besides telling the browser “not to block”, ensures that the relative order is kept. 

// async scripts load in the background and run when ready.
// The DOM and other scripts don’t wait for them, and they don’t wait for anything.
// A fully independent script that runs when loaded.


// 6. swap variables values using ES5 notatiotion
var a;
var b;

a = 1;
b = 2;

b = [a, a = b][0];
alert('a: ' + a + ', b: ' + b);