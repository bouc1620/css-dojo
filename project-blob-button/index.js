import './style.scss';

// Updates CSS variables with the mouse’s position inside the button (as % of its size)
document.querySelector('button').addEventListener('mousemove', (event) => {
  const clientRect = event.target.getBoundingClientRect();
  event.target.style.setProperty(
    '--x',
    ((event.clientX - clientRect.x) / clientRect.width) * 100
  );
  event.target.style.setProperty(
    '--y',
    ((event.clientY - clientRect.y) / clientRect.height) * 100
  );
});
