import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Ayahs from "./Ayahs";

function SurahDetail() {
  const state = useSelector((state) => state.surahs.surahDetail);
  const history = useHistory();


  return (
    <div className="container py-5">
      <div className="mb-5 d-flex justify-content-between align-items-center">
        <div>
          <h3>Surah: {state.englishName}</h3>
          <h5>{state.englishNameTranslation}</h5>
        </div>
        <div>
          <h2>{state.name}</h2>
        </div>
      </div>
      <div className="row">
        {Object.keys(state).length > 0
          ? state.ayahs.map((ayahs) => <Ayahs ayahs={ayahs} />)
          : history.push("/")}
      </div>
    </div>
  );
}

export default SurahDetail;
