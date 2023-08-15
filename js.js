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

filter.addEventListener('input', e => {
    
})

bd.map(e=>{
    mainFilter.innerHTML+=`
    <div class="itemCard">
        <img src="${e.img}" alt="">
        <h2>${e.title}</h2>
        <p>${e.price}</p>
    </div>
    `
})