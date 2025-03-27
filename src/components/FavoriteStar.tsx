"use client";

import { StarIcon } from "@heroicons/react/24/solid"; // Star icon import
import { useEffect, useRef, useState } from "react";

type FavoriteButtonProps = {
  projectId: string; // The project ID passed to the component
};

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ projectId: ID }) => {
  // State to hold the list of favorite project IDs
  const [storedFavorites, setStoredFavorites] = useState<number[]>([]);

  // useRef to track the first render, to avoid setting localStorage on the first render
  const isFirstRender = useRef(true);

  console.log(storedFavorites); // Log the current favorites (for debugging)

  const projectId = +ID; // Convert projectId to number
  const isFavorite = storedFavorites.includes(projectId); // Check if the current project is in favorites

  // useEffect to load favorites from localStorage on the first render
  useEffect(() => {
    setStoredFavorites(JSON.parse(localStorage.getItem("favorites") || "[]"));
  }, []);

  // useEffect to update localStorage whenever the favorites list changes
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false; // Skip the effect on the first render
      return;
    }
    // Save updated favorites to localStorage
    localStorage.setItem("favorites", JSON.stringify(storedFavorites));
  }, [storedFavorites]);

  // Function to toggle the favorite status of a project
  const toggleFavorite = () => {
    setStoredFavorites((prev) => {
      // If the project is already in favorites, remove it
      if (prev.includes(projectId)) {
        return [...prev.filter((id) => id !== projectId)];
      }
      // If the project is not in favorites, add it
      return [...prev, projectId];
    });
  };

  return (
    <div
      className="mt-4 flex justify-end select-none"
      role="button"
      aria-label="Toggle favorite"
    >
      <StarIcon
        className={`h-6 w-6 cursor-pointer ${
          isFavorite ? "text-yellow-500" : "text-gray-400"
        }`}
        onClick={toggleFavorite} // Toggle favorite on click
      />
    </div>
  );
};

export default FavoriteButton;
