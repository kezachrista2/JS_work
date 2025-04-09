// Fruit Basket Counter

let fruitBasket = {};

// Function to add a fruit to the basket

function addFruit(fruit , quantity) {
    if (fruitBasket[fruit]) {
        fruitBasket[fruit] += quantity;
    } else {
        fruitBasket[fruit] = quantity;
    }

    console.log(`${quantity} ${fruit} (s) added to the basket.`);
}

// Function to remove a fruit from the basket

function removeFruit(fruit, quantity) {
    if (fruitBasket[fruit]) {
        if (fruitBasket[fruit] >= quantity) {
            fruitBasket[fruit] -= quantity;
            console.log(`${quantity} ${fruit}(s) removed.`);
            if (fruitBasket[fruit] === 0) delete fruitBasket[fruit];
        } else {
            console.log(`Not enough ${fruit} to remove.`);
        }
    } else {
        console.log(`${fruit} is not in the basket.`);
    }
}

// Function to display total number of fruits in the basket

function displayTotalFruits() {
    let total = 0;
    for (let fruit in fruitBasket) {
        total += fruitBasket[fruit];
    }
    console.log(`Total fruits in the basket: ${total}`);
    console.log("current fruits in the basket:", fruitBasket);
}

// Example usage
addFruit("mango", 5);
addFruit("kiwi", 3);
removeFruit("mango", 2);
displayTotalFruits();

