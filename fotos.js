var minhaImagem = document.createElement('img');
minhaImagem.id = 'minhaImagem';
document.body.appendChild(minhaImagem);

var caminhoDaPasta = './fotos';
var nomesDasImagens = ['1.jpg', '2.jpg',"3.jpg"];

function escolherImagemAleatoria() {
  var indiceAleatorio = Math.floor(Math.random() * nomesDasImagens.length);
  return nomesDasImagens[indiceAleatorio];
}

function atualizarImagem() {
  var imagemEscolhida = escolherImagemAleatoria();
  minhaImagem.src = caminhoDaPasta + '/' + imagemEscolhida;
}

minhaImagem.addEventListener('click', function() {
  atualizarImagem();
});

// Atualiza a imagem inicial
atualizarImagem();
