const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

const container = document.createElement("section");
container.id = "planets";
document.body.appendChild(container);

planets.forEach(planet => {
    container.textContent += `${planet} `;
})
/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
const planetEl = document.getElementById("planets")

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const newPlanetArray = planets.map(planet => {
    let uppercaseLetter = planet.charAt(0).toUpperCase();
    let restOfString = planet.slice(1);
    return `${uppercaseLetter}${restOfString}`;
})

newPlanetArray.forEach(planet => {
    container.textContent += " " + planet;
})


/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const newContainer = document.querySelector("#newContainer");
newContainer.textContent = "Planets with E: "
const planetsWithE = planets.filter(planet => {
    let hasE = false;
    let e = "E";
    if(planet.toLocaleLowerCase().includes(e.toLowerCase())) {
        hasE = true;
    }
    return hasE;
})

planetsWithE.forEach(planet => {
    newContainer.textContent += " " + planet;
})