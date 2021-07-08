import React from "react";
import { useDispatch } from "react-redux";
import { viewSurah } from "../actions/surahActions";
import { Link } from "react-router-dom";

function SurahCard({ surah, bd }) {
  const { number, englishName, englishNameTranslation, name } = surah;
  const dispatch = useDispatch();

  const setSurahDetail = () => {
    dispatch(viewSurah(surah));
  };
  return (
    <div className="col-sm-3 mb-3" onClick={setSurahDetail}>
      <Link to={`/surah/${number}`}>
        <div className="card bg-light">
          <div className="card-body">
            <h5 className="card-title">
              <span className="badge bg-primary">{number}</span> {englishName}
            </h5>
            <div className="d-flex justify-content-between">
              <p className="card-text">{englishNameTranslation}</p>
              <h4> {name} </h4>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default SurahCard;
