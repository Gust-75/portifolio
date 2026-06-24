document.addEventListener("DOMContentLoaded", function () {
    // 1. Seleciona o formulário e o container onde ele está
    const formulario = document.querySelector(".contato-formulario form");
    const containerFormulario = document.querySelector(".contato-formulario");

    if (formulario && containerFormulario) {
        formulario.addEventListener("submit", function (evento) {
            // Impede a página de recarregar
            evento.preventDefault();

            // 2. Captura o nome que o usuário digitou
            const nome = document.getElementById("nome").value;

            // 3. MANIPULAÇÃO DO DOM: Faz o formulário sumir (esconde o elemento)
            formulario.style.display = "none";

            // 4. MANIPULAÇÃO DO DOM: Cria um novo elemento HTML via JavaScript
            const mensagemSucesso = document.createElement("div");
            
            // Adiciona estilo e conteúdo à nova div
            mensagemSucesso.style.backgroundColor = "#242433";
            mensagemSucesso.style.border = "2px dashed #00ffc4";
            mensagemSucesso.style.padding = "30px";
            mensagemSucesso.style.borderRadius = "8px";
            mensagemSucesso.style.textAlign = "center";
            
            // Coloca o texto com o nome do usuário dentro da nova div
            mensagemSucesso.innerHTML = `
                <h3 style="color: #00ffc4; margin-bottom: 15px; font-size: 1.8rem;">¡Mensagem Enviada!</h3>
                <p style="color: #cbd5e1;">Obrigado pelo contato, <strong>${nome}</strong>.</p>
                <p style="color: #cbd5e1; margin-top: 10px;">Sua mensagem foi recebida e responderei o mais rápido possível.</p>
            `;

            // 5. MANIPULAÇÃO DO DOM: Insere o novo elemento na tela (dentro do container)
            containerFormulario.appendChild(mensagemSucesso);
        });
    }
});