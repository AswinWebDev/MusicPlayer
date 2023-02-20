import { useEffect, useState } from "react";
import { BsFileMusicFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addPlaylist } from "../store";
import { Link } from "react-router-dom";

const Navbar = ({ onChangeHandler }) => {
  const dispatch = useDispatch();

  const [playListName, setPlayListName] = useState("");
  const handleChangeCreatePlaylist = (e) => {
    setPlayListName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addPlaylist({ name: playListName, data: [] }));
    setPlayListName("");
  };
  const allPlaylist = useSelector((state) => {
    return state.playlist;
  });
  ///////////////////////////////////////////////////////
  const renderedPlaylist = allPlaylist.map((mov) => {
    return (
      <li key={mov.name}>
        <Link className="dropdown-item" to={`/playlist/${mov.name}`}>
          {mov.name}
        </Link>
      </li>
    );
  });
  ////////////////////////////////////////////////////////
  ////////////////////////--Form Create Playlist----//////////////////////////
  const formCreatePlaylist = (
    <form onSubmit={handleSubmit}>
      <div className="mb-3 justify-content-center">
        <label className="form-label text-center">New Playlist</label>
        <input
          type="text"
          className="form-control"
          aria-describedby="emailHelp"
          value={playListName}
          onChange={handleChangeCreatePlaylist}
        ></input>
      </div>
      <button type="submit" className="btn btn-dark">
        Submit
      </button>
    </form>
  );
  ////////////////////////--Form CreatePlaylist----//////////////////////////

  ///////////////////////--submit button ---/////////////////////////////////
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  ///////////////////////--submit button ---/////////////////////////////////
  return (
    <nav className="navbar navbar-expand-lg bg-black bg-gradient">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 d-flex flex-row mb-2 text-white">
          <BsFileMusicFill />
          <div className="mx-2 text-white">RhythmiC</div>
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className="nav-link active text-white"
                aria-current="page"
                to={"/"}
              >
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle text-white"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Playlist
              </a>
              <ul className="dropdown-menu">
                {renderedPlaylist}
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <div className="dropdown-item">{formCreatePlaylist}</div>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search" onSubmit={handleFormSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={onChangeHandler}
            />
            <button className="btn btn-outline-dark" type="submit">
              <div className="text-white">Search</div>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
