// EXO 1
const div1 = document.querySelector('.div-to-color-1')
const btns1 = document.querySelectorAll('.btn-1')




for (let i = 0; i < btns1.length; i++) {
    btns1[i].addEventListener('click', onBtn1Click)

}
function onBtn1Click(event) {
    div1.style.backgroundColor = event.target.textContent
}

// // EXO 2

const result2 = document.querySelector(`.text-to-display-3`)

const input2 = document.querySelector('.input-3')

input2.addEventListener(`input`, interactInput2)

const originText = result2.textContent;

function interactInput2() {



    if (!input2.value) {
        result2.textContent = originText
    } else {
        result2.textContent = input2.value
    }

}

// form2.addEventListener('submit', (e) => {
//     e.preventDefault()
//     textToDisplay2.textContent = input2.value;
// })

// // EXO 3


const textToDisplay3 = document.querySelector('.text-to-display-3')






// EXO 4

const result4 = document.querySelector('.text-to-display-2')
const form4 = document.querySelector('.form-2')
const input4 = document.querySelector('.input-2')

form4.addEventListener('submit', onForm4Submit)

function onForm4Submit(e) {
    e.preventDefault();
    result4.textContent = input4.value
}

// EXO 5



const result5 = document.querySelector(`.text-to-display-5`)
const input5 = document.querySelector(`.input-5`)

input5.addEventListener('input', onSlider5Change)

function onSlider5Change(e) {
    result5.textContent = e.target.value
}

// EXO 6


const result6 = document.querySelector('.text-to-display-6')
const select = document.querySelector('select-6')