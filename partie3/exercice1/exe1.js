// 1. Créer l'élément
const nouveauP = document.createElement('p');

// 2. Définir le texte et la classe
nouveauP.textContent = "Paragraphe ajouté dynamiquement";
nouveauP.classList.add('para');

// 3. Sélectionner la destination et insérer
const zoneAjout = document.getElementById('zone-ajout');
zoneAjout.appendChild(nouveauP);