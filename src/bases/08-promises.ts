import { getHeroById } from "./07-imp-exp";
import type { Hero } from "./data/heroes";
// console.log("inicio");

// new Promise((resolve, reject) => {
//   // console.log("cuerpo de promesa");

//   // resolve("se cumplió la promesa")
//   reject("no se cumplió la promesa");
// })
//   .then((message)   => console.log(message))
//   .catch((error)    => console.log(error))
//   .finally(()       => "fin de la promesa");

// console.log("fin");

const getHeroByIdAsync = (id: number): Promise<Hero> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero: Hero = getHeroById(id);

      hero ? resolve(hero) : reject(`no se encontró el héroe con id ${id}`);
    }, 1500);
  });
};

getHeroByIdAsync(200)
  .then((h) => console.log(`El héroe es: ${h.name}`))
  .catch(alert);
