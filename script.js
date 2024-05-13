const imageContainer = document.querySelector('.image-container');
let isDragging = false;
let currentX;
let initialX;
let xOffset = 0;

imageContainer.addEventListener('mousedown', dragStart);
imageContainer.addEventListener('mouseup', dragEnd);
imageContainer.addEventListener('mouseleave', dragEnd);
imageContainer.addEventListener('mousemove', drag);

function dragStart(e) {
  initialX = e.clientX - xOffset;
  isDragging = true;
  document.body.style.cursor = 'grabbing';
}

function dragEnd(e) {
  initialX = currentX;
  isDragging = false;
  document.body.style.cursor = 'grab';
}

function drag(e) {
  if (isDragging) {
    e.preventDefault();
    currentX = e.clientX - initialX;
    xOffset = currentX;
    setTranslate(currentX, 0);
  }
}

function setTranslate(xPos, yPos) {
  imageContainer.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
}