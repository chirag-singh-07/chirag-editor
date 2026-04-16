import { VideoGrid } from "@/components/VideoGrid";
import { featured } from "@/data/videos";

export default function LongFormPage() {
  return (
    <div className="pt-32 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-6xl md:text-9xl brutalist-heading mb-12">
          <span className="bg-[#FFDE59] px-6 py-2 border-4 border-black shadow-brutalist">
            LONG FORM
          </span>
        </h1>
        <p className="text-2xl font-black uppercase mb-12 max-w-3xl">
          Cinematic storytelling, professional color grading, and seamless pacing.
          Hover to preview, click to watch full edit.
        </p>
        <VideoGrid videos={featured} type="long" />
      </div>
    </div>
  );
}
