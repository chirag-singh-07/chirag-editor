"use client";

import { Button } from "@/components/Button";
import { BeforeAfterSlider } from "@/components/BeforeAfterSlider";
import { VideoGrid } from "@/components/VideoGrid";
import { Video, Palette, Zap, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { shorts, featured } from "@/data/videos";
import Link from "next/link";

export default function Home() {
  const services = [
    {
      title: "VIDEO EDITING",
      icon: <Video className="w-8 h-8" />,
      desc: "Professional cuts and cinematic flow.",
    },
    {
      title: "COLOR GRADING",
      icon: <Palette className="w-8 h-8" />,
      desc: "Making your footage pop with premium looks.",
    },
    {
      title: "REELS / SHORTS",
      icon: <Zap className="w-8 h-8" />,
      desc: "Fast-paced, high-retention vertical content.",
    },
    {
      title: "YOUTUBE EDITING",
      icon: <Video className="w-8 h-8" />,
      desc: "Full channel management and storytelling.",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="container mx-auto px-4 pt-48 pb-20 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl md:text-8xl brutalist-heading mb-6 uppercase">
              I CREATE{" "}
              <span className="bg-[#FFDE59] px-4 shadow-[6px_6px_0px_black]">
                IMPACTFUL
              </span>{" "}
              VISUAL STORIES
            </h1>
            <p className="text-xl md:text-2xl font-black uppercase mb-10 tracking-tight bg-black text-white inline-block px-4 py-2 border-4 border-black shadow-brutalist">
              TRANSFORMING RAW FOOTAGE INTO HIGH-CONVERTING CINEMATIC
              EXPERIENCES.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <Link href="/videos">
                <Button className="w-full md:w-auto text-xl px-12 py-6">
                  VIEW MY WORK
                </Button>
              </Link>
              <Button
                variant="secondary"
                className="hover:bg-black hover:text-[#FFDE59] w-full md:w-auto text-xl px-12 py-6"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                HIRE ME
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-20 relative max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-[#FFDE59] translate-x-4 translate-y-4 border-4 border-black shadow-[8px_8px_0px_black]" />
            <img
              src="/hero.png"
              alt="Professional Video Editing"
              className="relative z-10 w-full border-4 border-black object-cover aspect-[21/9] grayscale hover:grayscale-0 transition-all duration-700"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. PREVIEW WORK */}
      <section id="work" className="py-20 bg-white border-y-4 border-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl brutalist-heading mb-12">
            <span className="bg-[#FFDE59] px-6 py-2 border-4 border-black shadow-brutalist uppercase">
              LATEST EDITS
            </span>
          </h2>
          <VideoGrid videos={featured.slice(0, 2)} type="long" />
          <Link href="/videos" className="inline-block mt-8">
            <Button
              variant="secondary"
              className="text-xl px-12 py-6 hover:bg-black hover:text-[#FFDE59]"
            >
              EXPLORE ALL VIDEOS →
            </Button>
          </Link>
        </div>
      </section>

      {/* 2.5 SHORTS PREVIEW */}
      <section className="py-20 bg-black text-white border-b-4 border-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-7xl brutalist-heading mb-12 text-[#FFDE59]">
            VERTICAL REELS
          </h2>
          <VideoGrid videos={shorts.slice(0, 8)} type="short" />
          <Link href="/shorts" className="inline-block mt-12">
            <Button className="text-xl px-12 py-6 bg-[#FFDE59] text-black hover:bg-white">
              VIEW ALL SHORTS →
            </Button>
          </Link>
        </div>
      </section>

      {/* 3. BEFORE / AFTER */}
      <section className="py-20 bg-white border-b-4 border-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-5xl md:text-7xl brutalist-heading mb-6">
                RAW VS{" "}
                <span className="text-[#FFDE59] bg-black px-2">EDITED</span>
              </h2>
              <p className="text-xl font-black uppercase mb-8">
                I don't just cut clips, I craft experiences.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "PRO COLOR GRADING",
                  "SEAMLESS TRANSITIONS",
                  "SOUND DESIGN & FOLEY",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 font-black">
                    <CheckCircle2 className="text-black bg-[#FFDE59] border-2 border-black p-1" />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full">
              <BeforeAfterSlider
                before="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop"
                after="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. TYPOGRAPHY SPOTLIGHT */}
      <section className="py-24 bg-[#FFDE59] border-b-4 border-black overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="text-[15rem] font-black leading-none rotate-12 -translate-x-20">
            TYPE TYPE TYPE TYPE
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <h2 className="text-7xl md:text-9xl brutalist-heading mb-8 leading-none">
                KINETIC{" "}
                <span className="bg-black text-[#FFDE59] px-4">TYPE</span>
              </h2>
              <div className="bg-white border-4 border-black p-8 shadow-brutalist relative">
                <div className="absolute -top-6 -right-6 bg-black text-white px-4 py-2 font-black rotate-3">
                  TOP TIER
                </div>
                <p className="text-2xl font-black uppercase leading-tight">
                  Motion design isn't just about moving images—it's about making
                  words <span className="underline decoration-8">SCREAM</span>.
                  I specialize in high-retention typography that keeps viewers
                  hooked until the last second.
                </p>
              </div>
              <div className="mt-12 flex gap-4">
                <div className="bg-black text-[#FFDE59] px-6 py-3 font-black text-xl border-4 border-black">
                  MOTION GRAPHICS
                </div>
                <div className="bg-white text-black px-6 py-3 font-black text-xl border-4 border-black shadow-[4px_4px_0px_black]">
                  RETENTION DRIVEN
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="relative group max-w-5xl mx-auto">
                <div className="absolute inset-0 bg-black translate-x-6 translate-y-6 border-4 border-white" />
                <div className="relative z-10 border-8 border-black shadow-brutalist-lg aspect-video w-full overflow-hidden bg-black">
                  <video
                    src="/videos/Core-Dev-Reel-1.mp4"
                    controls
                    autoPlay
                    muted
                    loop
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ABOUT CHIRAG SINGH */}
      <section className="py-24 bg-black text-white border-t-4 border-[#FFDE59]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-5/12">
              <div className="relative">
                <div className="absolute inset-0 bg-[#FFDE59] translate-x-6 translate-y-6 border-4 border-white shadow-[10px_10px_0px_rgba(255,222,89,0.5)]" />
                <img
                  src="/me1.png"
                  alt="Chirag Singh - Video Editor & Videographer"
                  className="relative z-10 w-full border-4 border-white grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
            <div className="w-full md:w-7/12 text-left">
              <h2 className="text-6xl md:text-8xl brutalist-heading mb-6 text-[#FFDE59]">
                CHIRAG SINGH
              </h2>
              <div className="space-y-6">
                <div className="bg-[#FFDE59] text-black border-4 border-white shadow-[10px_10px_0px_white] p-8">
                  <p className="text-xl font-black uppercase leading-tight">
                    Video Editor, Videographer, and Creative Storyteller with{" "}
                    <span className="bg-black text-white px-2">3+ YEARS</span>{" "}
                    of professional expertise.
                  </p>
                </div>

                <p className="text-lg font-bold uppercase leading-relaxed text-white/80">
                  Dedicated to creating high-converting videos that capture
                  attention. Experience includes the{" "}
                  <span className="text-[#FFDE59]">
                    EDUCATIONAL HIX YOUTUBE CHANNEL
                  </span>{" "}
                  and digital marketing agencies, focusing on everything from
                  high-quality professional shoots to final color grading and
                  motion graphics.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t-4 border-white/20">
                  {[
                    { label: "YEARS EXP", val: "3+" },
                    { label: "VIDEOS", val: "200+" },
                    { label: "CLIENTS", val: "50+" },
                    { label: "FOCUS", val: "ROI" },
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <span className="text-4xl font-black text-[#FFDE59]">
                        {stat.val}
                      </span>
                      <span className="font-bold uppercase tracking-widest text-[10px] opacity-70">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 bg-white text-black p-12 border-8 border-[#FFDE59] shadow-brutalist relative">
            <div className="absolute -top-10 left-10 bg-black text-white px-6 py-2 font-black text-2xl uppercase">
              MY VISION
            </div>
            <p className="text-2xl font-black uppercase leading-snug">
              "TO TURN IDEAS INTO IMPACTFUL VISUAL EXPERIENCES THAT HELP BRANDS
              AND CREATORS GROW IN TODAY’S FAST-PACED DIGITAL WORLD."
            </p>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIALS */}
      <section className="py-24 bg-white border-t-4 border-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-8xl brutalist-heading mb-16 text-center leading-none">
            CLIENT{" "}
            <span className="bg-[#FFDE59] px-4 shadow-brutalist border-4 border-black">
              RESULTS
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                text: "Chirag did an amazing job editing our promotional videos. The quality, creativity, and attention to detail were outstanding. His work helped us present our brand in a much more professional and engaging way.",
                client: "Poojara Phones",
                label: "RETAIL BRAND",
              },
              {
                text: "Working with Chirag for our YouTube channel was a great experience. He understands content flow and audience retention very well. His editing made our educational videos more engaging and easy to follow.",
                client: "Educational Hix (YouTube)",
                label: "200K+ SUBS",
              },
              {
                text: "Chirag created high-quality Instagram reels for us that significantly improved our engagement. His editing style is modern, fast-paced, and perfectly suited for social media growth.",
                client: "SkillPaisa (Instagram)",
                label: "INSTAGRAM GROWTH",
              },
              {
                text: "Chirag is a highly skilled video editor and videographer. He handled both shooting and editing for our clients’ projects with professionalism and creativity. A reliable and talented person to work with.",
                client: "Burhani Socials",
                label: "MARKETING AGENCY",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-[#FFDE59] border-4 border-black p-8 shadow-brutalist-lg relative group transition-transform hover:-translate-y-2"
              >
                <div className="absolute -top-6 -left-4 text-7xl font-black text-black leading-none opacity-20">
                  "
                </div>
                <p className="text-xl font-black uppercase leading-tight mb-8 relative z-10 italic">
                  {t.text}
                </p>
                <div className="flex items-center justify-between border-t-4 border-black pt-4">
                  <div>
                    <h4 className="text-lg font-black uppercase">{t.client}</h4>
                    <span className="text-[10px] font-bold bg-black text-white px-2 py-0.5 uppercase tracking-widest">
                      {t.label}
                    </span>
                  </div>
                  <CheckCircle2 className="w-8 h-8 text-black" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section
        id="contact"
        className="py-32 bg-[#FFDE59] border-t-4 border-black"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-6xl md:text-9xl brutalist-heading mb-12 text-black leading-none">
            READY TO SCALE?
          </h2>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <a href="https://wa.me/917048734139" target="_blank">
              <Button className="bg-black text-[#FFDE59] hover:bg-white hover:text-black text-2xl px-12 py-8">
                WHATSAPP
              </Button>
            </a>
            <a href="mailto:videoeditorchirag@gmail.com" target="_blank">
              <Button className="bg-white text-black hover:bg-black hover:text-[#FFDE59] text-2xl px-12 py-8 shadow-brutalist">
                EMAIL ME
              </Button>
            </a>
          </div>
          {/* <div className="inline-block bg-black text-white px-8 py-4 border-4 border-white shadow-brutalist font-black text-2xl md:text-4xl">
            videoeditorchirag@gmail.com
          </div> */}
        </div>
      </section>
    </main>
  );
}
