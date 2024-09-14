// no usar any, hay que definir la variable
// function greetPerson( name: any) {

//   return `Hola ${name}`

// }

// FUNCIÓN NORMAL
// function greetPerson( name: string){
//   return `Hola ${name}`
// }

// FUNCIÓN FLECHA
// const greetPerson = (name: string) => {
//   return `Hola ${name}`;
// };

// para cuando solo hay un return:
// FUNCIÓN FLECHA SIMPLIFICADA

// const greetPerson = (name:string) => `Hola ${name}`

// const getUser = (uid: string) => ({
//   uid,
//   username: "Sebas",
// });

// console.log(getUser("jadslkjfsa"));

const heroes = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 2,
    name: "Superman",
    power: "strength",
  },
];

const hero = heroes.find( h => h.id === 2)

console.log(hero?.power?.toUpperCase())
