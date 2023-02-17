import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

const PlaylistPage = () => {
  /////---Finding specific playlist data -----////////
  const params = useParams();
  const allPlaylist = useSelector((state) => {
    return state.playlist;
  });
  //   console.log(allPlaylist);
  const findObjWithName = allPlaylist.filter((mov) => {
    return mov.name === params.id;
  })[0].data;
  console.log(findObjWithName);
  /////---Audio ref -----////////
  const [counter, setCounter] = useState(0);
  const audioRefs = useRef(findObjWithName.map(() => null));
  const [currentTrack, setCurrentTrack] = useState(null);

  console.log(audioRefs);
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
    if (counter === 4 && currentTrack !== null) {
      const nextTrack = (currentTrack + 1) % findObjWithName.length;
      audioRefs.current[currentTrack].pause();
      setCurrentTrack(nextTrack);
      setCounter(0);
    }
  }, [counter]);
  ///////--changing track after s seconds-----////////
  const renderedData = findObjWithName.map((mov, index) => {
    return (
      <ul class="list-group">
        <li class="list-group-item d-flex">
          <button
            className="btn btn-primary"
            onClick={() => {
              handleTrackClick(index);
            }}
          >
            {currentTrack === index ? "Pause" : "Play"}
          </button>
          <div>{mov.title}</div>
          <audio
            ref={(el) => {
              audioRefs.current[index] = el;
            }}
            controls
            style={{ width: "100%" }}
          >
            <source src={mov.url} type="audio/mpeg" />
          </audio>
        </li>
      </ul>
    );
  });
  //   console.log(renderedData);
  /////---Finding specific playlist data -----////////
  return (
    <div>
      <div>{params.id}</div>
      {renderedData}
    </div>
  );
};

export default PlaylistPage;
