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