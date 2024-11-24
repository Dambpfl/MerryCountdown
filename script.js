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
    "UN FER A REPASSER !",
    "UNE GUITARE !",
    "UN STYLO !",
    "DE LA POMMADE !",
    "UNE PLANCHE A PAIN !",
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
                cadeaux.classList.add("ouvert"); // INDIQUE QUE LE "CADEAUX" EST OUVERT

                const randomMessage = getRandomMessage();  // CREE "randomMessage" à partir de la fonction qui utilise "messages"
                afficherPopup("SURPRISE ! <br><br>" + randomMessage);
            }
            

        })
    }
}

lesCadeaux()

// POP UP //
let popupOuvert = false; // CREE VARIABLE POPUPOUVERT INITIALEMENT FERMER

function afficherPopup(message) {
    const popup = document.getElementById("popup");
    const popupMessage = document.getElementById("popupMessage");
    popup.style.display = "flex"; // AFFICHE POP UP

    popupMessage.innerHTML = message; // POUR UTILISER LE RETOUR A LA LIGNE (plutot que textContent)
    popupOuvert = true; // INDIQUE POPUP OUVERT
    }

    const btnClose = document.getElementById("btnClose"); // AU CLIQUE POPUP NONE
    btnClose.addEventListener("click", function(){
    popup.style.display = "none";
    popupOuvert = false; // INDIQUE POPUP FERMER
})


// MESSAGE ALEATOIRE //
function getRandomMessage() {
    const messagesIndex = Math.floor(Math.random() * messages.length); 
    return messages[messagesIndex]; 
}