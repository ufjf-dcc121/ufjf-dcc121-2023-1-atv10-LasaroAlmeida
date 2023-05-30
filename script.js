import store from "./srore.js";

const form = document.forms.entrada;
form.addEventListener("submit", envia);


atualiza();

function envia(event) {
    event.preventDefault();
    console.log("Formulário Enviado!");
    const n = form.valor.value;
    store.estado.push(n);
    atualiza();
    form.valor.value = '';
    form.valor.focus();
}

function atualiza() {
    const ol = document.querySelector('ol');
    ol.innerHTML = "";
    for (let i = 0; i < store.estado.length; i++) {
        const li = document.createElement('li');
        li.textContent = store.estado[i];
        ol.appendChild(li);
    }
}

