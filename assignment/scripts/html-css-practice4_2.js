// Lisa Donohoo
// Prime Academey
// Tier 1 week 4 assignment 2
// March 12 2024

// event listeners for buttons
document.getElementById("spring-theme")
        .addEventListener("click", toggleSpringTheme);
document.getElementById("random-theme")
        .addEventListener("click", setRandomTheme);

// Function to change theme to spring:
//  themes are changed by adding and removing a class on the body
//  element, one has the original theme as one has the spring theme
function toggleSpringTheme() {
    let bodyElement = document.querySelector("body");
    let springButton = document.getElementById("spring-theme");
    //Before using the spring/original theme button:
    //   -remove the random theme (by removing the random-theme classlist)
    //    as this will otherwise override the spring/original themes
    if (bodyElement.classList.contains("random-theme")) {
        bodyElement.classList.toggle("random-theme");
    }
    // changeToSpring will be true if we are CHANGING FROM the original theme
    //      -so it will be true if we are changing the theme to spring
    let changeToSpring = bodyElement.classList.contains("original-theme");
    // If the theme we are changing to is spring theme
    //      -change the text on the button to reflect other style choice
    if (changeToSpring) {   
        springButton.innerText = "original theme";
    // Else theme we are changing to is original theme
    } else {
        springButton.innerText = "spring theme";
    }
    // This will toggle the class 'original-theme' on or off
    //      by removing/adding the class to the body element
    bodyElement.classList.toggle("original-theme");
    // ...after the class list is added to the body,
    //      the corresponting styles for body & body.original theme
    //      are then displayed, changing the theme!
} //end toggleSpringTheme


// function to change theme to a random color theme
function setRandomTheme() {
    let rootElement = document.querySelector(":root");
    let bodyElement = document.querySelector("body");
    // gets random colors and puts in string to assign as property value
    function getRandomColorString() {
        let rgbArray = [];
        // each time a color is needed, fill an array of three randome colors
        //   for red, green and blue values
        for (i=0; i<4; i++) {
            rgbArray[i] = Math.floor(Math.random()*256);
        }
        return `rgb(${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`;
    }
    // This is an intermediary step to put in object, would make it easier
    //  to add other custom colors if I added a color picker
    const randomColors = {
        backgroundColor: ['--random-background-color', getRandomColorString()],
        accentColor: ['--random-accent-color', getRandomColorString()],
        textColor: ['--random-text-color', getRandomColorString()],
        textBackgroundColor: ['--random-text-background-color', getRandomColorString()]
    };
    // Sets the values of the variables with the format --random+(colors):
    //      These variables are defined under the root element selector in 
    //      the CSS. This will override the current variables in the root section.
    rootElement.style.setProperty(randomColors.backgroundColor[0], 
                                    randomColors.backgroundColor[1]);        
    rootElement.style.setProperty(randomColors.accentColor[0], 
                                    randomColors.accentColor[1]);
    rootElement.style.setProperty(randomColors.textColor[0],
                                    randomColors.textColor[1]);
    rootElement.style.setProperty(randomColors.textBackgroundColor[0], 
                                    randomColors.textBackgroundColor[1]);
    // By adding the random-theme class to the body element, we switch to the 
    //      random theme.
    // This switch happens when the CSS selector: (body.random-theme) is activated
    //      and overrides the main body selector
    bodyElement.classList.add("random-theme");
 } // end setRandomTheme


