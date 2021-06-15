  module.exports = people => {
    let counter = 0;
  
    
    people.forEach(person => {
      if (person.age < 18) {
        counter++;
        console.log(`Ime ${person.name}, prezime: ${person.lastname}`);
      } if (person.age > 18 && person.age < 21) {
        counter++;
        console.log(`Ime ${person.name}, prezime: ${person.lastname}`);
      } if (person.age > 21 && person.age < 25) {
        counter++;
        console.log(`Ime ${person.name}, prezime: ${person.lastname}`);
      }   
    });
        console.log("We have " + counter + " minors in our organization.");

  };

