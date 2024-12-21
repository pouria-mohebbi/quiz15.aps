
const removeButton = document.getElementById('remove');


removeButton.addEventListener('click', () => {

  const circle = document.getElementById('circle');
  

  if (circle) {
    circle.remove();
  }
});
