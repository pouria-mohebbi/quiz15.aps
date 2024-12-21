function printPersons(persons) {
    persons.forEach(person => {
      
      const personDiv = document.createElement('div');
      personDiv.textContent = `Name: ${person.name}, Age: ${person.age}`;
      
      document.body.appendChild(personDiv);
    });
  }
  
  const persons = [
    { name: "Alice", age: 18 },
    { name: "Bob", age: 21 },
    { name: "Charlie", age: 15 },
  ];
  
  printPersons(persons);
  