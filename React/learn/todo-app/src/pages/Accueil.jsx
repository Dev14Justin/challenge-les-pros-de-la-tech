import React, { useState, useEffect } from "react";

function Accueil() {
  const [taches, setTaches] = useState(() => {
    // Charger depuis localStorage
    const saved = localStorage.getItem("taches");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");

  // Sauvegarder automatiquement dans localStorage
  useEffect(() => {
    localStorage.setItem("taches", JSON.stringify(taches));
  }, [taches]);

  // Ajouter une tâche
  const ajouterTache = () => {
    if (input.trim() === "") return;
    setTaches([...taches, { id: Date.now(), texte: input, fini: false }]);
    setInput("");
  };

  // Supprimer une tâche
  const supprimerTache = (id) => {
    setTaches(taches.filter(t => t.id !== id));
  };

  // Cocher une tâche
  const toggleTache = (id) => {
    setTaches(
      taches.map(t => t.id === id ? { ...t, fini: !t.fini } : t)
    );
  };

  return (
    <div>
      <h1>Ma liste de tâches 📝</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ajouter une tâche..."
      />
      <button onClick={ajouterTache}>Ajouter</button>

      <ul>
        {taches.map(t => (
          <li key={t.id}>
            <span
              style={{ textDecoration: t.fini ? "line-through" : "none" }}
              onClick={() => toggleTache(t.id)}
            >
              {t.texte}
            </span>
            <button onClick={() => supprimerTache(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Accueil;
