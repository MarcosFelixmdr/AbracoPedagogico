import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import FeedPage from "./pages/FeedPage";
import LibraryPage from "./pages/LibraryPage";
import SupportPage from "./pages/SupportPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/comunidade" element={<FeedPage />} />
          <Route path="/biblioteca" element={<LibraryPage />} />
          <Route path="/acolhimento" element={<SupportPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
