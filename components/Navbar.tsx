"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { name: "HOME", href: "/" },
    { name: "LONG FORM", href: "/videos" },
    { name: "SHORTS", href: "/shorts" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 p-6 flex justify-center">
      <div className="bg-white border-4 border-black shadow-brutalist flex overflow-hidden">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "px-6 py-2 font-black uppercase transition-colors border-r-4 last:border-r-0 border-black",
              pathname === link.href ? "bg-[#FFDE59]" : "hover:bg-[#FFDE59]/50"
            )}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};
