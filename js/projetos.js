const imagemModalArquivo = document.querySelector("#imagemModalInput");
const imagemModalSpan = document.querySelector(".imagemModalSpan");
imagemModalSpan.innerHTML = "Imagem";
let enderecoImagem = "";


imagemModalArquivo.addEventListener('change', function(e){
    const inputTarget = e.target;
    const file = inputTarget.files[0];

    if(file){
        const reader = new FileReader();

        reader.addEventListener('load', function(e){
            const readerTarget = e.target;

            const img = document.createElement('img');
            img.src = readerTarget.result;
            enderecoImagem = img.src;
            img.classList.add("imagemAtualModal");
            imagemModalSpan.innerHTML = "";
            imagemModalSpan.appendChild(img);
            
        });
        reader.readAsDataURL(file);
    } else{
        imagemModalSpan.innerHTML = "Imagem";
        enderecoImagem = "";
    }
    
});

const inputDescricao = document.querySelector("#inputDescricao");
const inputProjeto = document.querySelector("#inputProjeto");
const modalOverlay = document.querySelector(".modalOverlay");

if(inputProjeto.value.length > inputProjeto.maxLength){
    inputProjeto.value = inputProjeto.value.slice(0, inputProjeto.maxLength);
}
     

if(inputDescricao.value.length > inputDescricao.maxLength){
    inputDescricao.value = inputDescricao.value.slice(0, inputDescricao.maxLength);
}

const modal = document.querySelector(".modalComCabecalho");
const botaoCriarProjeto = document.querySelector(".botaoCriarProjeto");
const botaoFecharModal = document.querySelector("#botaoFecharModal");
const botaoCriarModal = document.querySelector("#botaoCriarModal");
const erroModal = document.querySelector(".erroModal");

let contaCard = 0;

botaoCriarProjeto.addEventListener('click', function(){
    modal.classList.add('active');
    modalOverlay.classList.add('active');
});

botaoFecharModal.addEventListener('click', function(){
    modal.classList.remove('active');
    modalOverlay.classList.remove('active');
    inputProjeto.value = "";
    inputDescricao.value = "";
    imagemModalSpan.innerHTML = "Imagem";
    enderecoImagem = "";
});

modalOverlay.addEventListener('click', function(){
    modal.classList.remove('active');
    modalOverlay.classList.remove('active');
});

const card = document.getElementsByClassName("card");
const divCards = document.querySelector("#divCards");

botaoCriarModal.addEventListener("click", function(){
    if(inputProjeto.value == "" || inputDescricao.value == "" ){
        erroModal.innerHTML = "ERRO: Input vazio!";
        erroModal.style.visibility = "visible";

    }
    else{
        erroModal.innerHTML = "ERRO";
        erroModal.style.visibility = "hidden";

        const criaCard = document.createElement("div");
        const criaImgCard = document.createElement("img");
        const criaTituloCard = document.createElement("h5");
        const criaDescricaoCard = document.createElement("p");

        criaTituloCard.innerHTML = inputProjeto.value;
        criaDescricaoCard.innerHTML = inputDescricao.value;
        if(enderecoImagem != ""){
            criaImgCard.src = enderecoImagem;
        }
        else{
            criaImgCard.src = "Imagens/imagemPadrao.png"
        }
        

        criaCard.classList.add('card');
        criaImgCard.classList.add('imagemCard');

        divCards.appendChild(criaCard);
        criaCard.appendChild(criaImgCard);
        criaCard.appendChild(criaTituloCard);
        criaCard.appendChild(criaDescricaoCard);

        modal.classList.remove('active');
        modalOverlay.classList.remove('active');
        inputProjeto.value = "";
        inputDescricao.value = "";
        imagemModalSpan.innerHTML = "Imagem";
        enderecoImagem = "";

        for (let i = 0; i < card.length; i++) {
            contaCard = i + 1;
            
        }
        console.log(contaCard);
    }

   

    
  });

     