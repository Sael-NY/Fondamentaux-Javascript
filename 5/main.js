// const btn = document.querySelector('.btnBackground')
// const container = document.querySelector('.background-container')



// btn.addEventListener("click", () => {
//     changeBackground(container)
// })

// function changeBackground(cont) {
//     cont.textContent = "";
//     for (let i = 0; i < 10; i++) {
//         for (let j = 0; j < 10; j++) {
//             let newDiv = document.createElement("div");
//             newDiv.classList.add('colored-rect')
//             newDiv.style.left = `${i * 10}vw`;
//             newDiv.style.top = `${j * 10}vh`;
//             let randomColor = getRandomColor();
//             newDiv.style.backgroundColor = randomColor
//             cont.appendChild(newDiv)
//         }
//     }
// }

// function getRandomColor() {
//     return `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`
// }





// const newDiv = document.createElement("div");
// newDiv.classList.add(`new-div`)
// mainContainer.appendChild(newDiv)

// btn.addEventListener(`click`, onBtnClick)
// btn.addEventListener(`mouseleave`, onBtnLeave)

// let changeColorToBlack = true;
// let originColor = container.style.backgroundColor;

// function onBtnClick() {
//     if (changeColorToBlack) {
//         container.style.backgroundColor = `black`

//     } else {
//         container.style.backgroundColor = originColor

//     }
//     changeColorToBlack = !changeColorToBlack
// }

// function onBtnLeave() {
//     container.style.backgroundColor = `pink`
// }


const container = document.querySelector('.container')
const mainContainer = document.querySelector('.main-container')
const btn = document.querySelector('.btn')

// const newDiv = document.createElement("div");
// newDiv.classList.add('new-div')
// mainContainer.appendChild(newDiv)

// const newDiv2 = document.createElement("div");
// newDiv2.classList.add('new-div')
// mainContainer.appendChild(newDiv2)
// newDiv2.style.left = "10vw"
// newDiv2.style.backgroundColor = "green"

// btn.addEventListener('mouseenter', onBtnClick)
// btn.addEventListener('mouseleave', onBtnClick)

// let changeColorToBlack = true;
// let originColor = container.style.backgroundColor;

// function onBtnClick() {
//     if (changeColorToBlack) {
//         container.style.backgroundColor = 'black'
//     } else {
//         container.style.backgroundColor = originColor
//     }

//     changeColorToBlack = !changeColorToBlack
// }



btn.addEventListener('click', onBtnClick)

const colors = ['yellow', 'red']

function onBtnClick() {
    for (let line = 0; line < 10; line++) {
        for (let col = 0; col < 10; col++) {
            const newDiv = document.createElement("div");
            mainContainer.appendChild(newDiv)
            newDiv.classList.add('new-div')
            newDiv.style.left = `${col}0vw`
            newDiv.style.top = `${line}0vh`
            newDiv.style.backgroundColor = colors[(col + line) % 2]
        }
    }
}


