const bloc = document.getElementById('bloc');
const premierPara = bloc.querySelector('.para');

if (premierPara) {
    premierPara.remove();
    
    // Vérification dans la console
    const nbRestants = bloc.querySelectorAll('.para').length;
    console.log("Nombre de paragraphes restants dans le bloc : " + nbRestants);
}