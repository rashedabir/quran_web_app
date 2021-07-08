import { SET_SURAH, VIEW_SURAH } from "../contexts/quranContext";

export const setSurahs = (surahs) => {
  return {
    type: SET_SURAH,
    payload: surahs,
  };
};

export const viewSurah = (surah) => {
  return {
    type: VIEW_SURAH,
    payload: surah,
  };
};
