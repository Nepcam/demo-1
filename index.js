const people = [
  {
    id: 1,
    firstName: 'Pae',
    lastName: 'Jaram',
    email: 'pj@gmail.com',
    phone: '111-111-1111'
  },
  {
    id: 2,
    firstName: 'Cam',
    lastName: 'Nepe',
    email: 'cn@gmail.com',
    phone: '222-222-2222'
  },
  {
    id: 3,
    firstName: 'john',
    lastName: 'doe',
    email: 'jd@gmail.com',
    phone: '333-333-3333'
  }
];

// make a class to print the people array
class PeoplePrinter{
  // this is the setup
  constructor(people){
    this.people = people;

    this.printBetter = () => {
      console.log(this.people.map(person => `${person.firstName} ${person.email}`)
      );
    }
  }


  print(){
    // within the print function, we can map through another created function (person) and return the firstName  
    // console.log(this.people.map(function(person){
    //   return person.firstName;)

    // same function but using the Fat arrow (person) function
      console.log(this.people.map((person) => `${person.firstName} ${person.lastName}`)
    );
  }
}

// here we are using the PeoplePrinter class called printer and attaching the print() to it
const printer = new PeoplePrinter(people)
//printer.print();

function doIt(fn) {
  fn()
}

doIt(printer.printBetter);

// Object and Array destructuring
//const firstPerson = people[2];
const [_, { firstName }] = people;
console.log(firstName);