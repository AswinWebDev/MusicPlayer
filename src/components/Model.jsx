import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPlaylist, updatePlaylist, addCurrent } from "../store";
const Model = ({ jsonData }) => {
  const notify = () => toast("Added to playlist!");
  // const [playlistObj, setPlaylistObj] = useState({ obj: 1 });

  const dispatch = useDispatch();
  ///////////---Playlist state------/////////
  const allPlaylist = useSelector((state) => {
    return state.playlist;
  });
  ///////////---Playlist state------/////////

  ///////////---Current Playlist state------/////////
  const currentPlaylist = useSelector((state) => {
    return state.current;
  });
  ///////////---Current Playlist state------/////////

  ///////////---Update Playlist state------/////////
  const handleClick = (mov) => {
    const updatedData = [...mov.data, currentPlaylist];
    dispatch(updatePlaylist({ name: mov.name, data: updatedData }));
    notify();
  };
  ///////////---Update Playlist state------/////////
  const renderedPlaylist = allPlaylist.map((mov) => {
    return (
      <div
        key={mov.name}
        onClick={() => {
          handleClick(mov);
        }}
      >
        <a href="#" className="list-group-item list-group-item-action">
          {mov.name}
        </a>
        <hr className="divider" />
      </div>
    );
  });
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-dark px-5 "
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={() => {
          dispatch(addCurrent(jsonData));
        }}
      >
        Add to playlist
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Add this song to
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="list-group">{renderedPlaylist}</div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
