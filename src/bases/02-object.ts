export const person = {
  lastname: "Cruz",
  age: 24,
  address: {
    city: "Quito",
    zip: "170771",
    time: 30,
  },
};
// } as const; // así no se pueden cambiar las propiedades

// se pueden cambiar las propiedades de u objeto
// pero no redefinir un objeto
// person.age = 45

// const person2 = person;
// const person3 = { ...person };

// // se cambia a las 2 personas porque es una referencia
// // de la otra
// person2.lastname = "Morales";

// // en person3 logramos una "copia", pero no es recomendable
// person3.lastname = "Cruz";

// para solucionar esto se usa lo siguiente:
const person2 = structuredClone(person)

person2.age = 67

console.log(person);
console.log(person2);
