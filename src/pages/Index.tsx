
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout>
      <section className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-4xl font-bold mb-6 diagonal-line inline-block pb-2">
          Token Distribution Platform
        </h1>
        <p className="text-tdp-dark-gray mb-10 max-w-2xl mx-auto">
          A seamless platform for project founders and investors to connect, fund, and grow innovative blockchain projects through transparent token distribution.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-tdp-light-gray hover:border-tdp-yellow transition-all">
            <h2 className="text-xl font-bold mb-4 tdp-underline-red">For Projects</h2>
            <p className="text-tdp-dark-gray mb-6">Launch and manage your project, set funding goals, and distribute tokens efficiently.</p>
            <Link 
              to="/projects" 
              className="inline-block px-6 py-2 border border-tdp-red rounded text-tdp-dark-gray hover:bg-tdp-yellow hover:border-tdp-yellow hover:text-tdp-dark-navy transition-colors"
            >
              Explore Projects
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-tdp-light-gray hover:border-tdp-yellow transition-all">
            <h2 className="text-xl font-bold mb-4 tdp-underline-yellow">For Investors</h2>
            <p className="text-tdp-dark-gray mb-6">Discover promising projects, stake ETH, and earn rewards through project success.</p>
            <Link 
              to="/investor" 
              className="inline-block px-6 py-2 border border-tdp-red rounded text-tdp-dark-gray hover:bg-tdp-yellow hover:border-tdp-yellow hover:text-tdp-dark-navy transition-colors"
            >
              Investor Dashboard
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-tdp-light-gray hover:border-tdp-yellow transition-all">
            <h2 className="text-xl font-bold mb-4 tdp-underline-red">For Founders</h2>
            <p className="text-tdp-dark-gray mb-6">Create your project, set phases, and track funding progress all in one place.</p>
            <Link 
              to="/founder" 
              className="inline-block px-6 py-2 border border-tdp-red rounded text-tdp-dark-gray hover:bg-tdp-yellow hover:border-tdp-yellow hover:text-tdp-dark-navy transition-colors"
            >
              Founder Dashboard
            </Link>
          </div>
        </div>
        
        <div className="bg-tdp-light-gray/50 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
          <p className="text-tdp-dark-gray mb-6">Connect your wallet to explore all features of the platform.</p>
          <button className="px-6 py-3 bg-tdp-yellow text-tdp-dark-navy font-medium rounded hover:bg-tdp-yellow/90 transition-colors">
            Connect Wallet
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
