import { createContext, useState } from "react";

export const FavoritesContext = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});

export default function FavoritesContextProvider({ children }) {
  const [favouriteMealIds, setFavouriteMealIds] = useState([]);
  function addFavourite(id) {
    setFavouriteMealIds((prevState) => [...prevState, id]);
  }

  function removeFavourite(id) {
    setFavouriteMealIds((prevState) => prevState.filter((x) => x !== id));
  }

  const value = {
    ids: favouriteMealIds,
    addFavourite,
    removeFavourite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
}
