import React,{createContext,useState} from "react";

export const FavoritesContext = createContext();
export const FavoritesProvider = ({children}) => {
  const [favorites,setFavorites] = useState([]);
  const addToFavorites = (course) => {
    setFavorites((prev) =>[...prev,course]);
  };
  const removeFromFavorites = (id) =>{
    setFavorites((prev) => prev.filter(course => course.id !== id));
  };
  const isFavorites = (id) => {
    return favorites.some(course => course.id === id)
  }
  return(
    <FavoritesContext.Provider value={{favorites,addToFavorites,removeFromFavorites,isFavorites}}>
      {children}
    </FavoritesContext.Provider>
  );
};