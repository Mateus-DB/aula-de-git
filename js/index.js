let input = document.getElementById('senha')
let btnIcon = document.getElementById('botao')

function mudar() {
    if (input.type == "password") {
        input.setAttribute('type', 'text')
        btnIcon.classList.replace('bi-eye-fill', 'bi-eye-slash-fill')
    } else if (input.type == "text") {
        input.setAttribute('type', 'password')
        btnIcon.classList.replace('bi-eye-slash-fill', 'bi-eye-fill',)
    }

}