import { NavItem, MegaCategoryCard, BottomLink } from "../types/nav.types";

export const NAV_ITEMS: NavItem[] = [
  {
    id: "talleres",
    lines: ["Talleres", "& Cursos"],
    iconName: "Hand",
    iconColor: "#1DAB8E",
  },
  {
    id: "cafes",
    lines: ["Arte &", "Pinturas"],
    iconName: "Coffee",
    iconColor: "#1DAB8E",
  },
  {
    id: "fiestas",
    lines: ["Acerca", "de mi"],
    iconName: "Sparkles",
    iconColor: "#1DAB8E",
  },
  {
    id: "sedes",
    lines: ["Nuestra", "sede"],
    iconName: "MapPin",
    iconColor: "#1DAB8E",
  },
  /*{
    id: "membresias",
    lines: ["Precios", ""],
    iconName: "Crown",
    iconColor: "#D4820A",
  },*/
];

/* ── TALLERES ── */
export const TALLERES_CATEGORIES: MegaCategoryCard[] = [
  {
    title: "Técnicas de Pintura Tradicional",
    bg: "#9fcb9c",
    tags: [
      "Tecnicatura country",
      "Tecnicatura en pinceladas",
      "Tecnicatura en acuarelas",
      "Hiperrealismo en Color",
    ],
  },
  {
    title: "Explora el Arte Abstracto y Moderno",
    bg: "#C4B5F4",
    tags: [
      "Tecnicatura en Pintura Abstracta",
      "Hiperrealismo en Monocromo",
      "Mix Media",
    ],
  },
  {
    title: "Técnicas Avanzadas y Especializadas",
    bg: "#daf4d8",
    tags: [
      "Tecnicatura textil",
      "Hiperrealismo en Color",
    ],
  },
  {
    title: "Proyectos y Cursos de Aplicación Práctica",
    bg: "#FFD6E0",
    tags: [
      "Cursos de graffiti",
      "Boceto urbano",
    ],
  },
];

export const TALLERES_BOTTOM_LINKS: BottomLink[] = [
  { label: "6 Formas de ser artista", sub: "Todas las ofertas en un lugar" },
  { label: "Ver calendario", sub: "Todos los talleres y cursos" },
  { label: "Preguntas frecuentes", sub: "Tus preguntas, nuestras respuestas" },
];

export const TALLERES_HERO_TAGS = [
  "Dibujo y pintura",
  "Pintura Decorativa",
  "Mix Media",
  "Tecnicatura en Paisajismo",
  "Tecnicatura en Pintura Abstracta",
];

/* ── CAFÉS ── */
export const CAFES_LOCATIONS: MegaCategoryCard[] = [
  {
    title: "CAFÉ CREATIVO\nBUENOS AIRES",
    bg: "#A8F0D0",
    tags: [
      "Pintura cerámica",
      "Comida & bebidas",
      "Fiestas pequeñas",
      "Eventos comunitarios BA",
      "Reservar mesa",
    ],
  },
  {
    title: "ESTUDIO CERÁMICA\nCÓRDOBA",
    bg: "#FFD6E0",
    tags: ["Pintura cerámica", "Fiestas pequeñas", "Reservar mesa"],
  },
];

export const CAFES_BOTTOM_LINKS: BottomLink[] = [
  { label: "Revisá tu cerámica", sub: "¿Lista para buscar?" },
  { label: "Eventos comunitarios", sub: "" },
];

/* ── FIESTAS ── */
export const FIESTAS_CATEGORIES: MegaCategoryCard[] = [
  { title: "TEAM BUILDING", bg: "#FFB8C6", tags: [] },
  { title: "FIESTA DE COLOREAR", bg: "#C4B5F4", tags: [] },
  { title: "FIESTA INFANTIL", bg: "#A8F0D0", tags: [] },
  { title: "EVENTOS VIRTUALES", bg: "#A8F0D0", tags: [] },
  { title: "ACTION PAINTING", bg: "#FFB8A0", tags: [] },
  { title: "DESPEDIDA DE SOLTERA", bg: "#FFD6E0", tags: [] },
];

export const FIESTAS_BOTTOM_LINKS: BottomLink[] = [
  { label: "Planificador de eventos", sub: "Creá un presupuesto paso a paso" },
  { label: "Contactanos", sub: "Estamos para ayudarte" },
];

/* ── SEDES ── */
export const SEDES_LOCATIONS = [
  {
    title: "PIE BUENOS AIRES",
    tags: [
      "Café Creativo BA",
      "Estudio de Pintura BA",
      "Estudio de Cerámica BA",
      "Estudio Infantil BA",
    ],
    btn: "Explorar PIE Buenos Aires",
    bg: "linear-gradient(160deg,#2a2a2a,#3a3030)",
  },
  {
    title: "PIE CÓRDOBA",
    tags: [
      "Estudio Cerámica Córdoba",
      "Estudio Pintura Córdoba",
      "Estudio Cerámica Córdoba",
    ],
    btn: "Explorar PIE Córdoba",
    bg: "linear-gradient(160deg,#1a2a40,#2a1a3a)",
  },
];

export const SEDES_BOTTOM_LINKS: BottomLink[] = [
  { label: "Contactanos", sub: "Estamos para ayudarte" },
  { label: "Nuestro equipo", sub: "Las personas detrás de PIE" },
];

/* ── MEMBRESÍAS ── */
export const MEMBRESIAS_CARDS = [
  { title: "VOUCHERS", bg: "#B5EFC8", emoji: "🎁", btn: "Comprar vouchers" },
  {
    title: "MEMBRESÍAS",
    bg: "#C4D4F0",
    emoji: "💳",
    btn: "Descubrir membresías",
  },
  {
    title: "CAJAS DE REGALO",
    bg: "#FFD6E0",
    emoji: "🎨",
    btn: "Comprar caja de regalo",
  },
];

export const MEMBRESIAS_BOTTOM_LINKS: BottomLink[] = [
  { label: "Recargar crédito", sub: "Cargá crédito a tu tarjeta de membresía" },
  { label: "Consultar saldo", sub: "¿Cuánto crédito te queda?" },
];

export const STUDENTS_PAINTS = [
  "/students_paints/María_Del_Rosario.webp",
  "/students_paints/Ayeza.webp",
  "/students_paints/Agostina.webp",
  "/students_paints/Carmen.webp",
  "/students_paints/Edith.webp",
  "/students_paints/Celeste.webp",
  "/students_paints/Fabiana.webp",
  "/students_paints/Cecilia_K.webp",
];
