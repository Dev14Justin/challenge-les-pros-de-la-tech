
// Tableau de citations inspirantes
const citations = [
    "Le succès n’est pas final, l’échec n’est pas fatal : c’est le courage de continuer qui compte. – Winston Churchill",
    "Croyez en vous et tout sera possible.",
    "Chaque jour est une nouvelle chance de changer ta vie.",
    "Fais de ta vie un rêve, et d’un rêve une réalité. – Antoine de Saint-Exupéry",
    "N’attends pas les opportunités, crée-les.",
    "Ta seule limite, c’est toi-même.",
    "L’échec est simplement l’opportunité de recommencer, mais de manière plus intelligente. – Henry Ford",
    "Le meilleur moyen de prédire l’avenir, c’est de le créer. – Peter Drucker",
    "La motivation vous fait commencer, mais c’est l’habitude qui vous fait continuer.",
    "Rêve grand, travaille dur, reste humble."
];

// Sélecteurs DOM
const quoteText = document.getElementById('quote');
const newQuoteBtn = document.getElementById('new-quote');
const copyBtn = document.getElementById('copy-quote');
const copiedMessage = document.getElementById('copied-message');

// Affiche une citation aléatoire
function afficherCitationAleatoire() {
    const index = Math.floor(Math.random() * citations.length);
    const citation = citations[index];
    quoteText.innerText = citation;
    copiedMessage.style.display = "none";
}

// Événement : clic sur le bouton "Nouvelle citation"
newQuoteBtn.addEventListener('click', afficherCitationAleatoire);

// Événement : clic sur le bouton "Copier"
copyBtn.addEventListener('click', () => {
    const citation = quoteText.innerText;
    navigator.clipboard.writeText(citation)
        .then(() => {
            copiedMessage.style.display = "block";
            setTimeout(() => copiedMessage.style.display = "none", 2000);
        })
        .catch((err) => {
            console.error("Erreur de copie :", err);
            alert("Impossible de copier la citation.");
        });
});




// setTimeout(() => {
//   // Tableau de citations inspirantes
//   const citations = [
//     "Le succès n’est pas final, l’échec n’est pas fatal : c’est le courage de continuer qui compte. – Winston Churchill",
//     "Croyez en vous et tout sera possible.",
//     "Chaque jour est une nouvelle chance de changer ta vie.",
//     "Fais de ta vie un rêve, et d’un rêve une réalité. – Antoine de Saint-Exupéry",
//     "N’attends pas les opportunités, crée-les.",
//     "Ta seule limite, c’est toi-même.",
//     "L’échec est simplement l’opportunité de recommencer, mais de manière plus intelligente. – Henry Ford",
//     "Le meilleur moyen de prédire l’avenir, c’est de le créer. – Peter Drucker",
//     "La motivation vous fait commencer, mais c’est l’habitude qui vous fait continuer.",
//     "Rêve grand, travaille dur, reste humble."
//   ];

//   // Sélecteurs DOM
//   const quoteText = document.getElementById('quote');
//   const newQuoteBtn = document.getElementById('new-quote');
//   const copyBtn = document.getElementById('copy-quote');
//   const copiedMessage = document.getElementById('copied-message');

//   if (!quoteText || !newQuoteBtn || !copyBtn || !copiedMessage) {
//     console.error("⚠️ Les éléments HTML n'ont pas été trouvés. Vérifie si le script est chargé trop tôt.");
//     return;
//   }

//   // Affiche une citation aléatoire
//   function afficherCitationAleatoire() {
//     const index = Math.floor(Math.random() * citations.length);
//     const citation = citations[index];
//     quoteText.innerText = citation;
//     copiedMessage.style.display = "none";
//   }

//   // Événement : clic sur le bouton "Nouvelle citation"
//   newQuoteBtn.addEventListener('click', afficherCitationAleatoire);

//   // Événement : clic sur le bouton "Copier"
//   copyBtn.addEventListener('click', () => {
//     const citation = quoteText.innerText;
//     navigator.clipboard.writeText(citation)
//       .then(() => {
//         copiedMessage.style.display = "block";
//         setTimeout(() => copiedMessage.style.display = "none", 2000);
//       })
//       .catch((err) => {
//         console.error("Erreur de copie :", err);
//         alert("Impossible de copier la citation.");
//       });
//   });
// }, 100); // <- Petit délai pour s'assurer que le DOM injecté est prêt
