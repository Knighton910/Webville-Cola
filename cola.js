console.log("Just testing bro!");

var products = [
    { name: "Grapefruit", calories: 170, color: "red", soldPerM: 93784 },
    { name: "Orange", calories: 160, color: "orange", soldPerM: 12101 },
    { name: "Cola", calories: 210, color: "caramel", soldPerM: 25412 },
    { name: "Diet Cola", calories: 0, color: "caramel", soldPerM: 43922 },
    { name: "Lemon", calories: 200, color: "clear", soldPerM: 14983 },
    { name: "Raspberry", calories: 180, color: "pink", soldPerM: 9427 },
    { name: "Root Beer", calories: 200, color: "caramel", soldPerM: 9909 },
    { name: "Water", calories: 0, color: "clear", soldPerM: 62123 }
];

function compareSold (colaA, colaB) {
    return colaA.soldPerM - colaB.soldPerM;
}

function printProducts (products) {
    for (var i = 0; i < products.length; i++) {
        console.log("Name: " + products[i].name + ", Calories: " + products[i].calories + ", Color: " + products[i].color + ", SoldPerMonth: " + products[i].soldPerM);
    }
}

console.log("---Now Sold---");

products.sort(compareSold);
printProducts(products);

console.log("---Now Names---");

function compareName (colaA, colaB) {
    return colaB.name.length - colaA.name.length;
}

products.sort(compareName);
printProducts(products);

console.log("---Now Calories---");

function compareCalories (colaA, colaB) {
    return colaA.calories - colaB.calories;
}

products.sort(compareCalories);
printProducts(products);

console.log("---Now colors---");

function compareColor (colaA, colaB) {
    return colaA.color.length - colaB.color.length;
}

products.sort(compareColor);
printProducts(products);