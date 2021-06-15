  module.exports = (people,broj) => {
    let counter = 0;

  
    people.forEach(person => {
      if (person.age < broj) {
        counter++;
        console.log(`Ime ${person.name}, prezime: ${person.lastname}`);
      }
    });
    
    console.log('We have ' + counter + ' minors in our organization.');
  };
