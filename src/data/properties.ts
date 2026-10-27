import faridTown from "@/assets/farid-town.jpg";
import razzaqRoyals from "@/assets/razzaq-royals.jpg";
import jeewanCity from "@/assets/jeewan-city.jpg";
import sahiwalCity from "@/assets/sahiwal-city.jpg";
import satelliteTown from "@/assets/satellite-town.jpg";
import lowranceRoad from "@/assets/lowrance-road.jpg";
import kachaKhu from "@/assets/kacha-khu.jpg";
import golfCourseRoad from "@/assets/golf-course-road.jpg";
import farmhouseOutskirts from "@/assets/farmhouse-outskirts.jpg";

export type Property = {
  id: number;
  title: string;
  location: string;
  area: string;
  beds: number;
  baths: number;
  price: string;
  purpose: "Buy" | "Rent";
  image: string;
  description: string;
};

export const properties: Property[] = [
  {
    id: 1,
    title: "10 Marla Luxury Villa",
    location: "Farid Town, Sahiwal",
    area: "10 Marla",
    beds: 5,
    baths: 6,
    price: "2.85 Crore",
    purpose: "Buy",
    image: faridTown,
    description:
      "A contemporary two-storey residence with a sandstone and white facade, floor-to-ceiling glass, a landscaped lawn with mature palm and a generous paved driveway.",
  },
  {
    id: 2,
    title: "1 Kanal Executive Mansion",
    location: "Razzaq Royals, Sahiwal",
    area: "1 Kanal",
    beds: 6,
    baths: 7,
    price: "4.5 Crore",
    purpose: "Buy",
    image: razzaqRoyals,
    description:
      "A grand double-storey villa with natural stone cladding, a double-height glass entrance, evening landscape lighting and a private water feature at the forecourt.",
  },
  {
    id: 3,
    title: "5 Marla Contemporary House",
    location: "Jeewan City, Sahiwal",
    area: "5 Marla",
    beds: 4,
    baths: 4,
    price: "1.95 Crore",
    purpose: "Buy",
    image: jeewanCity,
    description:
      "A crisp, modern family villa with warm timber accents, corner windows that fill the interiors with light and a neat brick-paved walkway to the entrance.",
  },
  {
    id: 4,
    title: "7 Marla Designer Residence",
    location: "Sahiwal City, Sahiwal",
    area: "7 Marla",
    beds: 4,
    baths: 5,
    price: "2.4 Crore",
    purpose: "Buy",
    image: sahiwalCity,
    description:
      "A refined townhouse in the heart of the city with an arched entrance porch, iron-railed balconies and planted terraces on a quiet upscale street.",
  },
  {
    id: 5,
    title: "10 Marla Heritage Villa",
    location: "Satellite Town, Sahiwal",
    area: "10 Marla",
    beds: 5,
    baths: 6,
    price: "3.2 Crore",
    purpose: "Buy",
    image: satelliteTown,
    description:
      "A stately residence with a shaded portico, symmetrical bay windows, a pergola-covered rooftop terrace and a mature mango tree anchoring the lawn.",
  },
  {
    id: 6,
    title: "2 Kanal Presidential Estate",
    location: "Lowrance Road, Sahiwal",
    area: "2 Kanal",
    beds: 6,
    baths: 8,
    price: "5.4 Crore",
    purpose: "Buy",
    image: lowranceRoad,
    description:
      "A sprawling countryside estate with wide verandas, stone and white elevations, manicured grounds, tall palms and orchard rows stretching beyond the boundary wall.",
  },
  {
    id: 7,
    title: "1 Kanal Courtyard Residence",
    location: "Kacha Khu, Sahiwal",
    area: "1 Kanal",
    baths: 6,
    beds: 5,
    price: "3.65 Crore",
    purpose: "Buy",
    image: kachaKhu,
    description:
      "A serene villa wrapped around a private courtyard with a shallow water feature and frangipani tree, deep shaded terraces and calm, cream-stone interiors.",
  },
  {
    id: 8,
    title: "1 Kanal Golf View Villa",
    location: "Golf Course Road, Sahiwal",
    area: "1 Kanal",
    beds: 5,
    baths: 5,
    price: "3.85 Crore",
    purpose: "Buy",
    image: golfCourseRoad,
    description:
      "A sleek white and glass villa with a broad terrace overlooking manicured fairways and mature trees — an uninterrupted green horizon from every level.",
  },
  {
    id: 9,
    title: "2 Kanal Orchard Farmhouse",
    location: "Chak 86/12-L, near Sahiwal",
    area: "2 Kanal",
    beds: 4,
    baths: 5,
    price: "1.6 Crore",
    purpose: "Buy",
    image: farmhouseOutskirts,
    description:
      "A tranquil farmhouse retreat with a timber pergola terrace, its own citrus and mango orchard and open fields beyond the wall — the countryside at your door.",
  },
];
