const myProfile = {
    name: 'Sergey',
    age: 17,
    city: "Ussurisk",
    isAdmin: false,
    sayHello: function(personName) {
        return `Hello "${personName}"`;
    }
};

console.log(myProfile.sayHello("Ivan"));

// 2 Задание

const users = [
    {name: "Oleg", isAdmin: true},
    {name: "Olga", isAdmin: false},
    {name: "Dima", isAdmin: true},
    {name: "Sergey", isAdmin: true},
    {name: "Artem", isAdmin: false},
];

let simpleUserCount = 0;

for (let i = 0; i < users.length; i++) {
    if(!users[i].isAdmin) {
        simpleUserCount++;
    }
}

console.log(`Кол-во простых пользователей ${simpleUserCount}`);