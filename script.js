const messages = [
    "UNE BINOUZE TIÈDE !",
    "UN BISCUIT BRÛLÉ FAIT MAISON !",
    "UNE GUIRLANDE QUI CLIGNOTE MAL !",
    "UN T-SHIRT 'JE SUIS MOCHE' !",
    "C'EST VIDE",
    "TU AS GAGNÉ UN DATE AVEC LA MÈRE NOËL !",
    "TU AS GAGNÉ UNE SOIRÉE SADOMASOCHISME AVEC LE PÈRE FOUETTARD !",
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
    "UN MAXI COCHON D'INDE EN PELUCHE !",
];

const caseVersions = ['ver1', 'ver2', 'ver3', 'ver4', 'ver5'];
const caseSizes = ['size-sm', 'size-lg', 'size-sm', 'size-sm']; // on duplique les petites cases pour qu'elles soient plus fréquentes
let DAY_IN_CALENDAR = 24;

let boardId = document.body.dataset.board;
const board = document.querySelector(boardId);
if (board) {
    DAY_IN_CALENDAR = board.dataset.cases || DAY_IN_CALENDAR;
} else {
    alert("Le calendrier n'est pas initialisé");
}


function initCalendrier() {
    // get the calendar from the local storage
    const calendarFromStorage = getCalendarFromLocalStorage();
    if (calendarFromStorage !== undefined) {
        board.innerHTML = calendarFromStorage;
        // je veux ajouter mes event listeners sur les cases parce que ils disparaissent dans le local storage
        // selectionner tous les elements .cadeaux dans board
        const calendrierCases = board.querySelectorAll('.cadeaux');

        calendrierCases.forEach(function (maCase) {
            maCase.addEventListener("click", function () {
                handleClickOnCase(maCase);
            });
        })
        return;// fin de la fonction on a deja le html
    }

    board.innerHTML = ""; // VIDE LE BOARD, si jamais il y a déjà des éléments dedans
    let cadeauxTmp = [...messages]; // COPIE DU TABLEAU "MESSAGES"
    for (let i = 1; i <= DAY_IN_CALENDAR; i++) { // on utilise une taille de calendar fixe
        // on utilise un for ici parce que ca nous permet d'avoir le numero du "jour"
        const calendrierCase = document.createElement("div");  // UNE DIV
        calendrierCase.setAttribute('id', 'case' + i); // ID "CASE" + VARIABLE I
        let randomIndex = Math.floor(Math.random() * cadeauxTmp.length); // MULTIPLIE L'ALEATOIRE PAR
        let cadeau = cadeauxTmp[randomIndex]; // CADEAU = CADEAUStmp[ALEATOIRE]
        cadeauxTmp.splice(randomIndex, 1); // SUPPRIME 1 ELEMENT DU TABLEAU "CADEAUStmp"
        calendrierCase.dataset.cadeau = cadeau; // AJOUTE UN ATTRIBUT "CADEAU" A "CADEAUX"
        calendrierCase.dataset.value = i; // AJOUTE UN ATTRIBUT "VALUE" A "CADEAUX" (pour le retrouver plus tard)
        // qui permet de stocker le contenu du cadeau dans l'element HTML (pour le retrouver plus tard)
        // ca nous permet de savoir si on a deja ouvert le cadeau ou pas
        calendrierCase.classList.add("cadeaux"); // CLASS CADEAUX

        // créer une version random de la case
        let randomClassIndex = Math.floor(Math.random() * caseVersions.length); // MULTIPLIE L'ALEATOIRE PAR
        let randomClass = caseVersions[randomClassIndex];
        calendrierCase.classList.add(randomClass); // AJOUTE CLASS ALEATOIRE

        // créer une taille random de la case
        let randomSizeIndex = Math.floor(Math.random() * caseSizes.length); // MULTIPLIE L'ALEATOIRE PAR
        let randomSize = caseSizes[randomSizeIndex];
        calendrierCase.classList.add(randomSize); // AJOUTE CLASS ALEATOIRE


        calendrierCase.textContent = i;  // AFFICHE LE NB DE CADEAUX
        board.appendChild(calendrierCase); // on ajoute la DIV CADEAUX DANS ID BOARD

        calendrierCase.addEventListener("click", function () {
            handleClickOnCase(calendrierCase);
        });
    }
    // on finis par mélangé les éléments
    melangeAll();

    saveCalendar();
}

function handleClickOnCase(maCaseRecue) {
    let message = maCaseRecue.dataset.cadeau;
    let value = maCaseRecue.dataset.value;// on recupére une string
    value = parseInt(value); // on force la valeur en int // String => Int
    let previousValue = value - 1; // on get l'index de la case précédente
    if (previousValue !== 0) { // si la previousValue === 0 c'est qu'on essaie d'ouvrir la première case => pas de check
        let previousCaseId = 'case' + previousValue; // on crée l'id de la case précédente
        let previousCase = document.getElementById(previousCaseId); // on get la case précédente
        if (previousCase && !previousCase.classList.contains("case-ouverte")) { // si la case précédente n'est pas ouverte
            afficherPopup("Tu dois ouvrir les cases dans l'ordre !"); // on affiche un message
            return; // on sort de la fonction
        }
    }
    // ici on check juste le status du cadeau pour connaitre le message a afficher
    if (maCaseRecue.classList.contains("case-ouverte")) {
        afficherPopup('Tu as déjà ouvert ce cadeau !' + "<br><br>" + message);
        return; // PAS POSSIBLE DE CLICK SI "POPUP" OUVERT OU SI "CADEAUX" OUVERT
    }
    maCaseRecue.classList.add("case-ouverte"); // AJOUTE CLASS "case-ouverte" A "CADEAUX"
    saveCalendar();
    afficherPopup("Surprise !!!<br><br>" + message);
}

initCalendrier();

// POP UP //
const popup = document.getElementById("popup"); // de base popup est caché puisqu'il a pas la class "show"
const popupMessage = document.getElementById("popupMessage");
const btnClose = document.getElementById("btnClose");

// gere la sauvegarde du calendrier dans le local storage
function saveCalendar() {
    const calendarHtml = board.innerHTML;
    // on le stocke dans le local storage pour pouvoir le recharger plus tard
    localStorage.setItem('calendar', calendarHtml);
}

function getCalendarFromLocalStorage() {
    let calendarHtml = localStorage.getItem('calendar');
    if (calendarHtml) {
        return calendarHtml;
    }
    return undefined;
}

function viderCalendrier() {
    localStorage.removeItem('calendar');
}



function afficherPopup(message) {
    if (message) {
        popup.classList.add("show"); // AJOUTE CLASS "show" A "POPUP"
        popupMessage.innerHTML = message;
    } else {
        popup.classList.remove("show"); // Retire CLASS "show" A "POPUP"
    }
}

// BOUTON FERMER DANS POPUP
btnClose.addEventListener("click", function () {
    afficherPopup(); // IF POPUP (undefined pas vide) = fermer
})


// BOUTON MELANGER //
const btnMelange = document.getElementById("btnMelange");

btnMelange.addEventListener("click", function () {  // AU CLIQUE
    viderCalendrier();
    initCalendrier();
})

function melangeAll() {
    const allElements = Array.from(board.children);

    for (let i = allElements.length - 1; i > 0; i--) {
        const m = Math.floor(Math.random() * (i + 1));

        const temp = allElements[i];
        allElements[i] = allElements[m];
        allElements[m] = temp;
    }

    allElements.forEach(function (cadeau) {
        board.appendChild(cadeau);
    })
}

