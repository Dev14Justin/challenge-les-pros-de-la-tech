
function calculerAge() {
    const input = document.getElementById("birthdate");
    const result = document.getElementById("result");
    const birthDate = new Date(input.value);

    if (!input.value) {
        result.textContent = "Veuillez entrer votre date de naissance.";
        document.body.style.backgroundColor = "#fff";
        return;
    }

    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();

    // Corriger l’âge si l’anniversaire n’est pas encore passé cette année
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    result.textContent = `Vous avez ${age} ans.`;

    // BONUS : changer la couleur de fond selon l'âge
    if (age < 18) {
        document.body.style.backgroundColor = "#ffcccc"; // rouge clair
    } else {
        document.body.style.backgroundColor = "#ccffcc"; // vert clair
    }
}