import axios from "axios";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSurahs } from "../actions/surahActions";
import SurahCard from "./SurahCard";

function SurahHome() {
  const surah = useSelector((state) => state.surahs.surahs);
  const dispatch = useDispatch();

  useEffect(() => {
    const getQuran = async () => {
      const res = await axios.get(
        "http://api.alquran.cloud/v1/quran/ar.alafasy"
      );
      dispatch(setSurahs(res.data.data.surahs));
    };
    getQuran();
  }, [dispatch]);


  return (
    <div className="container surahs py-5">
      <div class="row">
        {surah && surah.map((surah) => <SurahCard surah={surah} />)}
      </div>
    </div>
  );
}

export default SurahHome;
