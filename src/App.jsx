import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { Route, Routes } from "react-router-dom";
import MusicList from "./components/MusicList.jsx";
import { json } from "./components/jsonData.js";
// import "./App.css";
import Navbar from "./components/Navbar.jsx";
import PlaylistPage from "./pages/PlaylistPage.jsx";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<MusicList json={json} />} />;
        <Route path="/playlist/:id" element={<PlaylistPage />} />
      </Routes>
    </div>
  );
};
export default App;
