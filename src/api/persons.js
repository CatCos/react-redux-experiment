/**
 * Fancy database.
 */
const personsList = [
  {
    name: 'Catarina Costa',
    age: 23
  },
  {
    name: 'Rui Afonso Pereira',
    age: 24
  },
  {
    name: 'Maria Antónia',
    age: 54
  },
  {
    name: 'Manel das Dores',
    age: 78
  },
];

const Persons = {
  getAll() {
    // Simulate a server request.
    return new Promise((resolve, reject) => {
      window.setTimeout(() => {
        resolve(personsList);
      }, Math.random() * 2000 + 1000);
    });
  }
};

export default Persons;
