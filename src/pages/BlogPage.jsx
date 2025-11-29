import React from "react";
import { motion } from 'framer-motion';
import {Clock,ArrowLeft} from 'lucide-react';
import {Link} from 'react-router-dom';

const BlogPage=()=>{
    return(
        <section className="min-h-screen flex items-center justify-center text-gray-300 px-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-violet-600/5 rounded-full blur-3xl -z-10"/>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl -z-10"/>

            <div className="text-center max-w-xl">
                <motion.div initial={{sacle:0}} animate={{scale:1}} transition={{duration:0.5,type:'spring'}} className="flex justify-center mb-6 text-violet-500 text-5xl">
                    <div className="p-6 rounded-full bg-violet-500/10 border border-violet-500/20">
                    <Clock className="w-12 h-12"/>
                    </div>
                </motion.div>

                <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.2}} className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Blog Coming Soon
                </motion.h1>

                <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.3}} className="text-gray-400 mb-6 leading-relaxed">
                    I'm working on something awesome for you! My blog will be launching soon with insights,tutorials , and dev-life stories.
                </motion.p>
                <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6,delay:0.4}} className="space-y-4">
                    <span classname="inline-block bg-violet-600/20 text-violet-400 px-4 py-2 rounded-full text-sm tracking-wide border border-violet-500/30">
                    Stay tuned 👀
                    </span>

                    <div>
                        <Link to="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors group ">
                        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform"/>
                        <span>Back to Home</span>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default BlogPage;