const inputNome = document.querySelector("#inputNome");
const inputSenha = document.querySelector("#inputSenha");
const botaoEntrar = document.querySelector("#botaoEntrar");
const divErro = document.querySelector("#erro");
const html = document.querySelector("html");

botaoEntrar.addEventListener("click", function(){
  /*html.classList.toggle("light-mode");*/
  if(inputNome.value == ""){
    divErro.innerHTML = "ERRO: Campo login está vazio";

  }
  else if (inputSenha.value == "") {
    divErro.innerHTML = "ERRO: Campo senha está vazio";
  } else {
    divErro.innerHTML = "";
  }
});
