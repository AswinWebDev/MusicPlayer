import MusicCard from "./MusicCard";

const MusicList = ({ json }) => {
  const renderedData = json.map((data) => {
    return <MusicCard key={data.id} jsonData={data} />;
  });
  return (
    <div className="container-md bg-dark pt-4 pb-3 bg-black bg-gradient">
      <div className="row row-cols-1 row-cols-md-3 g-3">{renderedData}</div>
    </div>
  );
};

export default MusicList;
