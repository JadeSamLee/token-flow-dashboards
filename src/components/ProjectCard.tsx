
import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

interface ProjectCardProps {
  id: string;
  name: string;
  description: string;
  progress: number;
  status: "active" | "completed";
}

const ProjectCard = ({ id, name, description, progress, status }: ProjectCardProps) => {
  return (
    <Card className="eth-card hover:border-tdp-eth-mint p-5 h-full">
      <CardHeader className="p-0 pb-2">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold tdp-underline-primary">{name}</h3>
          <Badge 
            className={`px-2 py-1 text-xs ${
              status === "active" 
                ? "bg-tdp-green/10 text-tdp-green" 
                : "bg-tdp-red/10 text-tdp-red"
            }`}
          >
            {status === "active" ? "Active" : "Completed"}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-0 py-4">
        <p className="text-tdp-dark-gray mb-4 text-sm line-clamp-2">{description}</p>
        
        <div className="mb-4">
          <div className="flex justify-between text-xs mb-1">
            <span className="font-medium">Progress</span>
            <span className="font-bold text-tdp-eth-purple">{progress}%</span>
          </div>
          <ProgressBar progress={progress} />
        </div>
      </CardContent>
      
      <CardFooter className="p-0 pt-2">
        <Link
          to={`/projects/${id}`}
          className="block w-full text-center py-2 border border-tdp-eth-purple rounded-md text-tdp-dark-gray hover:bg-gradient-to-r hover:from-tdp-eth-purple/10 hover:to-tdp-eth-mint/10 hover:border-tdp-eth-mint hover:text-tdp-dark-navy transition-colors"
        >
          View Details
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
