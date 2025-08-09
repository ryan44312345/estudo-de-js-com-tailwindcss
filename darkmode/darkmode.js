const trc = document.getElementById('troca')
const corpo = document.getElementById('body')

trc.addEventListener('click', () => {
    corpo.classList.toggle('dark')
})