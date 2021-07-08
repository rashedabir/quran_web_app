import { SET_SURAH, VIEW_SURAH } from "../contexts/quranContext";

const initialState = {
  surahs: [],
  surahDetail: []
};

export const surahReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SURAH:
      return {
        ...state,
        surahs: action.payload,
      };
    
    case VIEW_SURAH:
      return{
        ...state,
        surahDetail: action.payload
      }

    default:
      return state;
  }
};

