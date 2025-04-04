
import { useState } from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import TableOfContents from "../components/TableOfContents";

// Mock data for projects
const projectsData = [
  {
    id: "1",
    name: "DeFi Lending Protocol",
    description: "A decentralized lending protocol allowing users to lend and borrow crypto assets with competitive interest rates and minimal risk.",
    progress: 75,
    status: "active" as const,
    category: "defi"
  },
  {
    id: "2",
    name: "NFT Marketplace",
    description: "A comprehensive marketplace for creating, buying, selling, and trading NFTs with low gas fees and creator royalties.",
    progress: 40,
    status: "active" as const,
    category: "nft"
  },
  {
    id: "3",
    name: "GameFi Platform",
    description: "Play-to-earn gaming platform with multiple games and interoperable assets across the ecosystem.",
    progress: 60,
    status: "active" as const,
    category: "gamefi"
  },
  {
    id: "4",
    name: "Cross-Chain Bridge",
    description: "Secure and efficient cross-chain bridge for transferring assets between multiple blockchains with minimal fees.",
    progress: 90,
    status: "active" as const,
    category: "defi"
  },
  {
    id: "5",
    name: "DAO Governance Tool",
    description: "Comprehensive toolset for creating and managing DAOs with voting, treasury management, and proposal systems.",
    progress: 100,
    status: "completed" as const,
    category: "defi"
  },
  {
    id: "6",
    name: "Metaverse Land Registry",
    description: "A registry system for metaverse land parcels with integrated marketplace and development tools.",
    progress: 35,
    status: "active" as const,
    category: "nft"
  }
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  
  const filteredProjects = activeFilter === "all" 
    ? projectsData 
    : activeFilter === "active" 
      ? projectsData.filter(p => p.status === "active")
      : activeFilter === "completed"
        ? projectsData.filter(p => p.status === "completed")
        : projectsData.filter(p => p.progress >= 75);
  
  const tocItems = [
    { id: "active-projects", label: "Active Projects", active: activeFilter === "active" },
    { id: "completed-projects", label: "Completed Projects", active: activeFilter === "completed" },
    { id: "top-funded", label: "Top Funded", active: activeFilter === "top-funded" }
  ];
  
  return (
    <Layout>
      <div className="flex">
        <div className="flex-1">
          <div className="mb-8">
            <h1 className="text-2xl font-bold diagonal-line inline-block pb-2">
              Explore Projects
            </h1>
            <p className="text-tdp-dark-gray mt-2">
              Discover and fund innovative blockchain projects from around the world.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-8">
            <button
              onClick={() => setActiveFilter("all")}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === "all"
                  ? "bg-tdp-yellow text-tdp-dark-navy"
                  : "bg-tdp-light-gray text-tdp-dark-gray hover:bg-tdp-light-gray/70"
              } transition-colors`}
            >
              All Projects
            </button>
            <button
              onClick={() => setActiveFilter("active")}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === "active"
                  ? "bg-tdp-yellow text-tdp-dark-navy"
                  : "bg-tdp-light-gray text-tdp-dark-gray hover:bg-tdp-light-gray/70"
              } transition-colors`}
            >
              Active
            </button>
            <button
              onClick={() => setActiveFilter("completed")}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === "completed"
                  ? "bg-tdp-yellow text-tdp-dark-navy"
                  : "bg-tdp-light-gray text-tdp-dark-gray hover:bg-tdp-light-gray/70"
              } transition-colors`}
            >
              Completed
            </button>
            <button
              onClick={() => setActiveFilter("top-funded")}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === "top-funded"
                  ? "bg-tdp-yellow text-tdp-dark-navy"
                  : "bg-tdp-light-gray text-tdp-dark-gray hover:bg-tdp-light-gray/70"
              } transition-colors`}
            >
              Top Funded
            </button>
          </div>
          
          <div id="projects-list" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                name={project.name}
                description={project.description}
                progress={project.progress}
                status={project.status}
              />
            ))}
          </div>
        </div>
        
        <TableOfContents items={tocItems} />
      </div>
    </Layout>
  );
};

export default Projects;
