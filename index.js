var people = [
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
  }
];


// make a class to print the people array
class PeoplePrinter{
  constructor(people){
    this.people = people;
  }

  print(){
    // within the print function, we can map through another created function (person) and return the firstName  
    console.log(this.people.map(function(person){
      return person.firstName;
    }));
  }
}

var printer = new PeoplePrinter(people)
printer.print();
