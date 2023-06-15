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


const result3 = document.querySelector('.text-to-display-4')
const inputs3 = document.querySelectorAll('.input-4')




for (let i = 0; i < inputs3.length; i++) {
    inputs3[i].addEventListener('input', onInputs3Change)

}


inputs3[1].addEventListener('input', onInputs3Change)

function onInputs3Change() {
    let result = getDaysBetweenDates(inputs3[1].value, inputs3[0].value)
    result3.textContent = `Le séjour durera ${result} jours.`;
}

function getDaysBetweenDates(date2, date1) {
    let d2 = new Date(date2)
    let d1 = new Date(date1)
    let diffTime = d2 - d1;
    return (diffTime / (1000 * 60 * 60 * 24))
}


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
const select6 = document.querySelector('.select-6')

select6.addEventListener('change', onChangeSelect6)

function onChangeSelect6(event) {
    result6.textContent = event.currentTarget.value
}


// EXO 7

const result7 = document.querySelector('.div-to-color-7')
const input7 = document.querySelector('.input-7')

input7.addEventListener('input', onColorClick)

function onColorClick(event) {
    result7.style.backgroundColor = event.target.value
}

// EXO 8

const result8 = document.querySelector('.div-to-color-8')
const btns8 = document.querySelectorAll('.btn-8')

for (let i = 0; i < btns8.length; i++) {
    btns8[i].addEventListener('click', onBtn8Click)

}
function onBtn8Click(event) {
    result8.style.backgroundColor = event.target.getAttribute('data-color')

}


// EXO 9

const result9 = document.querySelector('.text-to-display-9')
const checkboxes = document.querySelectorAll('.checkbox')


for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', onCheckBoxChange)
}
// checkboxes[0].addEventListener('change', onCheckBoxChange)
// checkboxes[1].addEventListener('change', onCheckBoxChange)

function onCheckBoxChange() {
    let myStr = ''
    if (checkboxes[0].checked) {
        myStr += checkboxes[0].value
    }
    if (checkboxes[1].checked) {
        if (myStr) myStr += ' - '
        myStr += checkboxes[1].value
    }
    result9.textContent = myStr
}
