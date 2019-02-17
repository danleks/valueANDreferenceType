const people = [
    {name: 'Tom Smith', age: 35},
    {name: 'Bob Lee', age: 21},
]

const getInitials = (name) => {
    name = name.split(' ').map((word) => {
        return word.charAt(0);
    }).join('');

    return name;
}

const increaseAge = (person) => {
    person.age += 1;
}

const addPerson = (people, name, age) => {
    people.push(
        {
            name,
            age,
        }
    );
}

console.log(getInitials(people[0].name));
console.log(people);

increaseAge(people[1]);
console.log(people[1]);

addPerson(people, 'Drew Parker', 40);
console.table(people);

const shopTransaction = {
    items: [{
        name: 'Milk'
    }],
    price: 3,
    voucher: 1000, // in exchange for 4000 bottles
}

const cashier = {
    units: [200, 100, 50, 20, 10, 5, 2, 1],
    quantity: [11, 0, 4, 7, 11, 20, 9, 3],
}

// checks if there are enough funds to give
const canChange = (shopTransaction, cashier) => {
    let amountToBePaid = shopTransaction.voucher - shopTransaction.price;

    for (let [i, value] of cashier.units.entries()) {
        let unit = value; // coping primitive values
        let quantity = cashier.quantity[i]; // coping primitive values
        while(amountToBePaid >= unit && quantity > 0) {
            amountToBePaid -= unit;
            quantity -= 1;
        }
    }

    return amountToBePaid === 0;
}

console.log(canChange(shopTransaction, cashier));
console.log(cashier);


console.log([10] === [10]);

let oldArray = [];
let object = {};

object.newArray = oldArray;
oldArray.push(10);

console.log(object.newArray === oldArray);


let a = [10];
let b = [10];

if (JSON.stringify(a) === JSON.stringify(b)) {
    console.log('It\'s true');
}