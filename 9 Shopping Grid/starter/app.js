const containerRow = document.querySelector('.row')
const checks = document.querySelectorAll('.btn-check');

let categories = [];

checks.forEach((check) => {
    check.addEventListener(`change`, onCheckChange)
})





// Next stop : declarer les listeners sur les checkboxes
// afficher à chaque click de checkbox, la valeur de la box

let data;
fetchData()

checks.forEach((check) => {
    //check.addEventListener('change', onCheckChange)
})

async function fetchData() {
    try {
        const response = await fetch(`https://fakestoreapi.com/products`)

        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`)
        }

        data = await response.json()
        displayData(data);
    }
    catch (error) {
        console.log(error);
    }
}



function displayData(arr) {
    //     arr.forEach(() => {
    //         const item = document.createElement('div')
    //         item.textContent = "<p> Hello World </p>"
    //         containerRow.appendChild(item)
    //     })
    // }


    containerRow.innerHTML = ''
    arr.forEach((el) => {
        const item = document.createElement('div')
        item.className = "col-md-4"
        let rateStars = buildStars(el.rating.rate)
        item.innerHTML = `
        <div class="card p-3 m-1">
                <div class="d-flex flex-row mb-3"><img class="" src="${el.image}" width="70">
                    <div class="d-flex flex-column ml-2"><div class="custom-margin"><h5>${el.title}</h5><span class="text-black-50">${el.category}</span><div class="ratings mt-1">${rateStars}</div></div></div>
                </div>
                <div>${el.description.slice(0, 80)}...</div>
                <div class="d-flex justify-content-between install mt-3"><h6>${el.price}$</h6><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></div>
            </div>`
        containerRow.appendChild(item)
    })

}


function buildStars(rate) {
    let result = ''
    for (let i = 0; i < Math.round(rate); i++) {
        result += `<i class="fa-solid fa-star"></i>`
    }

    for (let i = 0; i < 5 - Math.round(rate); i++) {
        result += `<i class="fa-regular fa-star"></i>`
    }

    result += `<span style="padding: 10px">${rate}</span>`

    return result
}

function onCheckChange(e) {
    console.log(e.currentTarget.value)




}