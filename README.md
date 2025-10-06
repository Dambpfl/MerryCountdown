# 🎄 Calendrier de l'Avent Interactif

Un calendrier de l'Avent numérique humoristique et interactif développé en HTML, CSS et JavaScript vanilla.

![Calendrier de l'Avent](img/background-christmas.png)

## 📋 Description

Ce projet présente un calendrier de l'Avent digital avec 24 cases à ouvrir dans l'ordre chronologique. Chaque case révèle un "cadeau" surprenant (souvent humoristique) dans une popup interactive. Le calendrier conserve l'état d'ouverture des cases grâce au localStorage.

## ✨ Fonctionnalités

- **24 cases numérotées** à ouvrir dans l'ordre
- **Ouverture séquentielle** : impossible d'ouvrir une case sans avoir ouvert la précédente
- **Messages humoristiques** cachés dans chaque case
- **Sauvegarde automatique** de l'état dans le localStorage
- **Design responsive** avec différentes tailles de cases
- **Thèmes visuels variés** avec 5 motifs de Noël différents
- **Bouton de mélange** pour réinitialiser le calendrier
- **Popup élégante** pour afficher les surprises
- **Animation et transitions** fluides

## 🚀 Installation et Utilisation

### Prérequis
- Un navigateur web moderne
- Un serveur web local (optionnel mais recommandé)

### Installation
1. Clonez ou téléchargez ce repository
2. Placez les fichiers dans votre serveur web local (ex: Laragon, XAMPP, etc.)
3. Ouvrez `index.html` dans votre navigateur

### Utilisation
1. Ouvrez le calendrier dans votre navigateur
2. Cliquez sur la case n°1 pour commencer
3. Ouvrez les cases dans l'ordre chronologique (1, 2, 3...)
4. Profitez des surprises humoristiques !
5. Utilisez le bouton "Mélanger" pour recommencer

## 🛠️ Structure du Projet

```
Calendrier/
├── index.html          # Structure HTML principale
├── script.js           # Logique JavaScript
├── style.css           # Styles et mise en page
├── README.md           # Documentation du projet
└── img/                # Assets visuels
    ├── background-christmas.png
    ├── christmas-pattern.jpg
    ├── christmas-pattern-2.png
    ├── christmas-pattern-3.png
    ├── christmas-pattern-4.png
    └── christmas-pattern-5.png
```

## 🎨 Technologies Utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles, animations et responsive design
- **JavaScript ES6+** - Logique interactive
- **LocalStorage** - Persistance des données
- **Google Fonts** - Police "Mountains of Christmas"
- **RemixIcon** - Icônes (bouton fermer)

## 🎮 Fonctionnalités Techniques

### Gestion des Cases
- Génération dynamique de 24 cases
- Attribution aléatoire des messages et styles
- Classes CSS pour différentes tailles (`size-sm`, `size-lg`)
- 5 thèmes visuels différents (`ver1` à `ver5`)

### Système de Sauvegarde
- Sauvegarde automatique dans le localStorage
- Restauration de l'état au rechargement
- Réattachement des event listeners après restauration

### Logique d'Ouverture
- Vérification de l'ordre d'ouverture
- Gestion des états (ouvert/fermé)
- Messages d'erreur pour ouverture désordonnée

## 🎄 Personnalisation

### Modifier les Messages
Editez le tableau `messages` dans `script.js` :
```javascript
const messages = [
    "VOTRE NOUVEAU MESSAGE !",
    // ... autres messages
];
```

### Ajouter des Thèmes Visuels
1. Ajoutez une nouvelle classe dans `style.css`
2. Incluez le nouveau thème dans `caseVersions` dans `script.js`

### Changer le Nombre de Cases
Modifiez l'attribut `data-cases` dans `index.html` :
```html
<div data-cases="12" id="moncalendrier" class="calendar-board">
```

## 🎁 Messages Inclus

Le calendrier contient 24 messages humoristiques variés, allant de cadeaux insolites à des situations cocasses. Parfait pour apporter de la bonne humeur pendant la période de l'Avent !
