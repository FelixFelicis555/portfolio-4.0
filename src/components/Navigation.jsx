/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import {Link,useLocation} from 'react-router-dom';

const Navigation = () => {
  const location=useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', href: '/' },
    { id: 'work', label: 'Work', href: '/work' },
    { id: 'about', label: 'About', href: '/about' },
    { id: 'education', label: 'Blog', href: '/blog' },
    { id: 'contact', label: 'More', href: '/more' },
  ];

  const isActive=(href)=>{
    if(href==="/") return location.pathname ==='/';
    return location.pathname.startsWith(href);
  };

  return (
    <div className="h-15 fixed top-0 left-0 right-0 z-30 flex items-center justify-center">
      <nav className="fixed z-20 top-5 w-full flex items-center justify-center px-4">
        {/* Desktop Navigation */}
        <ul className="border border-white/10 bg-white/5 px-1.5 py-1 md:flex items-center justify-center space-x-5 rounded-full text-accent-foreground backdrop-blur-md hidden">
          {navItems.map((item) => {
            const active=isActive(item.href);
           return (
            <li
              key={item.id}
              className="cursor-pointer focus:text-accent-foreground ring-ring/10 outline-ring/50 gap-1 rounded-full p-2 focus-visible:ring-4 focus-visible:outline-1 inline-block px-4 py-1.5 text-base font-semibold text-white/70 transition-[text-shadow,color] duration-200 hover:text-white/85 relative"
              data-active={active}
              style={{
                opacity: 1,
                color: active? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.7)',
              }}
            >
              <Link to={item.href}>{item.label}</Link>
              {active && (
                <motion.div
                  layoutId="activeIndicator"
                  className=" absolute inset-0 -z-10 w-full rounded-full"
                  style={{
                backgroundColor: 'color-mix(in oklab, hsl(var(--primary-purple)) 5%, transparent)'
             }}
                  initial={false}
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                >
                  <div className=" absolute -top-[9px] left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full"  style={{ backgroundColor: 'hsl(var(--primary-purple))' }}>
                    <div className=" absolute -top-2 -left-2 h-6 w-12 rounded-full blur-sm"  style={{ backgroundColor: 'color-mix(in oklab, hsl(var(--primary-purple)) 10%, transparent)' }} />
                    <div className=" absolute -top-1 h-6 w-8 rounded-full blur-sm"style={{ backgroundColor: 'color-mix(in oklab, hsl(var(--primary-purple)) 10%, transparent)' }}/>
                    <div className=" absolute top-0 left-2 h-4 w-4 rounded-full blur-sm" style={{ backgroundColor: 'color-mix(in oklab, hsl(var(--primary-purple)) 10%, transparent)' }} />
                  </div>
                </motion.div>
              )}
              
            </li>
          );
})}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden fixed right-4 top-5 z-30 p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <motion.div
            initial={false}
            animate={{ opacity: 1, transform: 'none' }}
          >
            {isMobileMenuOpen ? (
              <X className="text-white/70 text-xl" />
            ) : (
              <Menu className="text-white/70 text-xl" />
            )}
          </motion.div>
        </button>

        {isMobileMenuOpen && (
          <motion.div initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-20}} className="md:hidden fixed top-20 right-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 space-y-2">
            {navItems.map((item)=>{
              const active=isActive(item.href);
              return (
                <Link key={item.id} to={item.href} onClick={()=>setIsMobileMenuOpen(false)} className={`block px-4 py-2 rounded-lg transition-colors ${
                  active ? 'bg-white/10 text-white':'text-white/70 hover:text-white/90 hover:bg-white/5'}`}>
                    {item.label}
                  </Link>
              );
            })}
          </motion.div>
        )}
      </nav>
    </div>
  );
};

export default Navigation;
