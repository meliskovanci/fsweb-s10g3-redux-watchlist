export const FAVOURİTE_ADD = "FAV_ADD";
export const FAVOURİTE_DELETE = "FAV_DELETE";

export const favouriteAdd = (newFav) => ({
  type: FAVOURİTE_ADD,
  payload: newFav,
});

export const favouriteDelete = (id) => ({
  type: FAVOURİTE_DELETE,
  payload: id,
});