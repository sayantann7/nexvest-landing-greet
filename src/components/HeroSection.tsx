
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-nexvest-black">
      {/* Welcome Message Overlay */}
      {showWelcome && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-nexvest-black"
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            Welcome To <span className="text-nexvest-green">NexVest</span>
          </motion.h1>
        </motion.div>
      )}
      
      {/* Main Hero Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-screen">
        <div className="hidden md:block relative">
          <img
            src="/lovable-uploads/e25faca9-41ef-48a7-bacf-a2b4ba1aa7b7.png"
            alt="Photographer on car"
            className="object-cover h-full w-full"
          />
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
      
      {/* Background particles (optional) */}
      <div className="absolute bottom-0 right-0 w-64 h-64 opacity-20">
        <div className="absolute w-4 h-4 rounded-full bg-white top-12 left-12"></div>
        <div className="absolute w-3 h-3 rounded-full bg-white top-24 left-40"></div>
        <div className="absolute w-5 h-5 rounded-full bg-white top-48 left-8"></div>
        <div className="absolute w-3 h-3 rounded-full bg-white top-36 left-24"></div>
      </div>
    </div>
  );
};

export default HeroSection;
