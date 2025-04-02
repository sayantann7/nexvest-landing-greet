
import React from 'react';
import { motion } from 'framer-motion';
import FinancialAnimation3D from './FinancialAnimation3D';

const AnimatedFinancialSection: React.FC = () => {
  return (
    <div className="w-full py-16 bg-gradient-to-b from-gray-900 to-gray-800 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Future of <span className="text-nexvest-green">Investing</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            Visualize your financial growth with our advanced investment tools and see how 
            your money can work harder for you.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">Smart Investments for a Better Tomorrow</h3>
            <p className="mb-6">
              Our platform analyzes thousands of data points to help you make informed 
              investment decisions. With NexVest, you get:
            </p>
            
            <ul className="space-y-4">
              <motion.li 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="bg-nexvest-green rounded-full p-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Zero commission mutual funds</span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="bg-nexvest-green rounded-full p-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Personalized investment advice</span>
              </motion.li>
              <motion.li 
                className="flex items-center"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="bg-nexvest-green rounded-full p-1 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>Advanced portfolio optimization</span>
              </motion.li>
            </ul>
          </motion.div>
          
          {/* <motion.div 
            className="md:w-1/2 h-96"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <FinancialAnimation3D />
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default AnimatedFinancialSection;
