function fall() {
    const circle = document.getElementById('circle'); 
    const screenHeight = window.innerHeight; 
  
    let position = 0; 
    const speed = 5;

function moveCircle() {
    if (position < screenHeight - circle.offsetHeight) {
      position += speed; 
      circle.style.top = position + 'px'; 
      requestAnimationFrame(moveCircle); 
    } else {
      position = 0; 
      circle.style.top = position + 'px'; 
    }
  }
  // set intervalit gaakete

  moveCircle(); 
}