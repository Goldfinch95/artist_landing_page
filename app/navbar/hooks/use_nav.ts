"use client";
import { useState, useCallback } from "react";
import { NavItemId } from "../types/nav.types";

export function useNavbar() {
  const [openMenu, setOpenMenu] = useState<NavItemId | null>(null);

  const toggleMenu = useCallback((id: NavItemId) => {
    setOpenMenu((prev) => (prev === id ? null : id));
  }, []);

  const closeMenu = useCallback(() => {
    setOpenMenu(null);
  }, []);

  return { openMenu, toggleMenu, closeMenu };
}
