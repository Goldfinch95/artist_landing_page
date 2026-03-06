"use client";

import { Navbar } from "@/app/navbar/components/Navbar";
import { Hero }   from "@/app/hero/components/Hero";
import { useNavbar } from "./navbar/hooks/use_nav";
import { Social } from "@/app/social/components/social_section";

export default function Home() {
  const { openMenu, toggleMenu, closeMenu } = useNavbar();

  return (
    <main>
      <Navbar openMenu={openMenu} toggleMenu={toggleMenu} closeMenu={closeMenu} />
      <Hero />
      <Social />
    </main>
  );
}
