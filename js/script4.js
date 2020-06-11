'use strict';

let arr = ['789456', '21456213', '965489', '2784213', '74568123', '46314568', '3475135'];

arr.forEach((item) => {
    if (item.startsWith('2') || item.startsWith('4')) {
        console.log(item);
    }
});

function isPrime(n) {
    for (let i = 2; i * i <= n; i === 2 ? i++ : i += 2) {
        if (n % i === 0) {
            return false;
        }
    }
    return n > 1;
}

const res = [...Array(100)].reduce((a, _, i) =>
    a.concat(isPrime(i) ? `Делители числа ${i}: 1 и ${i}` : []), []).join('\n');
console.log(res);