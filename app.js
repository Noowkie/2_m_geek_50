const color = prompt("Введите цвет светофора (красный, желтый, зеленый)").toLowerCase();

if (color === "красный") {
    console.log("Остановитесь!");
} else if (color === "желтый") {
    console.log("Приготовьтесь!");
} else if (color === "зеленый") {
    console.log("Можно ехать!");
} else {
    console.log("Ошибка: некорректный цвет светофора.");
}