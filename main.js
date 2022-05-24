const link = document.querySelector('#link')
const font = document.querySelector('#font')
const cancel = document.querySelector('#cancel')


font.addEventListener('click', function(){
    link.style.display = 'block'
})


cancel.addEventListener('click', function(){
    link.style.display = 'none'
})