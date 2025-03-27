"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { FavoritesContextType } from "../types/FavoritesContextType";

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [storedFavorites, setStoredFavorites] = useState<number[]>([]);
  const isFirstRender = useRef(true);
  useEffect(() => {
    setStoredFavorites(JSON.parse(localStorage.getItem("favorites") || "[]"));
  }, []);
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem("favorites", JSON.stringify(storedFavorites));
  }, [storedFavorites]);

  const toggleFavorite = (projectId: number) => {
    setStoredFavorites((prev) => {
      console.log(prev);
      if (prev.includes(projectId)) {
        return [...prev.filter((id) => id !== projectId)];
      }
      return [...prev, projectId];
    });
  };

  return (
    <FavoritesContext.Provider value={{ storedFavorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
