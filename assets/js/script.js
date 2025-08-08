function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("collapsed");
}


function chargerPageDansMain(url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      const main = document.getElementById("main-content");

      // On crée un élément temporaire pour parser le HTML injecté
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = data;

      // On extrait les éventuels <script src="..."> pour les charger séparément
      const scripts = tempDiv.querySelectorAll("script[src]");
      scripts.forEach(script => {
        const newScript = document.createElement("script");
        newScript.src = script.src;
        newScript.defer = true; // évite le blocage du rendu
        document.body.appendChild(newScript);
        script.remove(); // évite doublons
      });

      // Injection du HTML SANS ses balises <script>
      main.innerHTML = tempDiv.innerHTML;

      // Appelle l'initialisation des éventuels scripts/événements spécifiques du contenu injecté
      //  initFormValidation();

      activerLiensInternes(); // Réactive les liens internes
    })
    .catch(() => {
      document.getElementById("main-content").innerHTML = "<p>Erreur de chargement</p>";
    });
}



function activerLiensInternes() {
  const liensInternes = document.querySelectorAll("#main-content a[href^='../pages/']");

  liensInternes.forEach(lien => {
    lien.addEventListener("click", function (e) {
      e.preventDefault();
      const href = this.getAttribute("href");
      chargerPageDansMain(href);
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  activerLiensInternes(); // Active les liens internes déjà présents dans le HTML au chargement
});




// Sélectionne tous les liens du menu
const menuLinks = document.querySelectorAll("#menu-list a");

menuLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault(); // Empêche de recharger la page

    // Retire la classe active de tous les liens
    menuLinks.forEach(l => l.classList.remove("active"));

    // Ajoute la classe active au lien cliqué
    this.classList.add("active");

    // Charger le contenu dans <main>
    const page = this.getAttribute("data-page");
    if (page) {
      chargerPageDansMain("pages/" + page);
    
     }
  });
});

