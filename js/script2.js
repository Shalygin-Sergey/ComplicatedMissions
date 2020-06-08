'use strict';

// Усложненное задание номер 1
let lang = prompt("Укажите язык ru или en", "en");
// let arrRu = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
// let arrEn = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];


// Усложненное задание (a)

// if (lang === 'ru') {
//     alert(arrRu);
// } else if (lang === 'en') {
//     alert(arrEn);
// } else {
//     alert('Вы ничего не указали!');
// }

// Усложненное задание (b)

// switch (lang) {
//     case 'ru':
//         alert(arrRu);
//         break;
//     case 'en':
//         alert(arrEn);
//         break;
//     default:
//         alert('Вы ничего не указали!');
// }

// Усложненное задание (c)

let arr = {
    'ru': ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'],
    'en': ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'],
};
alert(arr[lang]);

// Усложненное задание номер 2
let namePerson = prompt('Привет, как тебя зовут?');
let preName = (namePerson === 'Артем') ? 'директор' :
    (namePerson === 'Максим') ? 'преподаватель' : 'студент';

console.log(preName);