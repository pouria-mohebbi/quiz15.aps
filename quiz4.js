
const namesContainer = document.getElementById('namesContainer');


names.forEach(person => {

  const personDiv = document.createElement('div');


  personDiv.textContent = person.name;

  personDiv.classList.add('person');

  if (person.gender === 'girl') {
    personDiv.classList.add('girl');
  } else {
    personDiv.classList.add('boy');
  }

 
  namesContainer.appendChild(personDiv);
});
