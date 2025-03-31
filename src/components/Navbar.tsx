
import React from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <motion.nav 
      className="fixed top-0 left-0 right-0 z-50 bg-nexvest-black px-4 md:px-8 py-4 flex items-center justify-between"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center gap-2">
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-white text-2xl font-bold">NexVest</span>
        </motion.div>
        
        <div className="hidden md:flex items-center ml-8 space-x-6">
          <motion.div whileHover={{ y: -2 }} className="group">
            <span className="text-white cursor-pointer group-hover:text-nexvest-green transition-colors">Mutual Funds</span>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} className="group">
            <span className="text-white cursor-pointer group-hover:text-nexvest-green transition-colors">Genius</span>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} className="group">
            <span className="text-white cursor-pointer group-hover:text-nexvest-green transition-colors">Stocks</span>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} className="group">
            <span className="text-white cursor-pointer group-hover:text-nexvest-green transition-colors">NPS</span>
          </motion.div>
          <motion.div whileHover={{ y: -2 }} className="group">
            <span className="text-white cursor-pointer group-hover:text-nexvest-green transition-colors">More</span>
          </motion.div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative hidden md:block">
          <input 
            type="text" 
            placeholder="Search for Stocks, Mutual Funds..." 
            className="bg-white/10 border border-gray-600 rounded-full text-white pl-10 pr-4 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-nexvest-green"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
        </div>
        
        <motion.button 
          className="bg-transparent text-white py-2 px-4 rounded-full border border-gray-600 hover:bg-white/5"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          My Account
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
