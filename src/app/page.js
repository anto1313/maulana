import Navbar from "@/components/navbar";
import { Github, Link, Linkedin, X } from "lucide-react";



export default function Page() {
  return (
    <>
    <Navbar/>
    
    <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
      <div className="h-[30-rem] rounded-3xl p-10 flex flex-col gap-16 bg-[url('/bg-body.jpg')] bg-cover shadow-md">
        <h1 className="text-4xl text-black font-semibold font-roboto">Hello, i am a fullstack developer wanna be 👋🏼</h1>
        <p className="text-amber-50 font-sans font-light flex-1 text-lg">
          I like something about design especially front end things 
          i do enjoy seeing beautiful things wrapped in arts.
        </p>
        
     </div>
    <div className="h-[30-rem] border-2 border-zinc-300 shadow-md rounded-3xl p-8 bg-[url('/icon2.jpg')] bg-cover bg-center" />
    
    
    
    </section>
    <section className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr_3fr] gap-2 mb-2">
      <div className="h-[25-rem] items-center rounded-3xl p-10 flex flex-col gap-16 border-2 border-zinc-300 bg-gradient-to-r from-cyan-50 to-blue-700 shadow-md"><a href="https://twitter.com/suprimmmmmmm" target="blank"><X size={48} strokeWidth={1.5} color="#ffffff" /></a></div>
      <div className="h-[25-rem] items-center rounded-3xl p-10 flex flex-col gap-16 border-2 border-zinc-300 bg-amber-50 shadow-md"><a href="https://www.linkedin.com/in/supriyanto-maulana-03225a132/" target="blank"><Linkedin size={48} strokeWidth={1.5} color="#666666" /></a></div>
      <div className="h-[25-rem] items-center rounded-3xl p-10 flex flex-col gap-16 border-2 border-zinc-300 bg-amber-50 shadow-md"><a href="https://github.com/anto1313" target="blank"><Github size={48} strokeWidth={1.5} color="#666666" /></a></div>
    <div className="h-[25-rem] items-center rounded-3xl p-10 flex flex-col gap-16 border-2 border-zinc-300 bg-[url('/bg-body.jpg')] bg-cover shadow-md" >
      <p className="font-semibold text-lg text-zinc-600 text-center">Let's do some collaboration 🟢
      my tech stack are :<span className="text-sm text-gray-500 font-light text-center"> HTML,CSS,Tailwind,Javascript,NextJS and Some Backend 🤯.</span> </p>
    </div>
   
     </section>
     <section className="grid grid-cols lg:grid-cols-[1fr_1fr_1fr] gap-2 mb-2">
      <div className="h-[45-rem] rounded-3xl p-10 flex flex-col gap-16 border-2 border-zinc-300">A</div>
      <div className="h-[45-rem] rounded-3xl p-10 flex flex-col gap-16 border-2 border-zinc-300">B</div>
      <div className="h-[45-rem] rounded-3xl p-10 flex flex-col gap-16 border-2 border-zinc-300">B</div>
     </section>
    </>
  );
}
