import coolio from "../assets/coolio.mp3";
import { useRef } from "react";
const MusicCard = ({ jsonData }) => {
  // console.log(coolio);
  const handleProgressBar = (e) => {
    console.log(e);
  };
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
