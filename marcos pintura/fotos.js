import { foto } from "./foto.js";

        const selecione = document.getElementById('id');
        const fotoSelecionada = document.getElementById('fotoSelecionada');
        const imagemContainer = document.getElementById('imagem-container');
        let imagens = [];

        function carregarImagens() {
            const divFotos = document.querySelectorAll('.imagem');
            divFotos.forEach(div => {
                let img = criarImagem(div.getAttribute('src'), div.getAttribute('alt'));
                imagens.push(img);
                imagemContainer.appendChild(img);
            });
        }

        function criarImagem(src, alt) {
            let img = new Image();
            img.src = src;
            img.alt = alt;
            img.classList.add('imagem');
            img.addEventListener("click", imagemClicada);
            return img;
        }

        function imagemClicada() {
            fotoSelecionada.src = this.src;
            console.log(`A imagem ${this.alt} foi clicada`);
        }

        function adicionarFoto() {
            let img = criarImagem(foto.value, 'Nova Foto');
            document.body.appendChild(img);
            imagens.push(img);
            foto.value = '';
        }

        function removerFoto(img) {
            if (confirm('Deseja realmente excluir essa foto?')) {
                img.parentNode.removeChild(img);
                imagens.splice(imagens.indexOf(img), 1);
            }
        }

        function clonarEAdicionarFoto(img) {
            let novoImg = img.cloneNode(true);
            novoImg.style.marginTop = '20px';
            document.body.appendChild(novoImg);
            imagens.push(novoImg);
        }

        function trocaTamanho(tam) {
            tam = parseInt(tam, 10);
            for (let i = 0; i < imagens.length; i++) {
                imagens[i].width = tam + 'px';
                imagens[i].height = tam + 'px';
            }
        }

        carregarImagens();