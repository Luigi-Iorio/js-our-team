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
}
