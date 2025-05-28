// Основы работы с массивами
let data = [42, 'текст', true, null, undefined, 3.14];

console.log("Длина массива data:", data.length);
console.log("Первый элемент:", data[0]);
console.log("Последний элемент:", data[data.length - 1]);
data[2] = false;
console.log("Изменённый массив data:", data);

let numbers = [10, 20, 30, 40, 50];
let index30 = numbers.indexOf(30);
console.log("Индекс числа 30:", index30);
let has100 = numbers.includes(100);
console.log("Содержит ли массив число 100:", has100);

//Методы массивов
let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
fruits.push('mango');
fruits.unshift('strawberry');
let lastFruit = fruits.pop();
let firstFruit = fruits.shift();
let orangeIndex = fruits.indexOf('orange');
let hasBanana = fruits.includes('banana');

console.log("Массив после всех операций:", fruits);
console.log("Удалённый последний элемент:", lastFruit);
console.log("Удалённый первый элемент:", firstFruit);
console.log("Индекс 'orange':", orangeIndex);
console.log("Содержит ли массив 'banana':", hasBanana);

//Срезы и сортировка
let numbers2 = [45, 12, 67, 23, 89, 34, 56, 91, 8, 77];
let slice1 = numbers2.slice(2, 7);
let slice2 = numbers2.slice(-3);
let sortedPlus = [...numbers2].sort((a, b) => a - b);
let sortedMinus = [...numbers2].sort((a, b) => b - a);
let joined = numbers2.join(" - ");

console.log("Срез с 3-го по 7-й элемент:", slice1);
console.log("Срез последних 3 элементов:", slice2);
console.log("Отсортирован по возрастанию:", sortedPlus);
console.log("Отсортирован по убыванию:", sortedMinus);
console.log("Объединение элементов через ' - ':", joined);

//Spread-оператор и вложенные массивы
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = [...array1, ...array2];
console.log("Объединённый массив:", combinedArray);