import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-12 bg-black text-white border-t-4 border-[#FFDE59]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-3xl font-black uppercase tracking-tighter">
          CHIRAG<span className="text-[#FFDE59]">SINGH</span>
        </div>
        
        <div className="flex gap-12 font-black uppercase text-sm tracking-widest">
          <Link href="/" className="hover:text-[#FFDE59] transition-colors">HOME</Link>
          <Link href="/videos" className="hover:text-[#FFDE59] transition-colors">VIDEO</Link>
          <Link href="/shorts" className="hover:text-[#FFDE59] transition-colors">SHORTS</Link>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2">
           <a href="mailto:videoeditorchirag@gmail.com" className="text-[#FFDE59] font-black hover:underline">
             videoeditorchirag@gmail.com
           </a>
           <a href="https://wa.me/917048734139" target="_blank" className="text-white font-black hover:text-[#FFDE59]">
             PH: +91 70487 34139
           </a>
           <div className="text-[10px] font-bold uppercase opacity-50 tracking-widest mt-2">
             © 2024 PORTFOLIO / NEO-BRUTALIST DESIGN
           </div>
        </div>
      </div>
    </footer>
  );
};
