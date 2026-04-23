// 1. Sélection des parents et références
const container = document.getElementById('container');
const blocReference = document.getElementById('bloc');

// 2. Création du titre
const nouveauTitre = document.createElement('h2');
nouveauTitre.textContent = "Section ajoutée";

// 3. Insertion précise
container.insertBefore(nouveauTitre, blocReference);