// // Запитати у користувача "скільки апельсинів він хоче купити?",а потім вивести alert
//     //"Користувач хоче купити <число> апельсинів!"
// const oranges = prompt('скільки апельсинів він хоче купити?');
// alert(`kористувач хоче купити ${oranges} апельсинів!`)
// console.log()
//TODO:===================================
//Порахувати середню зарплатню співробітників і округлити число до сотих
// const Israel = '1600$';
// let Alexander = '2350$';
// const Dustin = '1344$';
// const israelSalary = Number.parseInt(Israel);
// const alexanderSalary = Number.parseInt(Alexander);
// const dustinSalary = Number.parseInt(Dustin);
// console.log(((israelSalary + alexanderSalary + dustinSalary) / 3).toFixed());
// Alexander = alexanderSalary + 200 + '$';
//Знайти в рядку слово '//Знайти в рядку слово 'spam' та замінити його на '@@@@'

//const str = 'I gEt sO much sPam at wOrk.';' та замінити його на '@@@@'

// const str = 'I gEt sO much sPam at wOrk.';
// const correctStr = str.toLowerCase().replace('spam', '@@@@');
// console.log(correctStr);

// TODO:===================================
// Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const max = 50;
// const min = 48;

// let sum = 0;

// for (let index = max; index >= min; index -= 1) {
//   if (index % 2 === 0) {
//     sum += index;
//   }
//   console.log(index);
// }

// console.log(`Сума парних чисел дорівнює, ${sum}`);

//TODO:===================================
//Вивести в консоль всі літери з рядка без пробілів

// const str = "Hello Javascript!";

// for (let i = 0; i < str.length; i++) {
//   if (str[i] === " ") {
//     continue;
//   }
//   console.log(`${str[i]}`);
// }

//наступний хто буде писати код, я того в чаті назву Кошенятком

// а можна вже комітити?
//TODO:===================================
//При завантаженні сторінки користувачеві пропонується
//в prompt ввести число. Введення додається до значення
//змінної total.
//Операція введення числа триває до того часу,
//поки користувач не натисне кнопку Cancel в prompt.
//Після того, як користувач припинив введення натиснувши на
//кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
//Робити перевірку,що користувач ввів саме число,
//а не довільний набір символів, не потрібно.

/*
let inputValue = prompt('Введіть число');
let check = true;
let total = 0;
console.log(!'0');

do {
    if (inputValue) {
        console.log(inputValue);

        check = true;
        total += Number(inputValue);
        inputValue = prompt("Введіть число");
    } else {
        check = false;
        alert(`Загальна сума чисел дорівнює ${total}`);
    }
} while (check)*/

// const str = "abcd";
// for (let i = 0; i <= str.length - 1; i++) {
//     console.log(str[i])
//     if (i === str.length - 1) {
//         for (let j = str.length - 2; j >= 0; j--) {
//             console.log(str[j])
//         }
//     }
// }

//Порахувати кількість ітерацій між числами min та max, якщо крок дорівнює step.
// const min = 10;
// const max = 50;
// const step = 7;
// let amount = 0;

// for (let i = min; i <= max; i += step) {
//     amount += 1;

//    console.log('відбувається ітерація');
// }

// console.log(amount);

// Порахувати к - сть букв о у рядку
const str = "Hello Javascripto!";
let totalLetters = 0;

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
  if (str[i].toLowerCase() === "e") {
    totalLetters += 1;
  }
}
console.log(totalLetters);
