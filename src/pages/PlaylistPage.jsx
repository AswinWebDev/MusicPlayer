import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PlaylistPage = () => {
  const notify = () => toast("Playing next track!");
  /////---Finding specific playlist data -----////////
  const params = useParams();

  const allPlaylist = useSelector((state) => {
    return state.playlist;
  });

  const findObjWithName = allPlaylist.filter((mov) => {
    return mov.name === params.id;
  })[0].data;

  /////---Audio ref -----////////
  const [counter, setCounter] = useState(0);
  const audioRefs = useRef(findObjWithName.map(() => null));
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    if (currentTrack !== null) {
      audioRefs.current[currentTrack].play();
    }
  }, [currentTrack]);
  const handleTrackClick = (index) => {
    if (currentTrack !== null) {
      audioRefs.current[currentTrack].pause();
      clearInterval(intervalId.current);
    }
    if (currentTrack === index) {
      setCurrentTrack(null);
      setCounter(0);
    } else {
      setCurrentTrack(index);
      setCounter(0);
      const id = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000);
      intervalId.current = id;
    }
  };
  ///////--changing track after s seconds-----////////
  const intervalId = useRef(null);
  useEffect(() => {
    if (counter === 8 && currentTrack !== null) {
      const nextTrack = (currentTrack + 1) % findObjWithName.length;
      audioRefs.current[currentTrack].pause();
      setCurrentTrack(nextTrack);
      setCounter(0);
      notify();
    }
  }, [counter]);
  ///////--changing track after s seconds-----////////
  const renderedData = findObjWithName.map((mov, index) => {
    return (
      <div
        key={index}
        className="row align-items-center mb-5 bg-info bg-opacity-10 border border-info border-start-0 rounded-end"
      >
        <ToastContainer />
        <div className="col-md">
          <button
            className="btn btn-info px-5 ms-2 me-5"
            onClick={() => {
              console.log(mov);
              handleTrackClick(index);
            }}
          >
            {currentTrack === index ? "Pause" : "Play"}
          </button>
        </div>
        <div className="col-md text-white fs-5">{mov.title}</div>
        <div className="col-md">
          <audio
            ref={(el) => {
              audioRefs.current[index] = el;
            }}
            controls
            style={{ width: "100%" }}
          >
            <source src={mov.url} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    );
  });
  //   console.log(renderedData);
  /////---Finding specific playlist data -----////////
  return (
    <div className="bg-dark p-3">
      <div className="text-white p-2 mb-3 fs-5">Now Playing : {params.id}</div>
      <div className="container">{renderedData}</div>
    </div>
  );
};

export default PlaylistPage;
