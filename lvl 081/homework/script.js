const button = document.querySelector('button');
const fadeDiv = document.getElementById('div1');
const slideDiv = document.getElementById('div2');
const text = document.querySelector('p');
const movingBall = document.createElement('div');
const rotatingDiv = document.createElement('div');

document.body.appendChild(movingBall);
document.body.appendChild(rotatingDiv);

movingBall.style.width = '30px';
movingBall.style.height = '30px';
movingBall.style.backgroundColor = 'blue';
movingBall.style.borderRadius = '50%';
movingBall.style.position = 'relative';

rotatingDiv.style.width = '80px';
rotatingDiv.style.height = '80px';
rotatingDiv.style.backgroundColor = 'yellow';
rotatingDiv.style.marginTop = '20px';

let fadeToggle = false;
function fadeInOut(element) {
    let opacity = fadeToggle ? 1 : 0;
    const increment = fadeToggle ? -0.02 : 0.02;
    fadeToggle = !fadeToggle;

    function animate() {
        opacity += increment;
        element.style.opacity = opacity;
        if (opacity >= 1 || opacity <= 0) return;
        requestAnimationFrame(animate);
    }
    animate();
}

let slideToggle = false;
function slideOut(element) {
    let position = slideToggle ? 100 : 0;
    const increment = slideToggle ? -2 : 2;
    slideToggle = !slideToggle;

    function animate() {
        position += increment;
        element.style.transform = `translateX(${position}px)`;
        if (position >= 100 || position <= 0) return;
        requestAnimationFrame(animate);
    }
    animate();
}

function moveBall(ball) {
    let position = 0;
    const increment = 2;
    const maxPosition = 200;

    function animate() {
        position += increment;
        ball.style.transform = `translateX(${position}px)`;
        if (position >= maxPosition) {
            position = 0;
        }
        requestAnimationFrame(animate);
    }
    animate();
}

function changeTextSize(text) {
    let fontSize = 16;
    const increment = 0.5;
    const maxFontSize = 32;

    function animate() {
        fontSize += increment;
        text.style.fontSize = `${fontSize}px`;
        if (fontSize >= maxFontSize || fontSize <= 16) {
            increment *= -1;
        }
        requestAnimationFrame(animate);
    }
    animate();
}

function rotateElement(element) {
    let rotation = 0;
    const increment = 2;

    function animate() {
        rotation += increment;
        element.style.transform = `rotate(${rotation}deg)`;
        requestAnimationFrame(animate);
    }
    animate();
}

button.addEventListener('click', () => {
    fadeInOut(fadeDiv);
    slideOut(slideDiv);
    moveBall(movingBall);
    changeTextSize(text);
    rotateElement(rotatingDiv);
});