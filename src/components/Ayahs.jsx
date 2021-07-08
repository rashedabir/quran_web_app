import React from "react";
import ReactAudioPlayer from "react-audio-player";

function Ayahs({ ayahs }) {
  return (
    <>
      <div className="col-lg-6 mb-5">
        <ReactAudioPlayer src={ayahs.audio} controls />
      </div>
      <div className="col-lg-6 mb-5 text-end">
        <h2 className="fw-bold">{ayahs.text}</h2>
      </div>
    </>
  );
}

export default Ayahs;
