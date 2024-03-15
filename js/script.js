const ficha = document.getElementById("ficha");
const botaoFechar = document.querySelector("#botaoFechar");
const botaoAdicionar = document.querySelector("#botaoAdicionar");


botaoFechar.addEventListener("click", function(){

  ficha.style.display = "none";
  botaoAdicionar.style.display = "inline";

});


botaoAdicionar.addEventListener("click", function(){

  ficha.style.display = "block";
  botaoAdicionar.style.display = "none";
});


/* --- INPUT NOME E CARGO */
/* --- INPUT NOME --- */
const nome = document.getElementById('nome');
const inputNome = document.getElementById('inputNome');

/* --- INPUT CARGO --- */
const cargo = document.getElementById('cargo');
const inputCargo = document.getElementById('inputCargo');


/* --- ALTERA O NOME BASEADO NO INPUT --- */
inputNome.addEventListener('keypress', function(e) {

  if (e.key === ' '){
    e.preventDefault();
  }

  if (event.key === 'Enter') {
    if(inputNome.value == ""){
      nome.textContent = "-----";
    } else{
      nome.textContent = inputNome.value;
    }

  }
});

/* --- ALTERA O CARGO BASEADO NO INPUT --- */
inputCargo.addEventListener('keypress', function(e) {

  if (e.key === ' '){
    e.preventDefault();
  }

  if (event.key === 'Enter') {
    if(inputCargo.value == ""){
      cargo.textContent = "-----";
    } else{
      cargo.textContent = inputCargo.value;
    }

    if (inputCargo.value === "Desenvolvedor" || inputCargo.value === "desenvolvedor") {
      for (var i = 0; i < hardSkills.length; i++) {
        hardSkills[i].innerHTML = skillsDesenvolvedor[i] + ":";
      }
    }
    else if (inputCargo.value === "Design" || inputCargo.value === "design") {
      for (var i = 0; i < hardSkills.length; i++) {
        hardSkills[i].innerHTML = skillsDesign[i] + ":";
      }
    }
    else if (inputCargo.value === "Médico" || inputCargo.value === "médico") {
      for (var i = 0; i < hardSkills.length; i++) {
        hardSkills[i].innerHTML = skillsMedico[i] + ":";
      }
    }
    else {
      for (var i = 0; i < hardSkills.length; i++) {
        hardSkills[i].innerHTML = "HardSkill " + (i + 1) + ":";
      }
    }
  }
});

/* --- INPUT DE FOTO */
const inputFile =
document.querySelector('#picture__input');
const pictureImage =
document.querySelector('.picture__image');
const pictureImageTxt = "FOTO";
pictureImage.innerHTML = pictureImageTxt;


inputFile.addEventListener('change', function(e){
  const inputTarget = e.target;
  console.log(inputTarget);
  const file = inputTarget.files[0];
  console.log(file);


  if(file){
    const reader = new FileReader();

    reader.addEventListener('load', function(e){
      const readerTarget = e.target;

      const img = document.createElement('img');
      img.src = readerTarget.result;
      img.classList.add('picture__img');
      pictureImage.innerHTML = "";

      pictureImage.appendChild(img);
    });
    reader.readAsDataURL(file);
  } else{
      pictureImage.innerHTML = pictureImageTxt;
    }
});

const inputVs = document.getElementsByClassName('valorSoftSkill');
const softGrafico = document.getElementsByClassName("softGrafico");

/* --- TODOS OS GRAFICOS COMEÇAM NO 0 --- */
for (var i = 0; i < inputVs.length; i++) {
  softGrafico[i].style.width = inputVs[i].value * 28.88 + "px";
}

/* --- MUDA O TAMANHO DO GRAFICO BASEADO NO VALOR DO INPUT --- */
for (let i = 0; i < inputVs.length; i++) {
  inputVs[i].addEventListener('input', function(){

      softGrafico[i].style.width = inputVs[i].value * 28.88 + "px";

  });
}

for (var i = 0; i < inputVs.length; i++) {
  inputVs[i].addEventListener('keypress', function(e){
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

/* --- HARD SKILLS --- */
const hardSkills = document.getElementsByClassName("hardSkills");

const skillsDesenvolvedor = ["dev1", "dev2", "dev3", "dev4", "dev5", "dev6", "dev7", "dev8"];
const skillsDesign = ["des1", "des2", "des3", "des4", "des5", "des6", "des7", "des8"];
const skillsMedico = ["med1", "med2", "med3", "med4", "med5", "med6", "med7", "med8"];


/* --- HARD SKILLS GRAFICO --- */

const inputHs = document.getElementsByClassName('valorHardSkill');
const hardGrafico = document.getElementsByClassName("hardGrafico");

for (var i = 0; i < inputHs.length; i++) {
  hardGrafico[i].style.width = inputHs[i].value * 28.88 + "px";
}

for (let i = 0; i < inputHs.length; i++) {
  inputHs[i].addEventListener('input', function(){

      hardGrafico[i].style.width = inputHs[i].value * 28.88 + "px";

  });
}
