// Função para criar cartões de flashcard
function criaCartao(categoria, pergunta, resposta) {
    let container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className = 'cartao';

    cartao.innerHTML = `
    <div class="cartao__conteudo">
    <h3>${categoria}</h3>
    <div class="cartao__conteudo__pergunta">
        <p>${pergunta}</p>
    </div>
    <div class="cartao__conteudo__resposta">
        <p>${resposta}</p>
    </div>
    </div>
    `;

    let respostaEstaVisivel = false;

    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle('active', respostaEstaVisivel);
    }
    cartao.addEventListener('click', viraCartao);

    container.appendChild(cartao);
}

// Novos exemplos de flashcards
criaCartao('Culinária', 'Qual é o ingrediente principal do sushi?', 'Arroz');
criaCartao('Esportes', 'Quantos jogadores formam um time de futebol?', '11 jogadores');
criaCartao('Geografia', 'Qual é a capital do Canadá?', 'Ottawa');
criaCartao('História', 'Em que ano ocorreu a queda do Muro de Berlim?', '1989');
criaCartao('Literatura', 'Quem escreveu "O Grande Gatsby"?', 'F. Scott Fitzgerald');