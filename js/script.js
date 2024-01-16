const squareForm = document.getElementById("square-form");
const squareSide = document.getElementById("square-side");
const squareArea = document.getElementById("square-area");

const perimeterForm = document.getElementById("perimeter-form");
const perimeterSide = document.getElementById("perimeter-side");
const perimeterResult = document.getElementById("perimeter-result");

squareForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const side = parseFloat(squareSide.value);
    if (side <= 0) {
        alert("Sisi harus lebih besar dari nol.");
        return;
    }
    const area = side * side;
    squareArea.textContent = `L = ${area}`;
});

perimeterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const side = parseFloat(perimeterSide.value);
    if (side <= 0) {
        alert("Sisi harus lebih besar dari nol.");
        return;
    }
    const perimeter = 4 * side;
    perimeterResult.textContent = `K = ${perimeter}`;
});