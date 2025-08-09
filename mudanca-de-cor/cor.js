const trcor = document.getElementById("troca-cor");
const corpo = document.getElementById("body");
const txtOr = document.getElementById("texto-laranja")
const txtSl = document.getElementById("texto-slate")

trcor.addEventListener("click", () => {
    if (corpo.classList.contains('bg-orange-400')) {
        corpo.classList.remove('bg-orange-400')
        corpo.classList.add('bg-slate-950')
        txtSl.classList.toggle('hidden')
        txtOr.classList.toggle('hidden')
    } else {
        corpo.classList.remove('bg-slate-950')
        corpo.classList.add('bg-orange-400')
        txtSl.classList.toggle('hidden')
        txtOr.classList.toggle('hidden')
    }
})