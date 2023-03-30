import { FAVOURİTE_ADD, FAVOURİTE_DELETE } from "../actions/action";

const initialFavMovies = {
  favMovies: JSON.parse(localStorage.getItem("favMovies")) || [],
};

export function reducer(state = initialFavMovies, action) {
  switch (action.type) {
    case FAVOURİTE_ADD: {
      return {
        ...state,
        favMovies: [...state.favMovies, action.payload],
      };
    }
    case FAVOURİTE_DELETE: {
      return {
        ...state,
        favMovies: state.favMovies.filter((item) => item.id !== action.payload),
      };
    }
    default:
      return state;
  }
}