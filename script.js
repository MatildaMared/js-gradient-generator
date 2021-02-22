let button = document.querySelector(".btn");
let cssCode = document.querySelector(".css-code");
let directions = ["to right", "to left", "to bottom", "to top", "to top left", "to top right", "to bottom left", "to bottom right"];
console.log(directions.length);

// Generate random number between 0 and 255
const randomNumber = function () {
    return Math.trunc(Math.random() * 255 + 1);
}

// Generate random RGB string
const generateRandomRGB = function () {
	return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
};

// Generate random direction
const generateRandomDirection = function () {
    let index = Math.trunc(Math.random() * directions.length);
    return directions[index];
}

// Generate random gradient string
const generateRandomGradient = function () {
    return `linear-gradient(${generateRandomDirection()}, ${generateRandomRGB()}, ${generateRandomRGB()})`;
}


button.addEventListener("click", function () {
    let gradient = generateRandomGradient();
    document.querySelector("body").style.background = gradient;
    cssCode.textContent = "background: " + gradient + ";";
})
