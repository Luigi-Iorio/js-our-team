"use strict";

// array info membri del team
const membriTeam = [
  {
    nomeCognome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "wayne-barnett-founder-ceo.jpg",
  },
  {
    nomeCognome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg",
  },
  {
    nomeCognome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg",
  },
  {
    nomeCognome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg",
  },
  {
    nomeCognome: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg",
  },
  {
    nomeCognome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg",
  },
];

// container nel dom
const container = document.querySelector(".container");

// stampa in console info x ogni membro del team
for (let i = 0; i < membriTeam.length; i++) {
  const membro = membriTeam[i];
  console.log(
    `Il nome e cognome del ${i + 1}ˆ membro del team è: ${membro.nomeCognome}`
  );
  console.log(`Il ruolo del ${i + 1}ˆ membro del team è: ${membro.ruolo}`);
  console.log(`L'immagine del ${i + 1}ˆ membro del team è: ${membro.foto}`);
  // divisore
  console.log("-----------");

  // elementi nel dom
  // - card
  const card = document.createElement("div");
  card.classList.add("card");
  container.append(card);
  // -- foto
  const img = document.createElement("div");
  const text = document.createElement("p");
  img.classList.add("foto");
  text.innerHTML = `${membro.foto}`;
  img.append(text);
  card.append(img);
  // -- nome e cognome
  const nome = document.createElement("h3");
  nome.classList.add("nome");
  nome.innerHTML = `${membro.nomeCognome}`;
  card.append(nome);
  // -- ruolo
  const ruolo = document.createElement("p");
  ruolo.classList.add("ruolo");
  ruolo.innerHTML = `${membro.ruolo}`;
  card.append(ruolo);
}
