import { Project } from "@/types/project";
import FavoriteButton from "./FavoriteStar";

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const { name, duration, endDate, price } = project;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>

      <p className="text-gray-600 mt-2">مدت زمان: {duration}</p>

      {endDate && <p className="text-gray-600">تاریخ پایان: {endDate}</p>}

      <p className="text-gray-800 mt-2 font-bold">قیمت: {price} تومان</p>
      <FavoriteButton projectId={project.id} />
    </div>
  );
};

export default ProjectCard;
