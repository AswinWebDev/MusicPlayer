import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import MusicList from "./components/MusicList.jsx";
import { json } from "./components/jsonData.js";
// import "./App.css";
import Navbar from "./components/Navbar.jsx";
const App = () => {
  return (
    <div>
      <Navbar />
      <MusicList json={json} />;
    </div>
  );
};
export default App;
