// Random Color Generator in JavaScript

function generateRandomColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
}

// Apply random color to the page background
function setRandomBackgroundColor() {
    const bgColor = generateRandomColor();
    document.body.style.backgroundColor = bgColor;
}

// Add event listener to change color on click
document.body.addEventListener('click', setRandomBackgroundColor);
