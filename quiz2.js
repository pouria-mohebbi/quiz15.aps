
const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
  if (circle.classList.contains('blue')) {
    circle.classList.remove('blue');
    circle.classList.add('purple');
  } else if (circle.classList.contains('purple')) {
    circle.classList.remove('purple');
    circle.classList.add('blue');
  }
});
