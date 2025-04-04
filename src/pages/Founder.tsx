
import { useState } from "react";
import { ChevronDown, ChevronUp, Plus } from "lucide-react";
import Layout from "../components/Layout";
import TableOfContents from "../components/TableOfContents";
import ProgressBar from "../components/ProgressBar";
import PieChart from "../components/PieChart";

// Mock data for founder projects
const founderProjects = [
  {
    id: "1",
    name: "DeFi Lending Protocol",
    totalRaised: 12.5,
    goal: 20,
    phases: [
      {
        id: "1-1",
        name: "Phase 1: MVP Development",
        raised: 5,
        goal: 5,
        deadline: "Completed",
        tasks: [
          { id: "t1", name: "Smart Contract Development", completed: true },
          { id: "t2", name: "Security Audit", completed: true },
          { id: "t3", name: "Frontend Integration", completed: true }
        ]
      },
      {
        id: "1-2",
        name: "Phase 2: Beta Launch",
        raised: 7.5,
        goal: 10,
        deadline: "3 days left",
        tasks: [
          { id: "t4", name: "Liquidity Pool Setup", completed: true },
          { id: "t5", name: "Governance Implementation", completed: false },
          { id: "t6", name: "Documentation", completed: false }
        ]
      },
      {
        id: "1-3",
        name: "Phase 3: Marketing & Expansion",
        raised: 0,
        goal: 5,
        deadline: "Not started",
        tasks: [
          { id: "t7", name: "Multi-chain Support", completed: false },
          { id: "t8", name: "Partner Integration", completed: false },
          { id: "t9", name: "Community Growth", completed: false }
        ]
      }
    ]
  }
];

// Distribution data for pie chart
const distributionData = [
  { name: "Founder", value: 40, color: "#FFC107" },
  { name: "Platform", value: 10, color: "#EF4444" },
  { name: "Investors", value: 50, color: "#4B5563" }
];

