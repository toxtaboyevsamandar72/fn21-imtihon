

//1-masala Faylning to'liq nomini o'zida akslantirgan satr berilgan. Ya'ni disk nomi, papkalar nomi, faylning nomi va kengaytmasi. Satrdan faylning nomini (kengaytmasiz) aniqlovchi programma tuzilsin.



// Input: D:/Qudrat_c++/books/My_book.exe
// Output: My_book








// 2-misol// 1 dan N bo’lgan sonlar ichida 3 bo’linadigan sonlar yig’indisini hisoblovchi getSum3(N) nomli dastur yozing. getSum3(15) => 45


// let n = +prompt('soni kiriting');


// function getSum3(n) {
//     return (n * (Math.floor(n/3) + 1))/2;
// }

// console.log(getSum3(n)); 











// 3-misol n butun soni berilgan (n > 0). Quyidagi yig'indini hisoblovchi programma tuzilsin.


// let n = +prompt('soni kiriting');


// function res(n) {
//     let sum = 0;
//     for (let i = n; i <= 2 * n; i++) {
//         sum += i * i;
//     }
//     return sum;
// }

// console.log(res(n));



// 4-masal Stringlar massivi berilgan. Shunday object hosil qilingki, o’sha objectning kalitlari massiv elementlaridan va qiymatlari esa ularning uzunligidan iborat bo’lsin. (for)



// let res =[
// 	"Abdulaziz",
// 	"Safarmurod",
// 	"Orol",
// 	"Jahongir"
// ]


// let objekt = {};

// function stringlar(res) {
//     for (var i = 0; i < res.length; i++) {
//         objekt[res[i]] = res[i].length;
//     }
//     return objekt;
// }



// console.log(stringlar(res));






// 5-misol Qiymatlari sonlardan iborat obj nomli object berilgan. Qiymatlarini n martaga oshiruvchi getMultipleValues(n) nomli funksiya yozing.



// let n = +prompt('soni kiriting');

// let obj = {
//     a: 2,
// 	b: 3,
// 	c: 4,
// 	d: 6
// };

// function getMultipleValues(obj, n) {
//     for (let key in obj) {
//         obj[key] *= n;
//     }
//     return obj;
// }

// console.log(getMultipleValues(obj, n)); 







// 6-masala  n ta butun sonlardan iborat a massiv berilgan. Massivning eng kichik va eng katta elementlari orasidagilarini nolga almashtiruvchi programma tuzilsin. Eng kichik va eng katta elementlari o'zgarishsiz qoldirilsin.









// 7-masala Satrni bo'sh joy bor yoki yo'qligini tekshiring. 
// (split, some)

// function res(n) {
//     let name = n.split(' ');
   
//     return name.some(name => name  === '');
// }

// let result = res("Men Abdulaziz Programmerman");
// console.log(result); 










