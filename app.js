let employees = [
    {
        name: "Давид",
        age: 30,
        gender: "мужской",
        phone: {
            home: "123-45-67",
            mobile: "89012345678"
        }
    },
    {
        name: "Уулжан",
        age: 24,
        gender: "женский",
        phone: {
            home: "234-56-78",
            mobile: "89023456789"
        }
    },
    {
        name: "Захар",
        age: 40,
        gender: "мужской",
        phone: {
            home: "345-67-89",
            mobile: "89034567890"
        }
    },
    {
        name: "Алиса",
        age: 28,
        gender: "женский",
        phone: {
            home: "456-78-90",
            mobile: "89045678901"
        }
    },
    {
        name: "Карим",
        age: 22,
        gender: "мужской",
        phone: {
            home: "567-89-01",
            mobile: "89056789012"
        }
    }
];


let newEmployee = {
    name: "Арина",
    age: 35,
    gender: "женский",
    phone: {
        home: "678-90-12",
        mobile: "89067890123"
    }
};

employees.push(newEmployee);

let olderThan25 = employees.filter(emp => emp.age > 25);
let employeeNames = employees.map(emp => emp.name);

employees.forEach(emp => {
    console.log(`Имя: ${emp.name}, Возраст: ${emp.age}, Пол: ${emp.gender}, Домашний: ${emp.phone.home}, Сотовый: ${emp.phone.mobile}`);
});
