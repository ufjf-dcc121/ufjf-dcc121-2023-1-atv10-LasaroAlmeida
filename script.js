const form = document.forms.entrada;
form.addEventListener("submit", envia);
function envia(event) {
    event.preventDefault();
    console.log("Formulário Enviado!");
}