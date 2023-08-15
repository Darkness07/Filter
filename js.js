let bd = [
    {
        title: 'f',
        img: 'img',
        price: 1000,
    },
    {
        title: 's',
        img: 'img',
        price: 1100,
    },
    {
        title: 'a',
        img: 'img',
        price: 1200,
    },
]

let mainFilter = document.querySelector('.mainFilter')
let filter = document.querySelector('#filter')

bd.map(e=>{
    mainFilter.innerHTML+=`
    <div class="itemCard">
        <h2>${e.title}</h2>
        <p>${e.price}</p>
    </div>
    `
})

filter.addEventListener('input', ev => {
    mainFilter.innerHTML=' '
    bd.map(e =>{
        if(e.title.includes(ev.target.value)){
            mainFilter.innerHTML+=`
            <div class="itemCard">
                <h2>${e.title}</h2>
                <p>${e.price}</p>
            </div>
            `
        }
    })
})

