export type GalleryItem = {
  id: string;
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Desktop placement as % of the 1440 × 1285 composition measured from Home.png. */
  x: number;
  y: number;
  w: number;
};

const W = 1440;
const H = 1285;
const pct = (v: number, total: number) => Number(((v / total) * 100).toFixed(3));

type Spec = Omit<GalleryItem, "x" | "y" | "w"> & { px: number; py: number; pw: number };

const specs: readonly Spec[] = [
  { id: "gallery-1", src: "/images/Scroll-full/sf1.png", width: 250, height: 375, alt: "Bride standing inside a white-columned garden pavilion", px: 210, py: 111, pw: 250 },
  { id: "gallery-2", src: "/images/Scroll-full/sf3.png", width: 280, height: 420, alt: "Couple on a hillside pavilion beside an infinity pool", px: 615, py: 232, pw: 280 },
  { id: "gallery-3", src: "/images/Scroll-full/sf5.png", width: 287, height: 431, alt: "Bride seen through a window in a warmly lit, dark interior", px: 963, py: 55, pw: 287 },
  { id: "gallery-4", src: "/images/Scroll-full/sf6.png", width: 321, height: 482, alt: "Couple embracing in front of a weathered door framed by leaves", px: 226, py: 603, pw: 321 },
  { id: "gallery-5", src: "/images/Scroll-full/sf4.png", width: 301, height: 451, alt: "Couple seated together on a garden swing among trees", px: 625, py: 760, pw: 301 },
  { id: "gallery-6", src: "/images/Scroll-full/sf2.png", width: 250, height: 375, alt: "Bride in a pink sari standing in a white-columned pavilion", px: 963, py: 572, pw: 250 },
];

/**
 * Home.png shows six tiles (the brief says seven, but only sf1–sf6 exist);
 * see DESIGN.md §11.
 */
export const galleryItems: readonly GalleryItem[] = specs.map(
  ({ px, py, pw, ...item }) => ({
    ...item,
    x: pct(px, W),
    y: pct(py, H),
    w: pct(pw, W),
  }),
);

export const galleryAspect = `${W} / ${H}`;
