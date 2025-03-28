"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Project } from "@/types/project";
import { getProjectDetails } from "@/lib/supabase/getProjectDetails";
import { formatToShamsi } from "@/helpers/dateHelper";
import ProgressStatus from "@/components/ProgressStatus";

export default function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState<Project | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      // make sure that the id is not an array to privent bugs
      const projectId = Array.isArray(id) ? id[0] : id;
      if (projectId) {
        const fetchedProject = await getProjectDetails(projectId);
        setProject(fetchedProject);
      }
    };

    fetchProject();
  }, [id]);

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg font-semibold">در حال بارگذاری...</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-semibold text-center text-gray-800">
        {project.name}
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-6 space-y-4">
        <p className="text-lg text-gray-700">{project.description}</p>

        <div className="flex justify-between items-center">
          <p className="font-medium text-gray-600">قیمت:</p>
          <p className="text-xl font-bold text-gray-800">
            {project.price} تومان
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="font-medium text-gray-600">تاریخ شروع:</p>
          <p className="text-xl text-gray-800">
            {formatToShamsi(project?.createdAt)}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="font-medium text-gray-600">سازنده:</p>
          <p className="text-xl text-gray-800">{project.creator}</p>
        </div>

        <div className="flex justify-between items-center">
          <p className="font-medium text-gray-600">مدت زمان پروژه:</p>
          <p className="text-xl text-gray-800">{project.duration} ماه</p>
        </div>

        {project.endـdate && (
          <div className="flex justify-between items-center">
            <p className="font-medium text-gray-600">تاریخ پایان پروژه:</p>
            <p className="text-xl text-gray-800">
              {formatToShamsi(project?.endـdate)}
            </p>
          </div>
        )}

        <div className="mt-4">
          <ProgressStatus status={project.status} />
        </div>
      </div>
    </div>
  );
}
