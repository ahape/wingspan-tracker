export interface Bird {
  "Common name": string;
  "Scientific name": string;
  Expansion: string;
  Color: string | null;
  PowerCategory: string | null;
  "Power text": string | null;
  Predator: string | null;
  Flocking: string | null;
  "Bonus card": string | null;
  "Victory points": number;
  "Nest type": string;
  "Egg capacity": number;
  Wingspan?: number | null;
  Forest: string | null;
  Grassland: string | null;
  Wetland: string | null;
  Invertebrate?: number | null;
  Seed?: number | null;
  Fish?: number | null;
  Fruit?: number | null;
  Rodent?: number | null;
  Nectar?: number | null;
  "Wild (food)"?: number | null;
  "Total food cost": number;
  Note: string | null;
  id: number;
  Bonuses: string[];
}
