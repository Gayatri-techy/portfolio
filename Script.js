const textArray = ['Gayathri'];
const textDisplay = document.querySelector('.typed-text');

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = textArray[textIndex];
    textDisplay.textContent = currentText.substring(0, charIndex);
    if (!isDeleting && charIndex < currentText.length ) {
        charIndex++;
        setTimeout(typeEffect, 100);
    }
    else if(isDeleting && charIndex > 0){
        charIndex--;
        setTimeout(typeEffect, 50);
    }
    else {
        isDeleting = !isDeleting;
        textIndex = !isDeleting ? (textIndex + 1) % textArray.length : textIndex;
        // Pause before next text
        setTimeout(typeEffect, 1000);
    }
}

// when the page loads type effect will apply
document.addEventListener('DOMContentLoaded', typeEffect);