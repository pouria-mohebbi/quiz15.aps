const navbarItem = ["Home", "Products", "Blog", "Contact us"];

const navbar = document.querySelector('.navbar');

navbarItem.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  
  li.classList.add('item');
  
  li.style.margin = '0 1rem';
  li.style.cursor = 'pointer';
  
  
  navbar.appendChild(li);
});
