export interface HeroForm {
  photos: string[];
  videoData: { link: string; videoPlatform: { label: string; value: string } };
  hero: { label: string; value: string };
  portada: { label: number; value: number };
}
