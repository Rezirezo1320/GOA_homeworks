function displayMessage() {
    setTimeout(() => {
        console.log("This message appears after 3 seconds.");
    }, 3000);
}

displayMessage();

function displayCurrentTime() {
    setInterval(function() {
        let currentTime = new Date();
        let hours = currentTime.getHours();
        let minutes = currentTime.getMinutes();
        let seconds = currentTime.getSeconds();
        
        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        console.log(hours + ":" + minutes + ":" + seconds);
    }, 1000);
}

displayCurrentTime();



let colors = ["red", "green", "blue", "yellow", "purple"];
        let colorIndex = 0;

        function changeBackgroundColor() {
            setInterval(function() {
                document.body.style.backgroundColor = colors[colorIndex];
                colorIndex = colorIndex + 1; 
                if (colorIndex >= colors.length) {
                    colorIndex = 0; 
                }
            }, 3000); 
        }

        changeBackgroundColor();

        let texts = ["First Text", "Second Text", "Third Text", "Fourth Text"];
        let textIndex = 0;

        function changeTextContent() {
            setInterval(function() {
                document.getElementById("text").textContent = texts[textIndex];
                textIndex = textIndex + 1; 
                if (textIndex >= texts.length) {
                    textIndex = 0; 
                }
            }, 5000);
        }

        changeTextContent();
