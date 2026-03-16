export const products = [
  {
    id: 1,
    slug: "saturate-pack-demo",
    name: "SATURATE PACK - DEMO",
    price: 0.0,
    description: "Free demo version to try basic features",
    features: ["Limited assets", "Watermarked", "Basic functionality"],
    status: "coming-soon",
    shortTagline: "Try the basics before you buy.",
    heroImage:
      "https://placehold.co/1200x675/000000/FFFFFF?text=SATURATE+DEMO",
    gallery: [
      "https://placehold.co/600x338/000000/FFFFFF?text=Preview+1",
      "https://placehold.co/600x338/111111/FFFFFF?text=Preview+2",
    ],
  },
  {
    id: 2,
    slug: "saturate-pack-beginner",
    name: "SATURATE PACK - BEGINNER",
    price: 15.0,
    description: "Perfect for those starting with thumbnail design",
    features: ["Extended asset library", "No watermark", "Beginner-friendly"],
    status: "coming-soon",
    shortTagline: "Kickstart your thumbnail game.",
    heroImage:
      "https://placehold.co/1200x675/18181B/FFFFFF?text=SATURATE+BEGINNER",
    gallery: [
      "https://placehold.co/600x338/18181B/FFFFFF?text=Preset+examples",
      "https://placehold.co/600x338/27272A/FFFFFF?text=Before+%2F+After",
    ],
  },
  {
    id: 3,
    slug: "saturate-pack-pro",
    name: "SATURATE PACK - PRO",
    price: 50.0,
    description: "Everything you need for professional thumbnails",
    features: ["Complete asset collection", "Advanced tools", "Regular updates"],
    status: "coming-soon",
    shortTagline: "Your full professional toolkit.",
    heroImage:
      "https://placehold.co/1200x675/020617/FFFFFF?text=SATURATE+PRO",
    gallery: [
      "https://placehold.co/600x338/020617/FFFFFF?text=High-end+PSD",
      "https://placehold.co/600x338/0F172A/FFFFFF?text=Workflow+preview",
    ],
  },
  {
    id: 4,
    slug: "advanced-psd-pack-1",
    name: "ADVANCED PSD PACK 1",
    price: 30.0,
    description: "Two advanced PSD templates for professional creators",
    features: ["2 premium PSDs", "Fully layered", "Customizable elements"],
    status: "coming-soon",
    shortTagline: "Advanced layouts for standout thumbnails.",
    heroImage:
      "https://placehold.co/1200x675/020617/FFFFFF?text=ADVANCED+PSD+1",
    gallery: [
      "https://placehold.co/600x338/020617/FFFFFF?text=Template+overview",
      "https://placehold.co/600x338/111827/FFFFFF?text=Layer+structure",
    ],
  },
  {
    id: 5,
    slug: "advanced-psd-pack-2",
    name: "ADVANCED PSD PACK 2",
    price: 30.0,
    description: "Two more advanced PSD templates for stunning thumbnails",
    features: ["2 premium PSDs", "Smart objects", "Multiple variants"],
    status: "coming-soon",
    shortTagline: "More variety for pro designers.",
    heroImage:
      "https://placehold.co/1200x675/020617/FFFFFF?text=ADVANCED+PSD+2",
    gallery: [
      "https://placehold.co/600x338/020617/FFFFFF?text=Variant+1",
      "https://placehold.co/600x338/111827/FFFFFF?text=Variant+2",
    ],
  },
  {
    id: 6,
    slug: "basic-psd-pack-1",
    name: "BASIC PSD PACK 1",
    price: 15.0,
    description: "Simple but effective PSD templates for beginners",
    features: ["2 basic PSDs", "Easy to customize", "Clear instructions"],
    status: "coming-soon",
    shortTagline: "Perfect starting point for new creators.",
    heroImage:
      "https://placehold.co/1200x675/111827/FFFFFF?text=BASIC+PSD+1",
    gallery: [
      "https://placehold.co/600x338/111827/FFFFFF?text=Clean+layout",
      "https://placehold.co/600x338/1F2937/FFFFFF?text=Customizable+text",
    ],
  },
  {
    id: 7,
    slug: "basic-psd-pack-2",
    name: "BASIC PSD PACK 2",
    price: 15.0,
    description: "More straightforward templates for quick thumbnails",
    features: ["2 basic PSDs", "Minimal layers", "Quick setup"],
    status: "coming-soon",
    shortTagline: "Fast results with minimal effort.",
    heroImage:
      "https://placehold.co/1200x675/111827/FFFFFF?text=BASIC+PSD+2",
    gallery: [
      "https://placehold.co/600x338/111827/FFFFFF?text=Thumbnail+grid",
      "https://placehold.co/600x338/1F2937/FFFFFF?text=Preset+colorways",
    ],
  },
]

export const findProductBySlug = (slug) =>
  products.find((product) => product.slug === slug)

