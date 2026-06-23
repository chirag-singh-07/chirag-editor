"use client";

import { motion } from "framer-motion";

const photographyImages = [
  "/images/SaveClip.App_614587776_17858719926592460_3032298527910976435_n.jpg",
  "/images/SaveClip.App_616048798_17858719839592460_6464278475558106308_n.jpg",
  "/images/SaveClip.App_616435966_17858719812592460_3385373303241657511_n.jpg",
  "/images/SaveClip.App_616574567_17858719821592460_8998132243722774531_n.jpg",
  "/images/SaveClip.App_616818538_17858719830592460_860388173867509473_n.jpg",
  "/images/SaveClip.App_628323254_17862043881592460_659820722718610903_n.jpg",
  "/images/SaveClip.App_629604922_17862043872592460_3142088521257080878_n.jpg",
  "/images/SaveClip.App_630009758_17862043890592460_8291883071096061612_n.jpg",
];

export function PhotographyGallery() {
  return (
    <section id="photography" className="py-20 bg-[#FFDE59] border-y-4 border-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl brutalist-heading mb-6 text-black">
            FREELANCE <span className="bg-black text-[#FFDE59] px-4 py-2 border-4 border-black shadow-[6px_6px_0px_black] uppercase">PHOTOGRAPHY</span>
          </h2>
          <p className="text-xl md:text-2xl font-black uppercase tracking-tight bg-white text-black inline-block px-4 py-2 border-4 border-black shadow-brutalist">
            CAPTURING MOMENTS WITH A CINEMATIC EYE.
          </p>
        </div>

        {/* Pinterest style masonry layout */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
          {photographyImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid relative group border-4 border-black shadow-brutalist bg-white"
            >
              <img
                src={src}
                alt={`Photography ${index + 1}`}
                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
