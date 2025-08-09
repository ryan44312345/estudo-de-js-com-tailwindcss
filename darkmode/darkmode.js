const trc = document.getElementById('troca')
const corpo = document.getElementById('body')
const corpo2 = document.getElementById('body')
const caixa = document.getElementById('box')
const botaomenu = document.getElementById('asidebutton')
const menu = document.getElementById('aside')
const botaomenu2 = document.getElementById('asidebutton2')
const menu2 = document.getElementById('aside2')
const avisotema = document.getElementById('modal')
const sim = document.getElementById('yes')
const nao = document.getElementById('no')
const img = document.getElementById('imagem')
const carrossel = document.getElementById('carrossel')
const imagens = ["img/a9940d849e126607d13c11801dd860ff.jpg", 'img/funny-dog-picture-figc088ef31ji2q6.webp', "img/funny-dog-picture-j1uewwx9yy5v7okm.webp"]
let contador = 0
let intervalo;

trc.addEventListener('click', () => {
    avisotema.classList.toggle('hidden')
})

sim.addEventListener('click', () => {
    corpo.classList.toggle('bg-black')
    corpo.classList.toggle('bg-white')
    corpo.classList.toggle('text-white')
    corpo.classList.toggle('text-black')
    trc.classList.toggle('text-white')
    trc.classList.toggle('bg-slate-100')
    trc.classList.toggle('bg-slate-950')
    caixa.classList.toggle('bg-slate-950')
    caixa.classList.toggle('bg-slate-300')
    caixa.classList.toggle('border-black')
    botaomenu2.classList.toggle('bg-slate-950')
    botaomenu2.classList.toggle('bg-white')
    botaomenu2.classList.toggle('text-black')
    botaomenu2.classList.toggle('text-white')
    botaomenu.classList.toggle('bg-slate-950')
    botaomenu.classList.toggle('bg-white')
    botaomenu.classList.toggle('text-black')
    botaomenu.classList.toggle('text-white')
    menu.classList.toggle('bg-slate-400')
    menu.classList.toggle('bg-slate-900')
    avisotema.classList.toggle('hidden')
})

nao.addEventListener('click', () => {
    avisotema.classList.toggle('hidden')
})

botaomenu.addEventListener('click', () => {
    menu.classList.toggle('-translate-x-full')
    menu2.classList.toggle('hidden')
})

botaomenu2.addEventListener('click', () => {
    menu2.classList.toggle('hidden')
    menu.classList.toggle('-translate-x-full')
})

function trocarImagem() {
    contador = (contador += 1) % imagens.length
    img.src = imagens[contador]
}

function iniciar() {
    intervalo = setInterval(trocarImagem, 3000)
}

function pararContagem() {
    clearInterval(intervalo)
}

iniciar()

carrossel.addEventListener("mouseenter", pararContagem)

carrossel.addEventListener("mouseleave", iniciar)