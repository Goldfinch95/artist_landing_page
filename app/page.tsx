"use client";

import { Navbar } from "@/app/navbar/components/Navbar";
import { Hero }   from "./hero/components/Hero";
import { useNavbar } from "./navbar/hooks/use_nav";

export default function Home() {
  const { openMenu, toggleMenu, closeMenu } = useNavbar();

  return (
    <main>
      <Navbar openMenu={openMenu} toggleMenu={toggleMenu} closeMenu={closeMenu} />
      <Hero />
    </main>
  );
}
