"use client";

import { useFavorites } from "@/context/FavoritesContext";
import { StarIcon } from "@heroicons/react/24/solid";
import { FavoriteButtonProps } from "../types/FavoriteButtonProps";

const FavoriteButton: React.FC<FavoriteButtonProps> = ({ projectId: ID }) => {
  const { storedFavorites, toggleFavorite } = useFavorites();

  const projectId = +ID;
  const isFavorite = storedFavorites.includes(projectId);

  return (
    <div
      className="mt-4 flex justify-end"
      role="button"
      aria-label="Toggle favorite"
    >
      <StarIcon
        className={`h-6 w-6 cursor-pointer ${
          isFavorite ? "text-yellow-500" : "text-gray-400"
        }`}
        onClick={() => toggleFavorite(projectId)}
      />
    </div>
  );
};

export default FavoriteButton;
