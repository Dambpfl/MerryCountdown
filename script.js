const messages = [
    "UNE BINOUZE TIÈDE !",
    "UN BISCUIT BRÛLÉ FAIT MAISON !",
    "UNE GUIRLANDE QUI CLIGNOTE MAL !",
    "UN T-SHIRT 'JE SUIS MOCHE' !",
    "C'EST VIDE",
    "TU AS GAGNÉ UN DATE AVEC LA MÈRE NOËL !",
    "TU AS GAGNÉ UNE SOIRÉE AVEC LE PÈRE FOUETTARD !",
    "UN SEUL GANT DE BOXE !",
    "LE PARFUM 'BRISE D'ANUS' !",
    "UN ETHYLOTEST !",
    "UNE BOÎTE DE PRÉSERVATIF PHOSPHORESCENT !",
    "LE MANUEL D'UTILISATION D'UNE VOITURE !",
    "UN FER À REPASSER !",
    "UN CAPODASTRE !",
    "UN STYLO !",
    "DE LA POMMADE !",
    "UNE PLANCHE A PAIN !",
    "UNE FOURCHETTE !",
    "UN ENTONNOIR !",
    "UNE BROSSE À CHIOTTE !",
    "UN NAIN DE JARDIN !",
    "UNE PAIRE DE TESTICULES ANTI-STRESS !",
    "UN GANT DE TOILETTE !",
    "UN MAXI COCHON D'INDE EN PELUCHE !"
];


const board = document.querySelector("#board")

function lesCadeaux(){
    for (let i = 1; i <= 24; i++) {           // CREE 24 CADEAUX
        const cadeaux = document.createElement("div")  // UNE DIV 
        cadeaux.classList.add("cadeaux") // CLASS CADEAUX

        cadeaux.textContent = i;  // AFFICHE LE NB DE CADEAUX
        board.appendChild(cadeaux) // DIV CADEAUX DANS ID BOARD
    
        cadeaux.addEventListener("click", function() { 
            if (popupOuvert || cadeaux.classList.contains("ouvert")) {
                return; // PAS POSSIBLE DE CLICK SI "POPUP" OUVERT OU SI "CADEAUX" OUVERT
            } else {
                cadeaux.classList.toggle("clicked"); // INTERRUPTEUR OUVERT/FERMER DE "CADEAUX"
                cadeaux.classList.add("ouvert"); // AJOUTE UNE CLASS "OUVERT" au "CADEAUX" (DIT QUE LE "CADEAUX" EST OUVERT)

                const randomMessage = getRandomMessage();  // CREE "randomMessage" à partir de la fonction qui utilise "messages"
                afficherPopup(randomMessage);
            }
            

        })
    }
}

lesCadeaux()

// POP UP //
const popup = document.getElementById("popup");
const popupMessage = document.getElementById("popupMessage");
const btnClose = document.getElementById("btnClose"); 

let popupOuvert = false; // CREE VARIABLE POPUPOUVERT INITIALEMENT FERMER

function afficherPopup(message) {
    if (message) {
        popup.style.display = "flex"; // AFFICHE POPUP
        popupMessage.innerHTML = "SURPRISE ! <br><br>" + message;
        popupOuvert = true // INDIQUE POPUP OUVERT
    } else {
        popup.style.display = "none"; // POPUP DISPARAIT
        popupOuvert = false; // INDIQUE POPUP FERMER
    }
}

// BOUTON FERMER DANS POPUP
btnClose.addEventListener("click", function() {
    afficherPopup() // IF POPUP (vide) = fermer
})


// MESSAGE ALEATOIRE //
function getRandomMessage() {
    const messagesTableau = Math.floor(Math.random() * messages.length); // MULTIPLIE L'ALEATOIRE PAR MON TABLEAU "MESSAGES"
    const mess = messages[messagesTableau]; // MESS = MESSAGES[ALEATOIRE*TABLEAU] (1 MESSAGE ALEATOIRE PARMIS LE TABLEAU DE MESSAGES)

    messages.splice(messagesTableau, 1); // SUPPRIME 1 ELEMENT DU TABLEAU "MESSAGES"

    return mess; // RETOURNE 1 MESSAGE ALEATOIRE
}