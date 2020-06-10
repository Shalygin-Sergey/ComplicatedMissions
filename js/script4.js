'use strict';

let arr = ['789456', '21456213', '965489', '2784213', '74568123', '46314568', '3475135'];

arr.forEach((item) => {
    if (item.startsWith('2') || item.startsWith('4')) {
        console.log(item);
    }
});