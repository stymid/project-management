import { Project } from "@/types/project";
import FavoriteButton from "./FavoriteStar";
import Link from "next/link";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { name, duration, endـdate, price, id } = project;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
      <Link href={`/project/${id}`}>
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      </Link>

      <p className="text-gray-600 mt-2">مدت زمان: {duration}</p>

      {endـdate && <p className="text-gray-600">تاریخ پایان: {endـdate}</p>}

      <p className="text-gray-800 mt-2 font-bold">قیمت: {price} تومان</p>
      <FavoriteButton projectId={String(project.id)} />
    </div>
  );
};

export default ProjectCard;
