
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Entrepreneur",
    quote: "NexVest helped me turn my financial goals into reality. Their investment strategies are unmatched in the industry!",
    stars: 5,
  },
  {
    name: "Michael Chen",
    position: "Tech Executive",
    quote: "As a busy professional, I needed a financial partner I could trust. NexVest exceeded every expectation.",
    stars: 5,
  },
  {
    name: "Priya Sharma",
    position: "Real Estate Investor",
    quote: "The personalized approach and attention to detail from the NexVest team has transformed my investment portfolio.",
    stars: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-nexvest-black mb-4">
            What Our Clients Say
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Don't just take our word for it. Hear from our satisfied clients who have
            achieved their financial goals with NexVest.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: false } }
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="flex mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <Star key={i} size={20} fill="#FFD700" color="#FFD700" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-nexvest-black">{testimonial.name}</p>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
