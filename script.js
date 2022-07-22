//Gets the grid size from HTML
let numberOfSquares = document.getElementById("gridSize").value;

//Calculates the width/height of each square by dividing the full container width by the number of squares
// Example: To fill an entire row of 18 squares, 100/18 is 5.55%. So each box takes up 5.55%.
//          If its supposed to be 37x37, 100/37 is ~2.7027%. This value's smaller than 100/18 since you
//              require more boxes to take up the same space.
let dimension = 100/numberOfSquares;

//Creates the divs that act as grid spots. The height/widths are based on the percentage of space they're supposed
//to take based on the number of squares that are to be in each column and each row
//the 600px x 600px container.
let div = document.createElement("div");
div.className = "cell";
div.style.border = "thin solid #5b5b5b"; 
div.style.width = dimension+'%';
div.style.height = dimension+'%';

// TO BE REMOVED
//div.style.background = "red";
div.style.color = "black";

// Grabs the container and appends the number of children divs required to make the grid based
// on the size input by the user in the text box.
let container = document.getElementById("container");
for(let i = 0; i < Math.pow(numberOfSquares,2); i++){
    div.innerHTML=i+1;
    container.appendChild(div.cloneNode(true));

}


let currentColor = "";

const blackButton = document.getElementById("blackButton")
const whiteButton = document.getElementById("whiteButton")
const rainbowButton = document.getElementById("rainbowButton")
const chooseButton = document.getElementById("chooseButton");

blackButton.onclick = function(){currentColor="black"}
whiteButton.onclick = function(){currentColor="white"}
rainbowButton.onclick = function(){currentColor="rng"}
chooseButton.onclick = function(){currentColor="cyo"}

/**
 * Creates array of all the elements with class 'cell' and then iterates
 * through them, giving them each an event listener that changes its colors
 */
let testGrid = document.querySelectorAll(`[class="cell"]`);
for(const cell of testGrid){
    cell.addEventListener("mouseenter", function(event){
        if(currentColor=="white"){
            event.target.style.background = "white";
        }
        else if(currentColor=="rng"){
            var randomColor = Math.floor(Math.random()*16777215).toString(16);
            event.target.style.background="#"+randomColor;
        }
        else if(currentColor=="cyo"){
            let newColor = document.getElementById("chooseButton").value;
            event.target.style.background = newColor;
        }
        else{
            event.target.style.background = "black";
        }
    })
}
