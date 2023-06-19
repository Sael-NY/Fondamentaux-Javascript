import games from "./games.json" assert { type: 'json' };

init()

function init() {

    console.log(games);
}




// a. Logger le premier element du tableau games
console.log(games[0])

// b. Logger l'annee du 3eme element du tableau games
console.log(games[2].year)

// c. Logger le titre du dernier element du tableau
console.log(games[games.length - 1].title)

// 1. Ecrire une fonction qui prend en parametre le tableau games et qui retourne un nouveau tableau de tous les noms de jeux (.title)
const getAllTitles = (arr) => {
    let titles = []

    arr.forEach(game =>
        titles.push(game.title))
    return titles

}

const result = getAllTitles(games);
console.log(result)

// 2. Ecrire une fonction qui prend en parametre une annee et un tableau (games), et qui retourne un nouveau tableau de noms de jeux de l'annee specifiee

const getGameNamesByYear = (yearParam, arr) => {
    let result = []

    arr.forEach((el) => {

        if (yearParam === el.year) {
            result.push(el.title)
        }
    })


    return result
}

console.log(getGameNamesByYear(2021, games))

// 3. Ecrire une fonction qui prend en parametre un tableau (games) retourne un tableau de noms de jeux, a condition que leur note soit superieur ou egal a 8

const getGameNamesByRate = (rating, arr) => {
    let titles = []

    arr.forEach((el) => {

        if (rating >= el.rate) {
            titles.push(el.title)
        }
    }
    )

    return titles;
}

console.log(getGameNamesByRate(8, games))


// 4. Ecrire une fonction qui prend en parametre une console et un tableau (games), et qui retourne un nouveau tableau de tous les jeux disponibles sur cette console

const getGameTitlesByDevice = (deviceStr, array) => {
    let titles = []
    array.forEach((game) => {
        for (let i = 0; i < game.devices.length; i++) {
            const element = game.devices[i];
            if (element.includes(deviceStr)) {
                titles.push(game.title)
                break;
            }

        }
        // if (game.devices.includes(deviceStr)) {

        //     titles.push(game.title)

        // }

    })
    return titles;
}

console.log(getGameTitlesByDevice("play", games))



