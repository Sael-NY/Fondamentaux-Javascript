import movies from "./movies.json" assert { type: 'json' };

// a. Logger le premier element du tableau movies

console.log(movies[0])

// b. Logger l'annee du 4eme element du tableau movies

console.log(movies[3].year)

// c. Logger le titre du dernier element du tableau movies

console.log(movies[movies.length - 1].title)

// d. Logger le titre du film qui a la meilleure note
let bestMovie = movies[0]

movies.forEach((movies) => {
    if (movies.rate >= bestMovie.rate) {
        bestMovie = movies
    }
})



console.log(bestMovie.title)



// Alternative sort()

movies.sort((a, b) => {
    return b.rate - a.rate;
})



console.log(movies)

// e. Logger le titre du film le plus ancien
let oldMovie = movies[0]

movies.forEach((movies) => {
    if (movies.year < oldMovie.year) {
        oldMovie = movies
    }
})

console.log(oldMovie.title)


// Alternative .sort()

let oldestMovie = movies[0]

movies.forEach((currentElement) => {
    if (currentElement.year < oldestMovie.year) {
        oldestMovie = currentElement
    }
})


console.log(oldestMovie.title)

// -----------------------------------------
// let arr = [1, 3, 8, 2, 5]

// let total = 0;

// arr.forEach((nb) => {
//     total += nb
// }

// )

// console.log(total)

// -----------------------------------------

// let arrStr = ['Bye', 'Tchuss', 'Ciao', 'Aurevoir']

// let sentence = ''

// arrStr.forEach((adieu, ind) => {
//     if (ind === arrStr.length - 1) {
//         sentence += adieu
//     } else {
//         sentence += adieu + ', '
//     }

// })
// console.log(sentence)

// --------------------------------------------

// f. Logger tous les titres de film qui ont au moins 3 acteurs






// 1. Ecrire une fonction qui prend en parametre le tableau movies et qui retourne un nouveau tableau de tous les titres de films
// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (movies), et qui retourne un nouveau tableau de titres de film de l'annee specifiee
// 3. Ecrire une fonction qui prend en parametre un realisateur et un tableau (movies), et qui retourne un nouveau tableau de tous les titres de films de ce realisateur