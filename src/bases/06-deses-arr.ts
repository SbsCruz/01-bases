const characters: string[] = [
  "Bob",
  "Patricio",
  "Arenita",
  "Calamardo",
  "Plancton",
];

// las variables desestructuradas son posicionales
const [b, p, a, c, z] = characters;

const returnArray = () => [123, "ABC"] as const;

const [numbers, letters] = returnArray();

console.log(numbers, letters);
