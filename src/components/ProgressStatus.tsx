import { ProjectStatus } from "@/types/project";

type ConvertedType = {
  className: string;
  vaziat: string;
};
type ProgressType = {
  not_started: ConvertedType;
  in_progress: ConvertedType;
  delivered: ConvertedType;
  approved: ConvertedType;
};
export default function ProgressStatus({ status }: { status: ProjectStatus }) {
  const progress: ProgressType = {
    not_started: { vaziat: "شروع نشده", className: "w-0" },
    in_progress: { vaziat: "در حال انجام", className: "bg-yellow-300 w-1/2" },
    delivered: { vaziat: "تحویل داده شده", className: " bg-orange-500 w-3/4" },
    approved: { vaziat: "تایید شده", className: "w-full bg-green-600" },
  };

  return (
    <div>
      <p>{progress[status].vaziat}</p>
      <div className="flex items-center border-2 h-6 w-full rounded-full bg-gray-200">
        <div
          className={`self-stretch rounded-full ${progress[status].className} transition-all duration-500`}
        ></div>
        <span
          className={`w-6 h-6 bg-green-400 rounded-full transform ${
            status !== "not_started" ? "translate-x-3.5" : "translate-x-0.5"
          }`}
        ></span>
      </div>
    </div>
  );
}
