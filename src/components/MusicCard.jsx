import coolio from "../assets/coolio.mp3";
import { useRef } from "react";
import Model from "./Model";
const MusicCard = ({ jsonData }) => {
  // console.log(jsonData);

  return (
    <div className="col mt-2 mb-3 p-5">
      <div className="card">
        <img
          src={jsonData.image}
          className="card-img-top"
          alt="..."
          style={{ height: "20rem" }}
        />
        <div className="card-body">
          <h5 className="card-title">{jsonData.title}</h5>

          <p className="card-text">{jsonData.description}</p>
          {/* just button here add to playlist */}
          <div className="d-flex justify-content-center">
            <Model jsonData={jsonData} />
          </div>

          {/* just button here add to playlist */}

          {/* Audio */}
          <audio controls style={{ width: "100%" }}>
            <source src={jsonData.url} type="audio/mpeg" />
          </audio>
          {/* Audio  */}
        </div>
      </div>
    </div>
  );
};

export default MusicCard;
