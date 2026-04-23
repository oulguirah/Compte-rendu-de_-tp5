/**
 * Génère une liste UL à partir d'un tableau et l'ajoute à la zone d'ajout
 * @param {string[]} items 
 */
function genererListe(items) {
    const zone = document.getElementById('zone-ajout');
    
    // Création du parent UL
    const listeUl = document.createElement('ul');

    // Boucle sur le tableau pour créer chaque LI
    items.forEach(texte => {
        const itemLi = document.createElement('li');
        itemLi.textContent = texte;
        listeUl.appendChild(itemLi); // On attache le LI au UL
    });

    // Enfin, on attache le UL complet au DOM
    zone.appendChild(listeUl);
}

// Test de la fonction
genererListe(["Element 1", "Element 2", "Element 3", "Element 4"]);