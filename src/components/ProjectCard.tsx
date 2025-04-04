
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

interface ProjectCardProps {
  id: string;
  name: string;
  description: string;
  progress: number;
  status: "active" | "completed";
}

const ProjectCard = ({ id, name, description, progress, status }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-tdp-light-gray hover:border-tdp-yellow transition-all duration-300 overflow-hidden p-5">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-bold tdp-underline-yellow">{name}</h3>
        <span 
          className={`text-xs px-2 py-1 rounded-full ${
            status === "active" 
              ? "bg-tdp-green/10 text-tdp-green" 
              : "bg-tdp-red/10 text-tdp-red"
          }`}
        >
          {status === "active" ? "Active" : "Completed"}
        </span>
      </div>
      
      <p className="text-tdp-dark-gray mb-4 text-sm line-clamp-2">{description}</p>
      
      <div className="mb-4">
        <div className="flex justify-between text-xs mb-1">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <ProgressBar progress={progress} />
      </div>
      
      <Link
        to={`/projects/${id}`}
        className="block w-full text-center py-2 border border-tdp-red rounded text-tdp-dark-gray hover:bg-tdp-yellow hover:border-tdp-yellow hover:text-tdp-dark-navy transition-colors"
      >
        View Details
      </Link>
    </div>
  );
};

export default ProjectCard;
