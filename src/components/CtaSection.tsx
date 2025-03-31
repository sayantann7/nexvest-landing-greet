
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="bg-nexvest-green py-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Investment Journey?
          </h2>
          <p className="text-white text-lg mb-8">
            Take the first step toward financial freedom and join thousands of successful investors
            who have trusted NexVest with their financial future.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              className="bg-white text-nexvest-green hover:bg-gray-100 rounded-full px-8 py-6 text-lg font-medium"
              variant="default"
            >
              Get Started Today
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
