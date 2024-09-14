import heroes, { Hero, Owner } from "./data/heroes";

const defaultHero: Hero = {
  id: 0,
  name: "Unknown",
  owner: "DC",
};

export const getHeroById = (id: number): Hero => {
  return heroes.find((h) => h.id === id) ?? defaultHero;
};


export const getHeroesByOwner = (owner: Owner) => {
  return heroes.filter((h) => h.owner === owner) ?? defaultHero;
};

