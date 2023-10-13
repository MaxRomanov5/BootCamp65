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
let number;
let total = 0;
do {
     number = Number(prompt('Введіть, будь ласка, число'));
    if (number) {
        total += number;
    }
    
} while (number);
console.log(total);