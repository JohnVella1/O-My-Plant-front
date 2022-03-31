import ReactPlayer from "react-player/youtube";
import "./style.scss";

const PresVideo = () => (
  <section className="pres-video">
    <h1>Découvrir O’My Plant</h1>
    <div className="player-video">
      <ReactPlayer
        url="https://www.youtube.com/watch?v=qah998oSUoA"
        width="65vw"
        height="45vh"
      />
    </div>
  </section>
);

export default PresVideo;
