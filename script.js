const form = document.forms.entrada;
form.addEventListener("submit", envia);

let estado = 0;

atualiza();

function envia(event) {
    event.preventDefault();
    console.log("Formulário Enviado!");
    estado++;
    atualiza();
}

function atualiza() {
    const ol = document.querySelector('ol');
    ol.innerHTML = `<li>${estado}</li>`;
}

