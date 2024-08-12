
function getRandomPaleColour() {
    // Generate random RGB values for a pale color
    const r = Math.floor(Math.random() * 100) + 120;
    const g = Math.floor(Math.random() * 100) + 120;
    const b = Math.floor(Math.random() * 100) + 120;

    // Return the color in RGB format
    return `rgb(${r}, ${g}, ${b})`;
}

function changeBackgroundColor() {
    // Get a random pale color
    const randomColor = getRandomPaleColour();
    // Set the background color of the document body
    document.body.style.backgroundColor = randomColor;
}

// Change color every 2 seconds
setInterval(changeBackgroundColor, 2000);
