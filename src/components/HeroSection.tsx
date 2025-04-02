
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import HeroFinancial3D from './HeroFinancial3D';

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-nexvest-black">
      {/* 3D Animation Layer (background) */}
      <ThreeAnimation />
      
      {/* Main Hero Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <div className="hidden md:flex items-center justify-center relative">
          {/* Replace static image with 3D animation */}
          <HeroFinancial3D />
        </div>
        
        <motion.div 
          className="flex items-center justify-center bg-nexvest-green p-8 md:p-16"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="max-w-md">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              Invest in the freedom to choose
            </motion.h1>
            
            <motion.p 
              className="text-lg text-white mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
            >
              Wealth is not just about money. It's about what all you can do with it. 
              It is having your own story of progress. And living it every single day. 
              So go ahead, imagine a future you want to shape.
            </motion.p>
            
            <motion.p 
              className="text-lg font-semibold text-white mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.9 }}
            >
              And make it happen.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
            >
              <Button 
                className="bg-nexvest-black text-white hover:bg-gray-800 rounded-full px-8 py-6 text-lg"
                variant="default"
              >
                Get started
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
