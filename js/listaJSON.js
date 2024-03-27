function  carregarJSON(){
  fetch("JSON/lista.json")
    .then(response => response.json())
    .then(pessoas => {
      const container = document.querySelector("#container");
      console.log(pessoas[0].nome);
      pessoas.map(pessoa => {
        const nome = document.createElement("h3");
        const cargo = document.createElement("h4");
        const card = document.createElement("div");
        const skills = document.createElement("div");

        const skill1 = document.createElement("span");
        const skill2 = document.createElement("span");
        const skill3 = document.createElement("span");
        const skill4 = document.createElement("span");
        const skill5 = document.createElement("span");
        const skill6 = document.createElement("span");

        const valorSkill1 = document.createElement("p");
        const valorSkill2 = document.createElement("p");
        const valorSkill3 = document.createElement("p");
        const valorSkill4 = document.createElement("p");
        const valorSkill5 = document.createElement("p");
        const valorSkill6 = document.createElement("p");

        container.appendChild(card);
        card.classList.add("card");

        card.appendChild(nome);
        card.appendChild(cargo);

        card.appendChild(skills);
        skills.classList.add("skills");

        skills.appendChild(skill1);
        skill1.id = "skill1";
        skill1.appendChild(valorSkill1);
        valorSkill1.textContent = pessoa.softSkill1;

        skills.appendChild(skill2);
        skill2.id = "skill2";
        skill2.appendChild(valorSkill2);
        valorSkill2.textContent = pessoa.softSkill2;

        skills.appendChild(skill3);
        skill3.id = "skill3";
        skill3.appendChild(valorSkill3);
        valorSkill3.textContent = pessoa.softSkill3;

        skills.appendChild(skill4);
        skill4.id = "skill4";
        skill4.appendChild(valorSkill4);
        valorSkill4.textContent = pessoa.softSkill4;

        skills.appendChild(skill5);
        skill5.id = "skill5";
        skill5.appendChild(valorSkill5);
        valorSkill5.textContent = pessoa.softSkill5;

        skills.appendChild(skill6);
        skill6.id = "skill6";
        skill6.appendChild(valorSkill6);
        valorSkill6.textContent = pessoa.softSkill6;

        nome.textContent = pessoa.nome;
        cargo.textContent = pessoa.cargo;

      })
  
    })
}


carregarJSON();
