import { VideoGrid } from "@/components/VideoGrid";
import { shorts } from "@/data/videos";

export default function ShortsPage() {
  return (
    <div className="pt-32 pb-20 bg-[#FFDE59] min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl md:text-9xl brutalist-heading mb-12">
          <span className="bg-black text-[#FFDE59] px-6 py-2 border-4 border-black shadow-brutalist">
            SHORTS
          </span>
        </h1>
        <p className="text-2xl font-black uppercase mb-12 max-w-3xl text-black">
          High-retention vertical content designed for Instagram Reels, TikTok, and YouTube Shorts.
        </p>
        <VideoGrid videos={shorts} type="short" />
      </div>
    </div>
  );
}
