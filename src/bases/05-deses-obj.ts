// interfaz
// para definir como serán los objetos

interface Hero {
  name: string;
  age: number;
  codeName: string;
  power?: string; // el "?" para decir que es opcional
}

export const person: Hero = {
  name: "Sebas",
  age: 24,
  codeName: "pipas",
};

// desestructurar
// puede ser objeto o array
// const { name, age, codeName, power = "aún no" } = person;

// console.log({ name, age, codeName, power });

// interfaz para definir argumentos de entrada en una función

interface createHeroArgs {
  name: string;
  age: number;
  codeName: string;
  power?: string; // el "?" para decir que es opcional
}

const createHero = ({ name, age, codeName, power }: createHeroArgs) => ({
  id: 123,
  age: age,
  codeName: codeName,
  name: name,
  power: power ?? "NO TIENEEE",
});

console.log(createHero(person));