const Founder = () => {
  const [expandedPhases, setExpandedPhases] = useState<Record<string, boolean>>({
    "1-1": true,
    "1-2": false,
    "1-3": false
  });
  
  const togglePhase = (phaseId: string) => {
    setExpandedPhases(prev => ({
      ...prev,
      [phaseId]: !prev[phaseId]
    }));
  };
  
  const tocItems = [
    { id: "projects", label: "Projects", active: true },
    { id: "phases", label: "Phases", active: false },
    { id: "distribution", label: "Distribution", active: false }
  ];
  
  return (
    <Layout>
      <div className="flex">
        <div className="flex-1">
          <div className="mb-8 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold diagonal-line inline-block pb-2">
                Manage Projects
              </h1>
              <p className="text-tdp-dark-gray mt-2">
                Create, track, and grow your token-based projects.
              </p>
            </div>
            
            <button className="flex items-center gap-2 px-4 py-2 bg-tdp-yellow text-tdp-dark-navy rounded hover:bg-tdp-yellow/90 transition-colors">
              <Plus size={18} />
              <span>Create New Project</span>
            </button>
          </div>
          
          <div className="grid grid-cols-1 gap-8">
            {founderProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg shadow-sm border border-tdp-light-gray overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-bold tdp-underline-yellow mb-2">{project.name}</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <h3 className="text-sm text-tdp-dark-gray mb-1">Total Raised</h3>
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold">{project.totalRaised}</span>
                        <span className="ml-1 text-tdp-dark-gray">ETH</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm text-tdp-dark-gray mb-1">Funding Goal</h3>
                      <div className="flex items-baseline">
                        <span className="text-2xl font-bold">{project.goal}</span>
                        <span className="ml-1 text-tdp-dark-gray">ETH</span>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-sm text-tdp-dark-gray mb-1">Progress</h3>
                      <div className="flex items-center gap-3">
                        <div className="flex-1">
                          <ProgressBar progress={(project.totalRaised / project.goal) * 100} />
                        </div>
                        <span className="text-sm font-medium">
                          {Math.round((project.totalRaised / project.goal) * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="px-4 py-2 border border-tdp-red text-tdp-dark-gray hover:bg-tdp-yellow hover:border-tdp-yellow hover:text-tdp-dark-navy transition-colors rounded">
                    Manage Project
                  </button>
                </div>
                
                <div className="border-t border-tdp-light-gray">
                  <div className="p-5" id="phases">
                    <h3 className="text-lg font-semibold mb-4">Project Phases</h3>
                    
                    <div className="space-y-4">
                      {project.phases.map((phase) => (
                        <div key={phase.id} className="border border-tdp-light-gray rounded-lg overflow-hidden">
                          <div 
                            className="flex items-center justify-between p-4 cursor-pointer bg-tdp-light-gray/30 hover:bg-tdp-light-gray/50 transition-colors"
                            onClick={() => togglePhase(phase.id)}
                          >
                            <div className="font-medium">{phase.name}</div>
                            <div className="flex items-center gap-4">
                              <div className={`text-sm px-2 py-0.5 rounded ${
                                phase.deadline === "Completed" 
                                  ? "bg-tdp-green/10 text-tdp-green"
                                  : phase.deadline === "Not started"
                                    ? "bg-tdp-dark-gray/10 text-tdp-dark-gray"
                                    : "bg-tdp-red/10 text-tdp-red animate-pulse-accent"
                              }`}>
                                {phase.deadline}
                              </div>
                              {expandedPhases[phase.id] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                            </div>
                          </div>
                          
                          {expandedPhases[phase.id] && (
                            <div className="p-4 border-t border-tdp-light-gray animate-fade-in">
                              <div className="mb-4">
                                <div className="flex justify-between text-sm mb-1">
                                  <span>Funding Progress</span>
                                  <span>{phase.raised} / {phase.goal} ETH</span>
                                </div>
                                <ProgressBar progress={(phase.raised / phase.goal) * 100} />
                              </div>
                              
                              <div className="space-y-2 mb-4">
                                <h4 className="text-sm font-medium">Tasks</h4>
                                {phase.tasks.map((task) => (
                                  <div key={task.id} className="flex items-center gap-2">
                                    <input 
                                      type="checkbox" 
                                      checked={task.completed}
                                      readOnly
                                      className="h-4 w-4 rounded border-tdp-light-gray text-tdp-yellow focus:ring-tdp-yellow" 
                                    />
                                    <span className={`text-sm ${task.completed ? "line-through text-tdp-dark-gray/70" : "text-tdp-dark-gray"}`}>
                                      {task.name}
                                    </span>
                                  </div>
                                ))}
                              </div>
                              
                              <button 
                                className={`px-3 py-1.5 rounded text-sm ${
                                  phase.deadline === "Completed"
                                    ? "bg-tdp-green/10 text-tdp-green cursor-not-allowed"
                                    : "bg-tdp-yellow text-tdp-dark-navy hover:bg-tdp-yellow/90 transition-colors"
                                }`}
                                disabled={phase.deadline === "Completed"}
                              >
                                {phase.deadline === "Completed" ? "Phase Completed" : "Mark Tasks Complete"}
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-tdp-light-gray">
                  <div className="p-5" id="distribution">
                    <h3 className="text-lg font-semibold mb-4">Token Distribution</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <PieChart data={distributionData} />
                      </div>
                      
                      <div className="flex items-center">
                        <div className="space-y-4 w-full">
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-tdp-dark-gray">Vesting Period</span>
                              <span className="text-sm font-medium">6 months</span>
                            </div>
                            <ProgressBar progress={50} />
                          </div>
                          
                          <div>
                            <div className="flex justify-between mb-1">
                              <span className="text-sm text-tdp-dark-gray">Initial Unlock</span>
                              <span className="text-sm font-medium">10%</span>
                            </div>
                            <ProgressBar progress={10} className="h-1.5" />
                          </div>
                          
                          <div className="bg-tdp-light-gray/50 p-3 rounded-lg">
                            <p className="text-sm text-tdp-dark-gray">
                              Token distribution follows a 6-month vesting schedule with 10% initial unlock. The remaining tokens will be distributed linearly.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <TableOfContents items={tocItems} />
      </div>
    </Layout>
  );
};

export default Founder;
