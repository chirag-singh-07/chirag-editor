"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Video {
  id: string;
  title: string;
  description?: string;
  url: string;
  type?: string;
}

export const VideoGrid = ({ videos, type }: { videos: Video[], type: "short" | "long" }) => {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  return (
    <div className="py-20">
      <div className={cn(
        "grid gap-8",
        type === "short" ? "grid-cols-2 md:grid-cols-4" : "grid-cols-1 md:grid-cols-2"
      )}>
        {videos.map((video, idx) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <Card 
              className="group cursor-pointer overflow-hidden p-0 h-full flex flex-col border-4 border-black shadow-brutalist-lg transition-transform hover:-translate-y-2"
              onClick={() => setSelectedVideo(video)}
            >
              <div className={cn(
                "relative overflow-hidden border-b-4 border-black bg-black",
                type === "short" ? "aspect-[9/16]" : "aspect-video"
              )}>
                {/* Check if thumbnail is provided (YouTube) or use auto-fetch for local videos */}
                {video.thumbnail ? (
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
                  />
                ) : (
                  <video 
                    src={`${video.url}#t=0.5`} 
                    preload="metadata"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100"
                  />
                )}
                
                <div className="absolute inset-0 bg-[#FFDE59]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="bg-[#FFDE59] p-6 border-4 border-black shadow-brutalist transform scale-0 group-hover:scale-100 transition-transform">
                    {type === "short" ? <Zap className="w-8 h-8 fill-black" /> : <Play className="w-10 h-10 fill-black" />}
                  </div>
                </div>
                
                {type === "short" && (
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="bg-black text-[#FFDE59] px-2 py-1 font-black text-xs border-2 border-[#FFDE59]">REEL</span>
                  </div>
                )}
              </div>
              <div className="p-6 flex-1 bg-white">
                <h3 className="text-2xl font-black uppercase mb-2">{video.title}</h3>
                {video.description && (
                  <p className="font-bold uppercase tracking-tight text-sm text-gray-700">{video.description}</p>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className={cn(
                "bg-black border-4 border-[#FFDE59] relative shadow-[15px_15px_0px_rgba(255,222,89,1)]",
                type === "short" ? "w-[350px] aspect-[9/16]" : "w-full max-w-5xl aspect-video"
              )}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedVideo(null)}
                className="absolute -top-14 right-0 text-[#FFDE59] font-black hover:text-white flex items-center gap-2 uppercase text-xl"
              >
                CLOSE [X]
              </button>
              
              {selectedVideo.url.startsWith("http") ? (
                <iframe
                  src={`${selectedVideo.url}?autoplay=1`}
                  className="w-full h-full"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <video 
                  src={selectedVideo.url} 
                  controls 
                  autoPlay 
                  className="w-full h-full object-contain bg-black"
                />
              )}

              <div className="absolute -bottom-24 left-0 text-[#FFDE59] w-full flex justify-between items-end bg-black border-4 border-[#FFDE59] p-4 shadow-brutalist">
                <div>
                  <h3 className="text-2xl font-black uppercase leading-none mb-1">{selectedVideo.title}</h3>
                  <p className="uppercase text-xs font-bold opacity-80">{selectedVideo.description || "Portfolio Content"}</p>
                </div>
                <div className="bg-[#FFDE59] text-black px-4 py-2 font-black border-2 border-black">
                  {type === "short" ? "VERTICAL REEL" : "CINEMATIC"}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
