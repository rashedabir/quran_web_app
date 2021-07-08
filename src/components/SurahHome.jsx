import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSurahs } from "../actions/surahActions";
import SurahCard from "./SurahCard";

function SurahHome() {
  const surah = useSelector((state) => state.surahs.surahs);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://api.alquran.cloud/v1/quran/ar.alafasy")
      .then((res) => res.json())
      .then((data) => dispatch(setSurahs(data.data.surahs)));
  }, [dispatch]);

  return (
    <div className="container surahs py-4">
      <div className="mb-5">
        <h2>Surah</h2>
        <p>
          A surah is a chapter of the Quran. There are 114 surahs in the Quran,
          each divided into ayahs. The chapters or surahs are of unequal length;
          the shortest chapter has only three verses while the longest contains
          286 verses. Of the 114 chapters in the Quran, 86 are classified as
          Meccan, while 28 are Medinan.
        </p>
      </div>
      <div class="row">
        {surah && surah.map((surah) => <SurahCard surah={surah} />)}
      </div>
    </div>
  );
}

export default SurahHome;
