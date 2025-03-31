
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const MutualFundsMenu = () => (
  <div className="w-[400px] bg-white rounded-md shadow-lg p-4">
    <div className="grid gap-4">
      <div className="flex items-center gap-3">
        <div className="text-nexvest-green">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"></path>
            <path d="m9 10 2 6 3-4 4 2-6-8Z"></path>
          </svg>
        </div>
        <div>All about Mutual Funds</div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="text-nexvest-green">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 7h-7.5a2.5 2.5 0 0 0-2.5 2.5v11a1 1 0 0 1-1 1h11a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Z"></path>
            <path d="M15 2H6a2 2 0 0 0-2 2v11"></path>
          </svg>
        </div>
        <div>Know your Investor Personality</div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="text-nexvest-green">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m12 14 4-4"></path>
            <path d="M3.34 19a10 10 0 1 1 17.32 0"></path>
          </svg>
        </div>
        <div>Mutual Fund Home</div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="text-nexvest-green">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M12 16v-4"></path>
            <path d="M12 8h.01"></path>
          </svg>
        </div>
        <div>Explore Mutual Funds</div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="text-nexvest-green">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="18" height="18" x="3" y="3" rx="2"></rect>
            <path d="M3 9h18"></path>
            <path d="M9 21V9"></path>
          </svg>
        </div>
        <div>Check Portfolio Health</div>
      </div>
    </div>
    
    <div className="mt-4 pt-4 border-t border-gray-200">
      <h3 className="text-sm text-gray-600 mb-2">Find mutual funds by type</h3>
      <div className="grid gap-4">
        <div className="flex items-center gap-3">
          <div className="text-nexvest-green">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="20" x2="12" y2="10"></line>
              <line x1="18" y1="20" x2="18" y2="4"></line>
              <line x1="6" y1="20" x2="6" y2="16"></line>
            </svg>
          </div>
          <div>Equity funds</div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-nexvest-green">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m2 18 8-8 4 4 8-8"></path>
              <path d="M18 2h4v4"></path>
            </svg>
          </div>
          <div>Debt funds</div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="text-nexvest-green">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2"></rect>
              <path d="M12 8v8"></path>
              <path d="M8 12h8"></path>
            </svg>
          </div>
          <div>Hybrid funds</div>
        </div>
      </div>
    </div>
  </div>
);

const MoreMenu = () => (
  <div className="w-[800px] bg-white rounded-md shadow-lg p-4">
    <div className="grid grid-cols-4 gap-6">
      <div>
        <h3 className="font-medium text-gray-700 mb-3">More Products</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-nexvest-green">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4"></path>
                <path d="M4 6v12c0 1.1.9 2 2 2h14v-4"></path>
                <path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z"></path>
              </svg>
            </span>
            <span>Fixed Deposit</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-nexvest-green">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                <path d="M7 7h10"></path>
                <path d="M7 12h10"></path>
                <path d="M7 17h10"></path>
              </svg>
            </span>
            <span>Tax Saving Maximizer</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-nexvest-green">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"></path>
                <path d="M8 9h8"></path>
                <path d="M8 15h4"></path>
              </svg>
            </span>
            <span>Credit Score</span>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="font-medium text-gray-700 mb-3">Insurance</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-nexvest-green">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a8 8 0 0 0-8 8v12l8-5 8 5V10a8 8 0 0 0-8-8Z"></path>
              </svg>
            </span>
            <span>Term Life Insurance</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-nexvest-green">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </span>
            <span>Health Insurance</span>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="font-medium text-gray-700 mb-3">Calculators</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-nexvest-green">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                <path d="M8 6h8"></path>
                <path d="M16 14h.01"></path>
                <path d="M16 10h.01"></path>
                <path d="M12 10h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M8 10h.01"></path>
                <path d="M8 14h.01"></path>
                <path d="M16 18h.01"></path>
                <path d="M12 18h.01"></path>
                <path d="M8 18h.01"></path>
              </svg>
            </span>
            <span>SIP Calculator</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-nexvest-green">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                <path d="M8 6h8"></path>
                <path d="M16 14h.01"></path>
                <path d="M16 10h.01"></path>
                <path d="M12 10h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M8 10h.01"></path>
                <path d="M8 14h.01"></path>
                <path d="M16 18h.01"></path>
                <path d="M12 18h.01"></path>
                <path d="M8 18h.01"></path>
              </svg>
            </span>
            <span>Mutual Fund Calculator</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-nexvest-green">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                <path d="M8 6h8"></path>
                <path d="M16 14h.01"></path>
                <path d="M16 10h.01"></path>
                <path d="M12 10h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M8 10h.01"></path>
                <path d="M8 14h.01"></path>
                <path d="M16 18h.01"></path>
                <path d="M12 18h.01"></path>
                <path d="M8 18h.01"></path>
              </svg>
            </span>
            <span>FD Calculator</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-nexvest-green">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                <path d="M8 6h8"></path>
                <path d="M16 14h.01"></path>
                <path d="M16 10h.01"></path>
                <path d="M12 10h.01"></path>
                <path d="M12 14h.01"></path>
                <path d="M8 10h.01"></path>
                <path d="M8 14h.01"></path>
                <path d="M16 18h.01"></path>
                <path d="M12 18h.01"></path>
                <path d="M8 18h.01"></path>
              </svg>
            </span>
            <span>NPS Calculator</span>
          </div>
          <div className="mt-2 text-nexvest-green text-sm flex items-center">
            <span>See all calculators</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="font-medium text-gray-700 mb-3">Company</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="text-nexvest-green">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
            </span>
            <span>About Us</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-nexvest-green">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
              </svg>
            </span>
            <span>Learn</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-nexvest-green">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2v4"></path>
                <path d="m16 3 1 3"></path>
                <path d="M3 10h18"></path>
                <path d="m5 19 2-3"></path>
                <path d="m17 19-2-3"></path>
                <path d="M12 18a6 6 0 0 0 0-12"></path>
              </svg>
            </span>
            <span>Join Us</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-nexvest-green">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 18.7V21a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2.3"></path>
                <path d="M10.42 6.73A2.03 2.03 0 0 1 11 8a2.03 2.03 0 0 1-1.66 2"></path>
                <path d="M14 10h7l-1.8 7.2A2 2 0 0 1 17.28 19h-2.56a2 2 0 0 1-1.92-1.8L11 10"></path>
                <path d="M17 6V5a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v1"></path>
              </svg>
            </span>
            <span>Help & Support</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

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
        
        <NavigationMenu className="hidden md:block ml-8">
          <NavigationMenuList className="flex gap-6">
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-transparent hover:text-nexvest-green data-[state=open]:bg-transparent data-[state=open]:text-nexvest-green flex items-center gap-1 p-0">
                <span>Mutual Funds</span>
                <ChevronDown size={16} />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white">
                <MutualFundsMenu />
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <span className="text-white cursor-pointer hover:text-nexvest-green transition-colors">
                Genius
              </span>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <span className="text-white cursor-pointer hover:text-nexvest-green transition-colors">
                Stocks
              </span>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <span className="text-white cursor-pointer hover:text-nexvest-green transition-colors">
                NPS
              </span>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent text-white hover:bg-transparent hover:text-nexvest-green data-[state=open]:bg-transparent data-[state=open]:text-nexvest-green flex items-center gap-1 p-0">
                <span>More</span>
                <ChevronDown size={16} />
              </NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white">
                <MoreMenu />
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
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
