// Split landing page: the hovered (or focused) side expands

const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

function expand(side) {
  container.classList.toggle('hover-left', side === 'left');
  container.classList.toggle('hover-right', side === 'right');
}

const reset = () => expand(null);

left.addEventListener('mouseenter', () => expand('left'));
right.addEventListener('mouseenter', () => expand('right'));
container.addEventListener('mouseleave', reset);

// Keyboard users get the same effect when a side receives focus
left.addEventListener('focusin', () => expand('left'));
right.addEventListener('focusin', () => expand('right'));
container.addEventListener('focusout', (e) => {
  if (!container.contains(e.relatedTarget)) reset();
});
