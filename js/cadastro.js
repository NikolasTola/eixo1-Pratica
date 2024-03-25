const inputList = document.getElementsByClassName("inputSkills");


for (let i = 0; i < inputList.length; i++) {
    inputList[i].addEventListener("input", function(){

        if(inputList[i].value.length > inputList[i].maxLength){
            inputList[i].value = inputList[i].value.slice(0, inputList[i].maxLength);
        }
         
    });
  }

for (var i = 0; i < inputList.length; i++) {
    inputList[i].addEventListener('keypress', function(e){
      if (e.key === '-'){
        e.preventDefault();
      }
      if (e.key === '+'){
        e.preventDefault();
      }
      if (e.key === 'e'){
        e.preventDefault();
      }
      if (e.key === 'E'){
        e.preventDefault();
      }
      if (e.key === '.'){
        e.preventDefault();
      }
      if (e.key === ','){
        e.preventDefault();
      }
    });
}

const botaoNI = document.querySelector("#botaoNI");
const valorNI = document.querySelector("#valorNI")

botaoNI.addEventListener("click", function(){
    let min = 100000;
    let max = 1000000;
    let NI = Math.floor(Math.random()*(max-min) + min);
  
    valorNI.textContent = NI;
    botaoNI.disabled = true;
    console.log(NI);

});

const botaoCadastrar = document.querySelector("#botaoCadastrar");
const inputNome = document.querySelector("#inputNome");
const inputCargo = document.querySelector("#inputCargo");
const erro = document.querySelector("#erro");

botaoCadastrar.addEventListener("click", function(){
    if(inputNome.value != "" && inputCargo.value != ""){
        let contador = 0;
        for (let i = 0; i < inputList.length; i++) {
            if (inputList[i].value != "") {
                contador = contador + 1;
            } 
        }

        if(contador == inputList.length){
            if(valorNI.innerHTML.localeCompare("000000") != 0){
                erro.textContent = "";
                console.log(valorNI.value)
                erro.style.visibility = "visible";
                erro.style.color = "green";
                erro.textContent = "CADASTRO FEITO COM SUCESSO!";
            } else{
                erro.style.visibility = "visible";
                erro.style.color = "red";
                erro.textContent = "ERRO: Número identificador nulo!"
            }
            
        } else {
            erro.style.visibility = "visible";
            erro.style.color = "red";
            erro.textContent = "ERRO: Campo SKILL vazio!"
        }
    } else {
        erro.style.visibility = "visible";
        erro.style.color = "red";
        erro.textContent = "ERRO: Campo NOME/CARGO vazio!"
    }
});
