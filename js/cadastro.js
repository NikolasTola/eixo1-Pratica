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
const escolherCargo = document.querySelector("#escolherCargo");
const inputCargo = document.querySelector("#inputCargo");

const erro = document.querySelector("#erro");

botaoCadastrar.addEventListener("click", function(){
    if(inputNome.value != "" && escolherCargo.value != ""){
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

const cargo = "desenvolvedor";
const opcao = document.querySelector("#opcao");

if(opcao.disabled){
  opcao.style.display = "none";
}

/* --- INPUT CARGOS --- */

const HS1 = document.querySelector("#HS1");
const HS2 = document.querySelector("#HS2");
const HS3 = document.querySelector("#HS3");
const HS4 = document.querySelector("#HS4");
const HS5 = document.querySelector("#HS5");
const HS6 = document.querySelector("#HS6");
const HS7 = document.querySelector("#HS7");
const HS8 = document.querySelector("#HS8");


fetch("JSON/cargos.json")
.then(response => response.json())
.then(cargos => {
  
  cargos.map(cargo => {

    const option = document.createElement("option");
    option.value = cargo.cargo;
    option.textContent = cargo.cargo;
    option.classList.add("opcoesCargo");
    escolherCargo.appendChild(option);
  })
});



function  mudarHardSkills(nomeCargo){
  fetch("JSON/cargos.json")
    .then(response => response.json())
    .then(cargos => {

      for (let i= 0; i < cargos.length; i++) {
        if(cargos[i].cargo == nomeCargo){

          HS1.textContent = cargos[i].HS1.nome + ":";
          HS2.textContent = cargos[i].HS2.nome + ":";
          HS3.textContent = cargos[i].HS3.nome + ":";
          HS4.textContent = cargos[i].HS4.nome + ":";
          HS5.textContent = cargos[i].HS5.nome + ":";
          HS6.textContent = cargos[i].HS6.nome + ":";
          HS7.textContent = cargos[i].HS7.nome + ":";
          HS8.textContent = cargos[i].HS8.nome + ":";
        }
        
      }
    })
}

escolherCargo.addEventListener('change', function(){
  mudarHardSkills(escolherCargo.value);
});