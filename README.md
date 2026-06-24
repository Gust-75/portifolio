# 🚀 Meu Portfólio Pessoal

Bem-vindo ao repositório do meu portfólio pessoal! Este é um espaço interativo desenvolvido para apresentar quem eu sou, minhas habilidades técnicas e os principais projetos que venho desenvolvendo como Desenvolvedor Júnior.

ℹ️ **O site está no ar!** Você pode acessá-lo clicando aqui: [Link do seu GitHub Pages](https://Gust-75.github.io/nome-do-seu-repositorio/)

---

## 💻 Sobre o Projeto

O objetivo deste projeto foi construir uma aplicação web responsiva, moderna e limpa, utilizando tecnologias fundamentais do desenvolvimento web front-end. O site conta com uma página inicial, uma seção dedicada à listagem de projetos e um formulário de contato dinâmico.

### Páginas do Portfólio:
* **Página Inicial (Home):** Apresentação pessoal, foto de perfil e links de chamada para ação (CTA).
* **Meus Projetos:** Galeria de cards exibindo os trabalhos recentes (como o *Table Analizer*), categorias de desenvolvimento e as tecnologias utilizadas em cada um.
* **Contato:** Um canal direto contendo links para minhas redes sociais e um formulário de mensagem.

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído "do zero", utilizando:

* **HTML5:** Estruturação semântica de todas as páginas.
* **CSS3:** Estilização moderna baseada em Flexbox, paleta de cores escura com contrastes neon e total responsividade (adaptável para celulares e tablets via Media Queries).
* **JavaScript (Vanilla):** Implementação de interatividade e manipulação dinâmica do DOM.

---

## 🧠 Recursos de Destaque (Manipulação do DOM)

Para atender a critérios de interatividade técnica, a página de **Contato** utiliza JavaScript para manipular a árvore do DOM em tempo real:
1.  **Intercepção de Evento:** O script monitora o evento de envio (`submit`) do formulário.
2.  **Modificação de Estilo:** O formulário é ocultado dinamicamente (`display: none`) assim que enviado.
3.  **Criação de Elementos:** Uma nova estrutura HTML de agradecimento (Card de Sucesso) é criada dinamicamente via JS (`document.createElement`).
4.  **Injeção no DOM:** A mensagem personalizada contendo o nome digitado pelo usuário é inserida na tela (`appendChild`), validando a experiência sem recarregar a página.

---

## 📁 Como rodar o projeto localmente

Se quiser baixar e rodar este projeto na sua máquina, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone [https://github.com/Gust-75/portfolio.git](https://github.com/Gust-75/portfolio.git)
