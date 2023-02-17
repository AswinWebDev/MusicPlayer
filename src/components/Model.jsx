import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPlaylist, updatePlaylist, addCurrent } from "../store";
const Model = ({ jsonData }) => {
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
  // console.log(currentPlaylist);
  ///////////---Current Playlist state------/////////
  // console.log("jsonData:", jsonData);
  // console.log("playlistObj:", playlistObj);
  /////////////////////////////////
  const handleClick = (mov) => {
    const updatedData = [...mov.data, currentPlaylist];
    dispatch(updatePlaylist({ name: mov.name, data: updatedData }));
    // console.log(allPlaylist);
  };
  /////////////////////////////////

  const renderedPlaylist = allPlaylist.map((mov) => {
    return (
      <div
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
      {/* <!-- Button trigger modal --> */}
      <button
        type="button"
        className="btn btn-primary px-5 "
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
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
