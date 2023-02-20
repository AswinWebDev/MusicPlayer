import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import { ToastContainer, toast } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import MusicList from "./components/MusicList.jsx";
import { json } from "./components/jsonData.js";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import PlaylistPage from "./pages/PlaylistPage.jsx";
import { useEffect, useState } from "react";
const App = () => {
  /////////////search field////////////////////
  const [jsonData, setJsonData] = useState(json);
  const [searchField, setSearchField] = useState("");
  const searchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };
  useEffect(() => {
    const tempFilteredJson = json.filter((mov) => {
      const str = mov.title.toLowerCase();
      const temp = str.replace(/\s+|-/g, "");
      return temp.includes(searchField);
    });
    setJsonData(tempFilteredJson);
  }, [searchField]);
  /////////////search field////////////////////

  ////////////Param search//////////////////////
  // const params = useParams();
  // const [paramState, setParamState] = useState();
  // useEffect(() => {
  //   setParamState(params.id);
  //   // console.log(params.id);
  // }, [paramState]);
  ////////////Param search//////////////////////

  return (
    <div className="bg-black">
      <Navbar onChangeHandler={searchChange} />
      <Routes>
        <Route path="/" element={<MusicList json={jsonData} />} />;
        <Route path="/playlist/:id" element={<PlaylistPage />} />
      </Routes>
    </div>
  );
};
export default App;
