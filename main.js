// Aguarda o HTML da página carregar completamente
document.addEventListener("DOMContentLoaded", function () {
    
    // Seleciona o formulário de contato pelo elemento 'form'
    const formulario = document.querySelector(".contato-formulario form");

    // Verifica se o formulário existe na página atual (para não dar erro nas outras páginas)
    if (formulario) {
        formulario.addEventListener("submit", function (evento) {
            // Impede o comportamento padrão de recarregar a página imediatamente
            evento.preventDefault();

            // Pega os valores digitados pelo usuário
            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;

            // Exibe um alerta personalizado de sucesso
            alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso. Entrarei em contato pelo e-mail: ${email}.`);

            // Limpa todos os campos do formulário após o envio
            formulario.reset();
        });
    }
});