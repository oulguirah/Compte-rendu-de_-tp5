const parent = document.getElementById('container');
const reference = document.getElementById('bloc');

// Création du h2
const nouveauTitre = document.createElement('h2');
nouveauTitre.textContent = "Section ajoutée";

// Insertion avant le bloc
parent.insertBefore(nouveauTitre, reference);