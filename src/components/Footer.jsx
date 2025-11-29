/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Facebook } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { name: 'GitHub', icon: Github, href: 'https://github.com/FelixFelicis555', color: 'hover:bg-purple-500/20 hover:text-purple-300' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/pavanesh-g/', color: 'hover:bg-blue-500/20 hover:text-blue-400' },
    { name: 'Email', icon: Mail, href: 'mailto:pavanesh163@gmail.com', color: 'hover:bg-purple-500/20 hover:text-purple-300' },
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/pavanesh.nandu/', color: 'hover:bg-blue-500/20 hover:text-blue-300' },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 backdrop-blur-sm">
      <div className="absolute -top-40 left-1/2 h-40 w-[800px] -translate-x-1/2 blur-[100px]" />
      
      <motion.div
        className="container mx-auto px-4 py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  href={social.href}
                  whileHover={{y:-5}}
                  transition={{duration:0.3}}
                >
                  <span className="absolute -inset-2 -z-10 scale-0 rounded-full bg-white/5 transition-all duration-300 group-hover:scale-100" />
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white shadow-lg transition-colors duration-300 ${social.color}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-medium text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {social.name}
                  </span>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Divider */}
          <motion.div
            className="flex w-full max-w-xs items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" />
            <div className="h-1.5 w-1.5 rounded-full bg-purple-500/50" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20" />
          </motion.div>

          {/* Copyright */}
          <motion.p
            className="text-center text-sm text-white/60"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            © 2025{' '}
            <span className="bg-gradient-to-r from-white to-purple-300 bg-clip-text font-medium text-transparent">
              Pavanesh Guggilapu
            </span>
            . All Rights Reserved.
          </motion.p>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;