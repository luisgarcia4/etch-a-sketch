//Parent Element
const container = document.querySelector(".container");
let dimensions = 16;

// This function creates the grid.
function createGrid() {
	for (i = Math.pow(dimensions, 2); i >= 1; i--) {
		grid = document.createElement("div");
		container.appendChild(grid);
		container.style.gridTemplateColumns = `repeat(${dimensions}, 1fr)`;
		container.style.gridTemplateRows = `repeat(${dimensions}, 1fr)`;
		grid.setAttribute("id", `${i}`);
		grid.setAttribute("class", "cubes");
		grid.style.border = "1px solid gray";
	}
}
createGrid();

// This function fills in the grid with the color black.
function fillInBlack() {
	for (i = Math.pow(dimensions, 2); i >= 1; i--) {
		let sqaure = document.getElementById(`${i}`);
		sqaure.addEventListener("mouseover", function () {
			this.style.backgroundColor = "black";
		});
	}
}
fillInBlack();

// This code runs multiple functions when the 'NEW GRID' button is clicked
function newGrid() {
let reset = document.getElementById("reset");
reset.addEventListener("click", function () {
	clearGrid();
	checkSize();
	fillInBlack();
	colorSwitch();
});
}
newGrid()

// This function takes user input to determnine grid size.
function selectGridSize() {
	dimensions = prompt("Please enter your preferred grid size between 1-100: ");
}

// This function checks that user input is between 1 and 100.
function checkSize() {
	selectGridSize();
	if (dimensions >= 1 && dimensions <= 100) {
		createGrid();
	} else {
		alert("Grid size must be between 1 and 100.");
		checkSize();
	}
}

// This function removes current divs to make space for new divs.
function clearGrid() {
	while (container.firstChild) {
		container.firstChild.remove();
	}
	converter = false;
	randomButton.innerText = "RANDOMIZE";
}

// This function stores randomly generated numerical values into 3 different 
// variables (r, g, b) which are later passed as rgb values
function rainbows() {
	r = Math.floor(Math.random() * 256);
	g = Math.floor(Math.random() * 256);
	b = Math.floor(Math.random() * 256);
}
rainbows();

// This function fills the grid in with random colors
function fillInRandomColor() {
	for (i = Math.pow(dimensions, 2); i >= 1; i--) {
		let sqaure = document.getElementById(`${i}`);
		sqaure.addEventListener("mouseover", function () {
			this.style.backgroundColor = `rgb(${r}, ${g}, ${b}`;
			rainbows();
		});
	}
}

// This function activates random color generation when the 'RANDOMIZE' button is clicked
function randomize() {
	const randomButton = document.querySelector("#randomButton");
	randomButton.addEventListener("click", fillInRandomColor);
}
randomize();

// This function switches the functionality of the 'RANDOMIZE' button to switch back
// and forth between black and random colors.
function colorSwitch() {
	let converter = true;
	randomButton.addEventListener("click", function () {
		if (converter) {
			converter = false;
			fillInRandomColor();
			randomButton.innerText = "BLACK";
		} else {
			converter = true;
			fillInBlack();
			randomButton.innerText = "RANDOMIZE";
		}
	});
}
colorSwitch();