import { AnnonceContext } from '../context/annonceContext';
import { useContext } from 'react';

// useAnnonceContext is not currently used, in future update

export const useAnnonceContext = () => {

  const context = useContext(AnnonceContext);

  if (context === undefined) {
    throw new Error("DishContext was used outside of its Provider");
  }

  return context;

}