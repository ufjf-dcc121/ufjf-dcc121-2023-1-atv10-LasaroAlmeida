import store from "./srore.js";

const form = document.forms.entrada;
form.addEventListener("submit", envia);


atualiza();

function envia(event) {
    event.preventDefault();
    console.log("Formulário Enviado!");
    store.estado++;
    atualiza();
}

function atualiza() {
    const ol = document.querySelector('ol');
    ol.innerHTML = `<li>${store.estado}</li>`;
}

