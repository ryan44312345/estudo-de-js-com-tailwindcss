const trc = document.getElementById('troca')
const corpo = document.getElementById('body')
const corpo2 = document.getElementById('body')
const caixa = document.getElementById('box')
const caixa2 = document.getElementById('box2')
const caixa3 = document.getElementById('box3')
const voltar = document.getElementById('back')
const avancar = document.getElementById('go')
const voltar2 = document.getElementById('back2')
const avancar2 = document.getElementById('go2')
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
    caixa3.classList.toggle('bg-slate-900')
    caixa3.classList.toggle('bg-slate-200')
    caixa3.classList.toggle('border-black')
    caixa2.classList.toggle('bg-slate-800')
    caixa2.classList.toggle('bg-slate-200')
    caixa2.classList.toggle('border-black')
})

nao.addEventListener('click', () => {
    avisotema.classList.toggle('hidden')
})

botaomenu.addEventListener('click', () => {
    menu.classList.toggle('-translate-x-full')
})

botaomenu2.addEventListener('click', () => {
    menu.classList.toggle('-translate-x-full')
})

function trocarImagem() {
    contador = (contador += 1) % imagens.length
    img.src = imagens[contador]
}

function trocarImagem2() {
    contador = (contador - 1 + imagens.length) % imagens.length
    img.src = imagens[contador]
}

function iniciar() {
    clearInterval(intervalo)
    intervalo = setInterval(trocarImagem, 3000)
}


function pararContagem() {
    clearInterval(intervalo)
}
avancar2.addEventListener('click', () => {
        trocarImagem()
        iniciar()
    })

voltar2.addEventListener('click', () => {
        trocarImagem2()
        iniciar()
    })

iniciar()

carrossel.addEventListener("mouseenter", pararContagem)

carrossel.addEventListener("mouseleave", iniciar)


function voltarFunction(acao, ...slides) {
    acao.addEventListener('click', () => {
    let slideAtual = slides.findIndex(slide => !slide.classList.contains('hidden'));
    slides[slideAtual].classList.add('hidden');

    let anteriorSlide = (slideAtual - 1 + slides.length) % slides.length;

    slides[anteriorSlide].classList.remove('hidden');
    })   
}

// part 1. Explicação do código acima (voltarFunction), o parametro dessa function é composta por um parametro padrão (acao) que não é uma array e uma lista/array (...slides) ele vira uma array no momento em que há 3 pontos atrás do mesmo.
// part 2. Funções dos parametros. Cada parametro tem a sua função, o parametro "acao" tem a função de ser a const que vai receber a ação de click, sendo substituida por uma const que é clicavel 

function avancarFunction(acao, ...slides) {
    acao.addEventListener('click', () => {
    let slideAtual = slides.findIndex(slide => !slide.classList.contains('hidden'))
    slides[slideAtual].classList.add('hidden')

    let proximoSlide = (slideAtual + 1) % slides.length
    slides[proximoSlide].classList.remove('hidden')
    })
}

voltarFunction(voltar, caixa, caixa2, caixa3)

avancarFunction(avancar, caixa, caixa2, caixa3)