
import { useState } from "react";
import { AlertTriangle, Plus } from "lucide-react";
import Layout from "../components/Layout";
import PieChart from "../components/PieChart";
import TableOfContents from "../components/TableOfContents";
import ProgressBar from "../components/ProgressBar";

// Mock data for investments
const investmentsData = [
  {
    id: "1",
    projectName: "DeFi Lending Protocol",
    amountStaked: 2.5,
    rewardEarned: 0.75,
    status: "In Progress"
  },
  {
    id: "2",
    projectName: "NFT Marketplace",
    amountStaked: 1.8,
    rewardEarned: 0.2,
    status: "In Progress"
  },
  {
    id: "3",
    projectName: "DAO Governance Tool",
    amountStaked: 3.2,
    rewardEarned: 1.5,
    status: "Completed"
  }
];

// Distribution data for pie chart
const distributionData = [
  { name: "DeFi Lending", value: 35, color: "#FFC107" },
  { name: "NFT Market", value: 25, color: "#FF9800" },
  { name: "DAO Tool", value: 40, color: "#EF4444" }
];

const Investor = () => {
  const [showStakeModal, setShowStakeModal] = useState(false);
  const [stakeAmount, setStakeAmount] = useState("");
  const [selectedProject, setSelectedProject] = useState("");
  
  const totalInvested = investmentsData.reduce((sum, item) => sum + item.amountStaked, 0);
  const totalRewards = investmentsData.reduce((sum, item) => sum + item.rewardEarned, 0);
  const activeProjects = investmentsData.filter(i => i.status === "In Progress").length;
  
  const tocItems = [
    { id: "investments", label: "Investments", active: true },
    { id: "rewards", label: "Rewards", active: false },
    { id: "staking-history", label: "Staking History", active: false }
  ];
  
  return (
    <Layout>
      <div className="flex">
        <div className="flex-1">
          <div className="mb-8">
            <h1 className="text-2xl font-bold diagonal-line inline-block pb-2">
              My Investments
            </h1>
            <p className="text-tdp-dark-gray mt-2">
              Monitor your investments, rewards, and staking activities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-tdp-light-gray">
              <h3 className="text-sm text-tdp-dark-gray mb-1">Total Invested</h3>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold tdp-underline-red">{totalInvested.toFixed(2)}</span>
                <span className="ml-1 text-tdp-dark-gray">ETH</span>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-tdp-light-gray">
              <h3 className="text-sm text-tdp-dark-gray mb-1">Pending Rewards</h3>
              <div className="flex items-baseline">
                <span className="text-2xl font-bold text-tdp-yellow">{totalRewards.toFixed(2)}</span>
                <span className="ml-1 text-tdp-dark-gray">ETH</span>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-tdp-light-gray">
              <h3 className="text-sm text-tdp-dark-gray mb-1">Active Projects</h3>
              <div className="flex items-center">
                <span className="text-2xl font-bold">{activeProjects}</span>
                <span className="ml-2 px-2 py-0.5 text-xs bg-tdp-red text-white rounded-full">{activeProjects}</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="lg:col-span-1">
              <div className="bg-white p-5 rounded-lg shadow-sm border border-tdp-light-gray">
                <h3 className="text-lg font-semibold mb-4">Portfolio Distribution</h3>
                <PieChart data={distributionData} />
              </div>
            </div>
            
            <div className="lg:col-span-2" id="investments">
              <div className="bg-white rounded-lg shadow-sm border border-tdp-light-gray overflow-hidden">
                <div className="p-5 border-b border-tdp-light-gray">
                  <h3 className="text-lg font-semibold">Investment List</h3>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-tdp-light-gray/50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-tdp-dark-gray uppercase tracking-wider">Project</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-tdp-dark-gray uppercase tracking-wider">Staked</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-tdp-dark-gray uppercase tracking-wider">Rewards</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-tdp-dark-gray uppercase tracking-wider">Status</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-tdp-light-gray">
                      {investmentsData.map((investment) => (
                        <tr 
                          key={investment.id}
                          className="hover:bg-tdp-light-gray/20 hover:border-l-2 hover:border-tdp-yellow transition-all cursor-pointer"
                        >
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="font-medium text-tdp-dark-navy">{investment.projectName}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-tdp-dark-gray">{investment.amountStaked} ETH</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-tdp-dark-gray">{investment.rewardEarned} ETH</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="inline-flex items-center">
                              <span 
                                className={`h-2 w-2 rounded-full mr-2 ${
                                  investment.status === "In Progress" ? "bg-tdp-red" : "bg-tdp-green"
                                }`}
                              ></span>
                              <span className="text-tdp-dark-gray">{investment.status}</span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowStakeModal(true)}
              className="flex items-center gap-2 px-6 py-3 border border-tdp-red text-tdp-dark-gray hover:bg-tdp-yellow hover:border-tdp-yellow hover:text-tdp-dark-navy transition-colors rounded-md"
            >
              <Plus size={16} />
              <span>Stake More ETH</span>
            </button>
          </div>
          
          {/* Stake Modal */}
          {showStakeModal && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
              <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-4 overflow-hidden animate-fade-in">
                <div className="p-5 border-b border-tdp-light-gray">
                  <h3 className="text-lg font-semibold">Stake ETH</h3>
                </div>
                
                <div className="p-5">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-tdp-dark-gray mb-1">
                      Amount to Stake (ETH)
                    </label>
                    <input
                      type="number"
                      value={stakeAmount}
                      onChange={(e) => setStakeAmount(e.target.value)}
                      className="w-full px-4 py-2 border border-tdp-light-gray rounded focus:outline-none focus:border-tdp-yellow"
                      placeholder="0.0"
                      min="0"
                      step="0.01"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-tdp-dark-gray mb-1">
                      Select Project
                    </label>
                    <select
                      value={selectedProject}
                      onChange={(e) => setSelectedProject(e.target.value)}
                      className="w-full px-4 py-2 border border-tdp-light-gray rounded focus:outline-none focus:border-tdp-yellow"
                    >
                      <option value="">Choose a project</option>
                      <option value="1" className="text-tdp-red">DeFi Lending Protocol</option>
                      <option value="2" className="text-tdp-red">NFT Marketplace</option>
                      <option value="3" className="text-tdp-red">GameFi Platform</option>
                    </select>
                  </div>
                  
                  <div className="bg-tdp-yellow/10 p-3 rounded flex items-start gap-3 mb-6">
                    <AlertTriangle size={20} className="text-tdp-yellow mt-0.5" />
                    <p className="text-sm text-tdp-dark-gray">
                      Staking ETH is a commitment to the project. You can withdraw your stake after the vesting period ends.
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-end gap-3">
                    <button
                      onClick={() => setShowStakeModal(false)}
                      className="px-4 py-2 border border-tdp-light-gray rounded text-tdp-dark-gray hover:bg-tdp-light-gray/50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      className="px-4 py-2 bg-tdp-yellow text-tdp-dark-navy font-medium rounded hover:bg-tdp-yellow/90 transition-colors"
                    >
                      Confirm Stake
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <TableOfContents items={tocItems} />
      </div>
    </Layout>
  );
};

export default Investor;
