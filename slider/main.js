const slidesData = [
    { title: "VILLAGE", description: "Lorem ipsum dolor sit amet" },
    { title: "VIGNE", description: "Consectetur adipiscing elit" },
    { title: "CHAMPS", description: "Sed do eiusmod tempor incididunt" },
]
const imgs = document.querySelectorAll('.slider-img')
const btns = document.querySelectorAll('.slider-btn')
let slideIndex = 0;

btns.forEach((btn, index) => {
    btn.index = index;
    btn.addEventListener('click', onClickBtn)

})

function onClickBtn(e) {
    if (e.currentTarget.index === 0) {
        slideIndex--;
    } else {
        slideIndex++;
    }

    btns[0].style.opacity = btns[1].style.opacity = 1
    btns[0].style.pointerEvents = btns[1].style.pointerEvents = 'auto'

    if (slideIndex <= 0) {
        slideIndex = 0;
        btns[0].style.opacity = 0.5
        btns[0].style.pointerEvents = 'none'

    } else if (slideIndex >= imgs.length - 1) {
        slideIndex = imgs.length - 1;
        btns[1].style.opacity = 0.5
        btns[1].style.pointerEvents = 'none'
    }

    displayImages(slideIndex)

}

function displayImages(slideI) {
    console.log(slideI);
    imgs.forEach((img, indexImg) => {

        img.style.transform = `translateX(${(indexImg - slideI) * 100}%)`
    })

}
function init() {
    slideIndex = 0;
    btns[0].style.opacity = 0.5
    btns[0].style.pointerEvents + 'none'
    displayImages(slideIndex)
}



