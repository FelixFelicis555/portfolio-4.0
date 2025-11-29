import React,{useState} from 'react';
import Navigation from './Navigation';
import Footer from "./Footer";
import Chatbot from './Chatbot';

const Layout=({children})=>{
    const [isChatOpen,setIsChatOpen]=useState(false);
    return (
        <div className="relative bg-[#030303] min-h-screen">
            <Navigation/>
            <Chatbot isOpen={isChatOpen} setIsOpen={setIsChatOpen}/>
            <main className="pt-20">
                {children}
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;