
import { useState, useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import HeroFinancial3D from './HeroFinancial3D';
import ThreeAnimation from './ThreeAnimation';
import CardTilt from './TiltedCard';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { Canvas } from "@react-three/fiber";
import { Experience } from "@/components/Experience";
import GlobeCanvas from '@/components/GlobeCanvas';
import { Html } from '@react-three/drei';
import Earth from './Earth';
import SmoothScroll from './SmoothScroll';

const HeroSection = () => {

  const [showWelcome, setShowWelcome] = useState(true);
 
   useEffect(() => {
     const timer = setTimeout(() => {
       setShowWelcome(false);
     }, 1200);
 
     return () => clearTimeout(timer);
   }, []);

   const [typewriterText] = useTypewriter({
    words: ['Welcome to NexVest!',
  "Invest beyond earthly boundaries", 'Go to the moon with NexVest!'],
    loop: true,
    deleteSpeed: 40,
    typeSpeed: 60,
    delaySpeed: 1100
  });

  return (
    <SmoothScroll>
    <div className="relative w-full min-h-screen overflow-hidden bg-nexvest-black">
      {/* 3D Animation Layer (background) */}
      {/* <ThreeAnimation /> */}

      <AnimatePresence>
         {showWelcome && (
           <motion.div
             initial={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 1.2, ease: "easeInOut" }}
             className="fixed inset-0 z-50 flex items-center justify-center bg-black"
           >
             <motion.h1
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ duration: 1, ease: "easeInOut" }}
               className="text-5xl md:text-5xl font-medium tracking-wider text-white uppercase"
             >
               Welcome To <span className="text-nexvest-green">NexVest</span>
             </motion.h1>
           </motion.div>
         )}
       </AnimatePresence>

       <ThreeAnimation />
      
      {/* Main Hero Content */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 min-h-screen">
         <div className="hidden md:block relative p-0">
           {/* <img
             src="/bg.png"
             alt="Photographer on car"
             className="object-cover h-full w-full"
           /> */}
            {/* <CardTilt /> */}
            {/* <GlobeCanvas /> */}
            <Earth />
         </div>
        
        <motion.div 
          className="flex items-center justify-center bg-nexvest-green p-8 md:p-16"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8, delay: 0.4 }}
        >
          <div className="max-w-md">
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <span>{typewriterText}</span>
              <Cursor cursorStyle="" />
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
    </SmoothScroll>
  );
};

export default HeroSection;
