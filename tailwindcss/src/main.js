
const slider = document.getElementById("slider");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let index = 0;
const total = slider.children.length;

function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

nextBtn.addEventListener("click", () => {
    index = (index + 1) % total; // boucle infinie
    updateSlider();
});

prevBtn.addEventListener("click", () => {
    index = (index - 1 + total) % total;
    updateSlider();
});

// Fonction pour gérer l'affichage des réponses FAQ
function toggleFAQ(index) {
    const answer = document.getElementById(`answer-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    if (answer.classList.contains("max-h-0")) {
        answer.classList.remove("max-h-0");
        answer.classList.add("max-h-[300px]"); // hauteur max animée
        icon.textContent = "−"; // change l’icône en -
    } else {
        answer.classList.add("max-h-0");
        answer.classList.remove("max-h-[300px]");
        icon.textContent = "+"; // remet l’icône en +
    }
}



// Filtrage par catégorie
function filterGallery(category) {
    const items = document.querySelectorAll("#gallery > div");
    items.forEach(item => {
        if (category === "all" || item.dataset.category === category) {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
    });
}

// Ouvrir la modale
function openModal(img) {
    document.getElementById("modal").classList.remove("hidden");
    document.getElementById("modal").classList.add("flex");
    document.getElementById("modal-img").src = img.src;
}

// Fermer la modale
function closeModal() {
    document.getElementById("modal").classList.add("hidden");
    document.getElementById("modal").classList.remove("flex");
}