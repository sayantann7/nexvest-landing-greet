
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import InvestmentChart from './InvestmentChart';

const InvestmentComparisonSection: React.FC = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState<number>(7000);

  return (
    <div className="w-full py-16 bg-[#f0fafa]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="bg-white rounded-xl shadow-xl p-6 order-2 md:order-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <InvestmentChart 
              monthlyInvestment={monthlyInvestment} 
              onInvestmentChange={setMonthlyInvestment} 
            />
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get there faster with{" "}
              <span className="text-nexvest-green">1%</span> higher returns
            </h2>
            
            <p className="text-lg mb-6">
              Whoever you are and wherever you want to reach in life, zero-commission 
              Direct Mutual funds on NexVest help you get there faster with 
              up to 1% more returns every year.
            </p>
            
            <Button 
              className="bg-nexvest-green hover:bg-green-600 text-white rounded-full px-8 py-6 text-lg"
            >
              Explore Mutual Funds
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentComparisonSection;
