import { HeroTab } from "../types/hero.types";

export const HERO_TABS: HeroTab[] = [
  {
    id: "workshops",
    label: "Workshops & Courses",
    bg: "#6B1A38",
    bgImage: "https://images.unsplash.com/photo-1504502350688-00f5d59bbdeb?w=1400&q=80",
    title: "A SPACE FOR ALL\nTHINGS\nCREATIVE!",
    subtitle:
      "Creative workshops, cozy Creative Cafés, and inspiring community events – for all ages and every level.",
    btnLabel: "PIE Course calendar",
    linkLabel: "Our Creative Cafés",
  },
  {
    id: "parties",
    label: "Private parties & events",
    bg: "#0d3d35",
    bgImage: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1400&q=80",
    title: "PRIVATE EVENTS\nWITH A\nCREATIVE TWIST.",
    subtitle:
      "We bring the paint, the tools, and the spark — you bring the people. Perfect for team outings, birthdays, or just a reason to gather.",
    btnLabel: "Plan your event",
    linkLabel: "Let yourself be inspired",
  },
];

export const IMAGES_LEFT: string[] = [
  "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=400&q=80",
  "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80",
  "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&q=80",
  "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=400&q=80",
  "https://images.unsplash.com/photo-1596548438137-d51ea5c83ca5?w=400&q=80",
  "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&q=80",
];

export const IMAGES_RIGHT: string[] = [
  "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?w=400&q=80",
  "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&q=80",
  "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80",
  "https://images.unsplash.com/photo-1580136579312-94651dfd596d?w=400&q=80",
  "https://images.unsplash.com/photo-1544967082-d9d25d867d66?w=400&q=80",
  "https://images.unsplash.com/photo-1509909756405-be0199881695?w=400&q=80",
];

export const BLOB_SETS: string[][] = [
  ["#FFB3C1", "#A8D8EA", "#B5EAD7", "#FFDAC1"],
  ["#B5EAD7", "#FFDAC1", "#FFB3C1", "#A8D8EA"],
  ["#A8D8EA", "#B5EAD7", "#FFDAC1", "#FFB3C1"],
  ["#FFDAC1", "#FFB3C1", "#A8D8EA", "#B5EAD7"],
  ["#FFB3C1", "#B5EAD7", "#A8D8EA", "#FFDAC1"],
  ["#A8D8EA", "#FFDAC1", "#FFB3C1", "#B5EAD7"],
];

export const CARD_WIDTH  = 280;
export const CARD_HEIGHT = 434;
export const CARD_GAP    = 16;