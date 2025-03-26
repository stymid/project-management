"use client";

import { useParams } from "next/navigation";

const ProjectPage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>پروژه: {id}</h1>
    </div>
  );
};

export default ProjectPage;
