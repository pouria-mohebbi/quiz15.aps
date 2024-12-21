const circles = document.querySelectorAll('.circle');
const rectangles = document.querySelectorAll('.rectangle');

circles.forEach(circle => {
    circle.style.backgroundColor = circle.dataset.color;

    circle.addEventListener('click', () => {
        const color = circle.dataset.color;
        changeRectanglesColor(color);
    });
});

function changeRectanglesColor(baseColor) {
    let [r, g, b, a] = baseColor.match(/\d+/g).map(Number);

    rectangles.forEach((rectangle, index) => {
        const newAlpha = (1 - (index * 0.1)).toFixed(1);
        rectangle.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${newAlpha})`;
    });
}
