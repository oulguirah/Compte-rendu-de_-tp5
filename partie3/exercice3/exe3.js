// 1. Sélection du bloc parent
const blocPrincipal = document.getElementById('bloc');

// 2. Sélection du premier paragraphe .para à l'intérieur
const premierPara = blocPrincipal.querySelector('.para');

// 3. Suppression si l'élément existe
if (premierPara) {
    premierPara.remove();
}

// 4. Vérification dans la console
const nbParasRestants = blocPrincipal.querySelectorAll('.para').length;
console.log("Nombre de paragraphes restants dans le bloc :", nbParasRestants);