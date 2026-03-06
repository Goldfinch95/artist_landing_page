export interface SocialCard {
  id: string;
  platform: "youtube" | "instagram" | "pinterest";
  icon: string;
  label: string;
  title: string;
  description: string;
  cta: string;
  url: string;
  image: string;
  color: string;
  tagColor: string;
}

export interface SocialData {
  tagline: string;
  cards: SocialCard[];
  youtubeVideoId: string;
}