import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Historique from "./pages/Historique";

function App() {
  return (
    <BrowserRouter>
      <nav className="bg-blue-600 p-4 flex gap-4 text-white shadow-md">
        <Link to="/" className="hover:text-yellow-300">Accueil</Link>
        <Link to="/historique" className="hover:text-yellow-300">Historique</Link>
      </nav>

      <div className="p-6 max-w-2xl mx-auto">
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/historique" element={<Historique />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
