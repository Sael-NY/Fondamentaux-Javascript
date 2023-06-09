const mainContainerTag = document.querySelector(".main-container")
const mainContainerTag2 = document.querySelector("main-container")

const firstname = `Je m'appelle`
const firstPart = ` Salim`
const age = 23
const sisterAge = 21
let result1 = sisterAge * age
let result = `Bonjour, ${firstname} ${firstPart} et j'ai ${sisterAge} ans`
const myArray = [`Paul`, `Pierre`, `Mathilde`, `Simon`]


const identity_1 = {
    firstname: 'Salim',
    lastname: 'El Hattab',
    age: 35,
    size: 178,
    weight: 75,
    town: {name: 'Bordeaux', population: 350000, superficy: 40}

}

const identity_2 = {
    firstname: 'Pierre',
    lastname: 'Durand',
    age: 26,
    size: 1.85,
    weight: 80,
    town: {name: 'Paris', population: 2000000, superficy:50}
}

let bordeauxDs, parisDs;



if (identity_1.imc > identity_2.imc) {

    personInDensityCity = identity_1
    personInSpreadCity = identity_2
} else {
    personInDensityCity = identity_2
    personInSpreadCity = identity_1
}

calculDensity(identity_1)
calculDensity(identity_2)

if (identity_1.town.density > identity_2.town.density) {

    personBigImc = identity_1
    personSmallImc = identity_2
} else {
    personBigImc = identity_2
    personSmallImc = identity_1
}


// formule de l'IMC : weight / size ** 2

// mainContainerTag.
// if (sisterAge > 30 || age > 32) {
    // result = `au moins une condition est vraie`
// } else {
    // result = `aucune des conditions n'est vraie`
// }

// mainContainerTag.textContent = `C'est ${personBigImc.firstname} qui a l'IMC la plus élevée : ${personBigImc.imc}.`

mainContainerTag.textContent = `La ville de ${personInDensityCity.town.name} a une densité de ${personInSpreadCity.town.density} pers/km2`

function calculDensity(person) {
    let result = person.town.population / person.town.superficy;
    person.town.density = result;
}


