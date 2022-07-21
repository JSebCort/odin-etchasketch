//Gets the grid size from HTML
let numberOfSquares = document.getElementById("gridSize").value;

//Calculates the width/height of each square by dividing the full container width by the number of squares
let dimension = 100/numberOfSquares;

//Creates the divs that act as grid spots. The height/widths are based on the percentage of space they're supposed
//to take based on the number of squares that are to be in each column and each row
//the 600px x 600px container.
let div = document.createElement("div");
div.className = "cell";
div.style.width = dimension+'%';
div.style.height = dimension+'%';

// TO BE REMOVED
div.style.background = "red";
div.style.color = "white";

function myFunction() {
    alert(dimension);
  }

// Grabs the container and appends the number of children divs required to make the grid based
// on the size input by the user in the text box.
let container = document.getElementById("container");
let count = 1;
for(let i = 0; i < numberOfSquares; i++){
    for(let j = 0; j < numberOfSquares; j++){
        div.innerHTML=count;
        container.appendChild(div.cloneNode(true));
        count++;
    }

}
//document.getElementById("container").appendChild(div);