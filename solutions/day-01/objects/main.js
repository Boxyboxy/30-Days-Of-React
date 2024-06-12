
const person = {
    firstName: 'Asabeneh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Helsinki',
    },
    getPersonInfo: function () {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    },
  }
  const entries = Object.entries(person)
  console.log(entries)

  const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
  // Find people who are MERN stack developer from the users object
  // Set your name in the users object without modifying the original users object
  // Get all keys or properties of users object
  // Get all the values of users object

  const mernStackDevelopers = Object.entries(users)
  .filter(([name, user]) => {
    const requiredSkills = ['MongoDB', 'Express', 'React', 'Node'];
    return requiredSkills.every(skill => user.skills.includes(skill));
  })
  .map(([name, user]) => name);
  console.log(mernStackDevelopers)
  const updatedUsers = { ...users, Eugene: { email: 'eugenengboxiang@gmail.com',
  skills: ['HTML', 'CSS', 'JavaScript', 'Java', 'Express', 'React', 'Node','Rust'],
  age: 28,
  isLoggedIn: false,
  points: 40 } };
  console.log(updatedUsers);
  console.log(Object.keys(users));
  console.log(Object.values(users))


