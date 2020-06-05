let num = 266219;

// число сделали строкой
let numString = num.toString();
console.log(numString);

// строку перевели в массив
let arrNumString = numString.split('');
console.log(arrNumString);

// перемножаем с помощью индексов массива
// let summ = arrNumString[0] * arrNumString[1] * arrNumString[2] * arrNumString[3] * arrNumString[4] * arrNumString[5];
// console.log(summ);


// перемножаем что бы проверить что все делаем верно
// let tanya = 2 * 6 * 6 * 2 * 1 * 9;
// console.log(tanya);

let sum = 1;

for (let i = 0; i < arrNumString.length; i++) {
    sum *= arrNumString[i];

}
console.log(sum);

// используем две звездочки (**) - они вместо Math.pow()
let sum3 = sum ** 3;
console.log(sum3);

// преобразуем число в строку и выделяем только первые 2 цифры
let num2 = sum3.toString().slice(0, 2);
console.log(num2);


// выводим на экран первые 2 цифры полученного числа
let one = document.querySelector('.one');
one.innerHTML = num2;