// 1. Création
const nouveauP = document.createElement('p');

// 2. Personnalisation
nouveauP.textContent = "Paragraphe ajouté dynamiquement";
nouveauP.classList.add('para');

// 3. Insertion
const zoneAjout = document.getElementById('zone-ajout');
zoneAjout.appendChild(nouveauP);