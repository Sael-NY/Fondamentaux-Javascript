// const mainBtns = document.querySelectorAll(".main-btn")
// const mainContainer = document.querySelector('.main-container')
// const input = document.querySelector(`input`)

// for (let i = 0; i < mainBtns.length; i++) {
//     mainBtns[i].addEventListener("click", onClick)
// }



// function onClick() {


//     mainContainer.style.backgroundColor = input.value

// }

// const mainBtn = document.querySelectorAll

const bmiData = [
    { name: "Maigreur", color: "midnightblue", range: [0, 18.5] },
    { name: "Bonne santé", color: "green", range: [18.5, 25] },
    { name: "Surpoids", color: "lightcoral", range: [25, 30] },
    { name: "Obésité modérée", color: "orange", range: [30, 35] },
    { name: "Obésité sévère", color: "crimson", range: [35, 40] },
    { name: "Obésité morbide", color: "purple", range: 40 },
];


const formBtn = document.querySelector('.form-btn')
const displayBMI = document.querySelector('.bmi-value')
const description = document.querySelector('.description')
const inputs = document.querySelectorAll('input');
// IMC = poids en kg / taille^2
// calcul au carré: 6 ** 2


// Correction


formBtn.addEventListener(`click`, onBtnClick)

function onBtnClick(event) {
    event.preventDefault();
    const wValue = weight.value
    const hValue = height.value

    if (!wValue || !hValue || wValue <= 0 || hValue <= 0) {
        handleError()
        return
    }
    const bmi = (wValue / Math.pow((hValue / 100), 2)).toFixed(1)
    displayResult(bmi);
}

function displayResult(val) {
    let rank
    for (let i = 0; i < bmiData.length; i++) {
        if (val >= bmiData[i].range[0] && val < bmiData[i].range[1]) {
            rank = bmiData[i]
            break;
        } else if (typeof bmiData[i].range === `number` && val >= bmiData[i].range) {
            rank = bmiData[i]
        }
    }
    displayBMI.textContent = val;
    displayBMI.style.color = rank.color
    description.textContent = rank.name

}

function handleError() {
    displayBMI.textContent = `Echec`
    description.textContent = ("Remplissez correctement le formulaire !")
}