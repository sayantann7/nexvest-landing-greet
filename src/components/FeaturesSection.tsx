
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Shield, BarChart4, Users } from 'lucide-react';

const features = [
  {
    icon: <TrendingUp size={32} />,
    title: "Investment Growth",
    description: "Maximize your portfolio with our proven strategies for long-term investment growth.",
  },
  {
    icon: <Shield size={32} />,
    title: "Secure Management",
    description: "Your investments are protected by our industry-leading security protocols.",
  },
  {
    icon: <BarChart4 size={32} />,
    title: "Data-Driven Approach",
    description: "We use advanced analytics to make informed investment decisions for your portfolio.",
  },
  {
    icon: <Users size={32} />,
    title: "Expert Advisors",
    description: "Get personalized guidance from our team of certified financial experts.",
  },
];

const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-nexvest-black mb-4">
            Why Choose <span className="text-nexvest-green">NexVest</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Experience excellence in financial management with our comprehensive suite of services
            designed to help you achieve your financial goals.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-8 rounded-lg hover:shadow-lg transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="text-nexvest-green mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-nexvest-black">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
