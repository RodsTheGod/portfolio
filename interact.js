const modeToggle = document.getElementById('modeToggle');
const body = document.body;

modeToggle.addEventListener('click', () => {
  // Toggle the "dark-mode" class on the <body>
  body.classList.toggle('dark-mode');

  // Update the button text
  if (body.classList.contains('dark-mode')) {
    modeToggle.textContent = 'Switch to Light Mode';
  } else {
    modeToggle.textContent = 'Switch to Dark Mode';
  }
});

