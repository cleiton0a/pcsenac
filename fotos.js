function criarCardImagem(caminhoImagem) {
  var card = document.createElement('div');
  card.className = 'card';
  card.style.width = '18rem';
  card.style.margin = '10px';

  var img = document.createElement('img');
  img.className = 'card-img-top';
  img.src = caminhoImagem;
  img.alt = 'Imagem';

  var cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  var cardTitle = document.createElement('h5');
  cardTitle.className = 'card-title';
  cardTitle.textContent = 'Título da Imagem';

  var cardText = document.createElement('p');
  cardText.className = 'card-text';
  cardText.textContent = 'Descrição da imagem.';

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(cardText);
  card.appendChild(img);
  card.appendChild(cardBody);

  return card;
}

var divCards = document.createElement('div');
divCards.className = 'row';
document.body.appendChild(divCards);

var Imagens = ["1.jpg", "2.jpg", "3.jpg","4.jpg","5.jpg","6.jpg","7.jpg"]; 
var caminhoDaPasta = "./fotos"; 
Imagens.forEach(function(Imagem) {
  var caminhoImagem = caminhoDaPasta + '/' + Imagem;
  var card = criarCardImagem(caminhoImagem);
  divCards.appendChild(card);
});
