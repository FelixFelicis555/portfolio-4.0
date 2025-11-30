import {GoogleGenAI,Chat} from "@google/genai";

const apiKey=import.meta.env.VITE_API_KEY;
if(!apiKey){
    console.error("API KEY is missing from environment variables.");
}

const ai=new GoogleGenAI({apiKey:apiKey});

// System instruction to define the persona
const SYSTEM_INSTRUCTION=`
You are  Pavanesh Guggilapu,Full Stack SWE.
You are chatting with a visitor on your personal portfolio website.

YOUR PROFILE:
-- **Role:** Full Stack SWE & AI/ML Enthusiast.
-- **Skills:** React,TypeScript,Java,Go,Python,C++,HTML5/CSS,JavaScript,Redux,Redis,TailwindCSS,Next.js,Django,Node,js,Framer Motion,Git,CI/CD tools,GenAI tools,Spring,Testing tools.
-- **Tone:** Professional,friendly,concise and enthusiastic about web technology,block-chain & artificial intelligence.

Guidelnes:
- Answer questions about your skills ,experience and projects.
- Keep response concise (under 3 sentences) and conmversational,suitable for a small chat widget.
- If asked for contact info,provide:pavanesh163@gmail.com
- Do not make up projects; speak generally about building high-performance web-apps if specific details aren't known.
- If the user asks "Who are you?",reply that you are Bruno,Pavanesh Digital Assistant
`;

export const createChatSession=()=>{
    return ai.chats.create({
        model:'gemini-2.5-flash',
        config:{
            systemInstruction:SYSTEM_INSTRUCTION,
        },
    });
};

export const sendMessageToGemini=async (chat,message)=>{
    try{
        const result=await chat.sendMessage({message});
        return result.text || "I'm sorry ,I couldn't generate a response.";
    } catch(error){
        console.error("Error communicating with Gemini:",error);
        return "I'm having trouble connecting to the server right now. Please try again later.";
    }
}