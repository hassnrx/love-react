const btn = document.querySelector('.btn')



btn.addEventListener('dblclick', (e)=> {
const li = document.createElement('i')
li.classList.add('fas')
li.classList.add('fa-heart')
const y = e.clientY
const x = e.clientX

const yin = e.target.offsetTop
const xin = e.target.offsetLeft

const up = y - yin
const left = x - xin
li.style.top = `${up}px `
li.style.left = `${left}px`
btn.appendChild(li)
console.log( up, left)

})

