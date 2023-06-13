

// let role = "user";

// let value1 = sum2args(8, 7)
// let value2 = substract2args(value1, 10);

// logMessage(value2)


// function sum2args(arg1, arg2) 
//     // if (role !== "admin") return 0;
//     let myResult = arg1 + arg2
//     return myResult
// }

function substract2args(a1, a2) {
    return a1 - a2
}

function logMessage(arg) {
    console.log(`Le résultat des 2 fonctions précédentes est ${arg} !`)
}


// const res = sumElements(myNumbers)
// const res2 = sumElements(myNumbers2)

// console.log(res);
// console.log(res2);

// function sumElements(arr) {
//     let result = 0;


//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) result += arr[i];


//     }

//     return result
// }

// function getMaximum(arr) {
//     let result = arr[0];
// }

// for (let i = words.length - 1; i >= 0; i--) {
//     sentence += words[i] +
// }


const myNumbers = [4, 6, 13, 9, 12, 11];
const myNumbers2 = [40, 61, 13, 19, 12, 11];


console.log(getMaximum(myNumbers2))
function getMinimum(arr) {
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < result) result = arr[i]
    }
    return result;
}

function getMaximum(arr) {
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > result) result = arr[i]
    }
    return result;
}


// -----------------------------------------------------------------

const pizzas = [
    {
        name: 'Margherita',
        price: 11.50,
        ingredients: ['mozzarella', 'tomate', 'basilic ', "huile d'olive"],
        baseTomate: true
    },
    {
        name: 'Regina',
        price: 12,
        ingredients: ['mozzarella', 'tomate', 'origan', 'jambon', 'champignons'],
        baseTomate: true
    },
    {
        name: '4 saisons',
        price: 15,
        ingredients: ['artichaut', 'courgette', 'poivron', 'mozzarella', 'oignon rouge'],
        baseTomate: true
    },
    {
        name: 'Napolitaine',
        price: 14,
        ingredients: ['tomate', 'mozzarella', 'anchois', 'olives noires', 'origan'],
        baseTomate: true
    },
    {
        name: '4 fromages',
        price: 16,
        ingredients: ['tomate', 'mozzarella', 'emmental', 'comté', 'roquefort'],
        baseTomate: true
    },
    {
        name: 'Montagnarde',
        price: 19,
        ingredients: ['mozzarella', 'reblochon', 'gruyère', 'oignon', 'champignon'],
        baseTomate: false
    },
    {
        name: 'Chèvre-miel',
        price: 18,
        ingredients: ['mozzarella', 'chèvre', 'miel'],
        baseTomate: false
    },
    {
        name: 'Hawaïenne',
        price: 17,
        ingredients: ['mozzarella', 'tomate', 'jambon', 'ananas'],
        baseTomate: true
    }
]

console.log(getAllNames(pizzas))

function getAllNames(tab) {
    let pizzaNames = [];

    for (let i = 0; i < tab.length; i++) {
        pizzaNames.push(tab[i].name)

    }
    return pizzaNames;

}

console.log(getIngredientsByPizzaName('Regina', pizzas));

function getIngredientsByPizzaName(name, arr) {


    let targetPizza

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === name) {
            targetPizza = arr[i];
            break;
        }
    }
    let result = []
    if (targetPizza) {
        console.log(targetPizza)
        result = targetPizza.ingredients
    }
    //

    return result
}

// -------------------------------------------------------------------
// const result = getAllIngredients(pizzas)
// console.log(result)
// function getAllIngredients(tableau) {
//     let allIngredients = [];

//     for (let i = 0; i < tableau.length; i++) {
//         const currentPizza = tableau[i];
//         // console.log(`mon indice i : ${i}`)
//         for (let j = 0; j < currentPizza.ingredients.length; j++) {
//             if (!allIngredients.includes(currentPizza.ingredients[j])) {

//                 allIngredients.push(currentPizza.ingredients[j])
//             }

//         }
//     }

//     return allIngredients;
// }


// ------------------------------------------------------------------------

const result = getPizzasByIngredientName(pizzas, `tomate`);
console.log(result);

function getPizzasByIngredientName(arr, ingredientName) {

    let pizzaNames = [

    ]
    for (let i = 0; i < arr.length; i++) {
        const currentPizza = arr[i]
        if (currentPizza.ingredients.includes(ingredientName)) {
            pizzaNames.push(currentPizza.name)
        }

    }

    return pizzaNames
}




