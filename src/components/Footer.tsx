
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-nexvest-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <motion.h3 
              className="text-xl font-bold mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              NexVest
            </motion.h3>
            <motion.p 
              className="text-gray-400"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: false }}
            >
              Your trusted partner for financial growth and investment management.
            </motion.p>
          </div>
          
          <div>
            <motion.h3 
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              Services
            </motion.h3>
            <motion.ul 
              className="space-y-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: false }}
            >
              <li><a href="#" className="text-gray-400 hover:text-nexvest-green">Mutual Funds</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nexvest-green">Stocks</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nexvest-green">NPS</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nexvest-green">Financial Planning</a></li>
            </motion.ul>
          </div>
          
          <div>
            <motion.h3 
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              Company
            </motion.h3>
            <motion.ul 
              className="space-y-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: false }}
            >
              <li><a href="#" className="text-gray-400 hover:text-nexvest-green">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nexvest-green">Team</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nexvest-green">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nexvest-green">Contact</a></li>
            </motion.ul>
          </div>
          
          <div>
            <motion.h3 
              className="text-lg font-semibold mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
            >
              Connect
            </motion.h3>
            <motion.ul 
              className="space-y-2"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: false }}
            >
              <li><a href="#" className="text-gray-400 hover:text-nexvest-green">Twitter</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nexvest-green">LinkedIn</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nexvest-green">Facebook</a></li>
              <li><a href="#" className="text-gray-400 hover:text-nexvest-green">Instagram</a></li>
            </motion.ul>
          </div>
        </div>
        
        <motion.div 
          className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false }}
        >
          <p>&copy; {new Date().getFullYear()} NexVest. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
