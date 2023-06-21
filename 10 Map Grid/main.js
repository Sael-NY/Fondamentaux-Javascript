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

let movieTitles = []

movies.forEach((currentElement) => {
    if (currentElement.actors.length >= 3) {
        movieTitles.push(currentElement.title)
    }
})





const filteredMovies = movies.filter((el) => {
    return el.actors.length >= 3
})


const filteredMovieTitles = filteredMovies.map((currentElement) => {
    return currentElement.title
})

console.log(filteredMovieTitles)


// ----------------------------------------

// const arr = ['hello -- english', 'salut -- français', 'bye -- english', 'au revoir -- français', 'Guten Tag -- allemand']

// const newArr = movies.map((movie)  => {
//     return movie.title + '--super film'
// })

// function filterByLanguage(lang, array) {
//     const filteredArr = array.filter((el) => {
//         return el.includes(lang)
//     })

//     return filteredArr
// }

// const result = filterByLanguage('english', arr)

// --------------------------------------------

let words = ['fenetre', 'velux', 'porte', 'cheminée']

const filteredWords = words.filter((word) => {
    return word.length > 6
})
console.log(filteredWords)


// 1. Ecrire une fonction qui prend en parametre le tableau movies et qui retourne un nouveau tableau de tous les titres de films

function getAllTitles(arr) {

    const mappedArr = arr.map((element) => {
        return element.title
    })

    return mappedArr


}

const result = getAllTitles(movies)
console.log(result)
// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (movies), et qui retourne un nouveau tableau de titres de film de l'annee specifiee



function getMoviesByYear(annee, arr) {
    const filteredArray = arr.filter((element) => {
        return element.year === annee
    })

    const mappedFilteredArray = filteredArray.map((el) => {
        return el.title
    })


    return mappedFilteredArray

}

const res = getMoviesByYear(1994, movies)


console.log(res)




// 3. Ecrire une fonction qui prend en parametre un realisateur et un tableau (movies), et qui retourne un nouveau tableau de tous les titres de films de ce realisateur


function directorMovies(real, arr) {
    const filteredMovie = arr.filter((element) => {
        return element.director === real

    })

    const mapMovies = filteredMovie.map((element) => {
        return element.title
    })

    return mapMovies
}

const res2 = directorMovies('Christopher Nolan', movies)


console.log(res2)