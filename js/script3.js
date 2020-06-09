'use strict';

const foo = function (str) {
    if (typeof str !== 'string') {
        alert('Этот аргумент не строка!');
        return;
    }
    str = str.trim();
    return str.length > 30 ? str.slice(0, 30) + '...' : str;
};
console.log(foo(123));