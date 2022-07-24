// Creates variables to hold the elements container, the size of the grid
// that will be created, and the current color chosen.
let container = document.getElementById("container");
let gridChange = document.getElementById("gridSize");
let currentColor = "";

/**
 * @param {number} size - Grid size
 */
function createGrid(size){

    // Creates new div element with the height & width required to fit the required
    // number of spots on a row and column of the grid.
    let newDiv = document.createElement("div");
    let newDimension = 100/size;
    newDiv.className = "cell";
    newDiv.style.border = "thin solid #5b5b5b";
    newDiv.style.width = newDiv.style.height = newDimension+'%';

    // size^2 clones of the new div element are created and appended to the grid container.
    for(let i = 0; i < Math.pow(size,2); i++){
        console.log(Math.pow(size.value,2));
        container.appendChild(newDiv.cloneNode(true));
    }
}

/**
 * @param {*} parent - The parent element of all the children (Ex. the container holding all divs).
 */
function removeAllChildNodes(parent) {
    // Each child is removed from the parent.
    // This allows for all divs to be removed, thus creating an empty container for
    // a new grid to be placed in.
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// Constants that hold events on whether a color button is clicked, then
// changes the currentColor to the respective color.
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
 * through them, giving them each an event listener that changes its colors.
 */
function colorCells(){
    let testGrid = document.querySelectorAll(`[class="cell"]`);
    for(const cell of testGrid){
        cell.addEventListener("mouseenter", function(event){
            if(currentColor == "white"){
                event.target.style.background = "white";
            }
            else if(currentColor == "rng"){
                var randomColor = Math.floor(Math.random()*16777215).toString(16);
                event.target.style.background = "#"+randomColor;
            }
            else if(currentColor == "cyo"){
                let newColor = document.getElementById("chooseButton").value;
                event.target.style.background = newColor;
            }
            else{
                event.target.style.background = "black";
            }
        })
    }
}


// If the event is detected, all child nodes are removed, a new grid is created,
// and the ability to color the grid becomes available.

gridChange.onchange = function(){
    removeAllChildNodes(container);
    createGrid(gridChange.value);
    colorCells();
}

/**
 * Once the page loads, a grid is created with the default grid size (16x16).
 * Then, the ability to color the grid is available by calling the colorCells function.
 */
window.onload = () => {
    createGrid(gridChange.value);
    colorCells();
}