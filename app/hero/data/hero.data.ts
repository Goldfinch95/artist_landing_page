import { HeroTab } from "../types/hero.types";

export const HERO_TABS: HeroTab[] = [
  {
    id: "workshops",
    label: "Sobre mi",
    bg: "#6B1A38",
    bgImage:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?w=1400&q=80",
    title: "Mi Pasión\npor la\nPintura",
    subtitle: `Con años de experiencia en diversas técnicas, exploro paisajes, retratos y pintura de caballete con un estilo propio.  
Mis obras han sido publicadas en revistas como Ediciones Bienvenidas, y cada creación refleja mi técnica y dedicación que luego comparto con mis alumnos.`,
    btnLabel: "Ver mis obras",
    linkLabel: "saber más",
  },
  {
    id: "parties",
    label: "Taller Creativo",
    bg: "#0d3d35",
    bgImage:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=1400&q=80",
    title: "Donde Nace\nla\nCreatividad.",
    subtitle: `En Mi Taller, cada alumno desarrolla su creatividad en un espacio cálido y guiado.  
Cada obra es única y refleja su esfuerzo y talento.  
Aprenden técnica y disfrutan creando en comunidad.`,
    btnLabel: "Ver trabajos de los alumnos",
    linkLabel: "Inspirarme",
  },
];

export const IMAGES_LEFT: string[] = [
  "/hero_paints/Africana.webp",
  "/hero_paints/Delicada_Esencia.webp",
  "/hero_paints/Frutera_De_Cristal.webp",
  "/hero_paints/Caballito_Blanco.webp",
  "/hero_paints/Callecita_De_Málaga.webp",
  "/hero_paints/Flores_Blancas.webp",
];

export const IMAGES_RIGHT: string[] = [
  "/hero_paints/Mi_Chica_Triste.webp",
  "/hero_paints/Taller_De_Arte.webp",
  "/hero_paints/El_Sombrero_Rojo.webp",
  "/hero_paints/Pies_Danzantes.webp",
  "/hero_paints/Atardecer_En_El_Campo.webp",
  "/hero_paints/Cataratas.webp",
];

export const BLOB_SETS: string[][] = [
  ["#FFB3C1", "#A8D8EA", "#B5EAD7", "#FFDAC1"],
  ["#B5EAD7", "#FFDAC1", "#FFB3C1", "#A8D8EA"],
  ["#A8D8EA", "#B5EAD7", "#FFDAC1", "#FFB3C1"],
  ["#FFDAC1", "#FFB3C1", "#A8D8EA", "#B5EAD7"],
  ["#FFB3C1", "#B5EAD7", "#A8D8EA", "#FFDAC1"],
  ["#A8D8EA", "#FFDAC1", "#FFB3C1", "#B5EAD7"],
];

// Card dimensions
export const CARD_WIDTH = 260;
export const CARD_HEIGHT = 380;
export const CARD_GAP = 16;
