const grid = document.querySelector('.grid');
const reset = document.querySelector("#reset");
const resize = document.querySelector("#resize");
reset.addEventListener("click", function() { resetGrid(16) });
resize.addEventListener("click", function ()  { resizeGrid() });

createDivs(16);

//function createDivs(divs) {
//    for (let i = 0; i < divs; i++) {
//        const div = document.createElement('div');
//        div.style.width = "60px";
//        div.style.height = "60px";
//        div.style.border = "solid 1px black";
//        div.classList.add("cell");
//        div.classList.remove("active");
//        grid.appendChild(div);
//    };
//};

function createDivs(rows) {
  let cells = rows * rows;
  let width = 500 / rows;

  for (let i = 0; i < cells; i++) {
    const div = document.createElement('div');
    div.style.width = `${width - 2}px`;
    div.style.height = `${width - 2}px`;
    div.style.border = "solid 1px black";
    div.classList.add("cell");
    div.classList.remove("active");
    grid.appendChild(div);
  }
};

grid.addEventListener('mouseover', function(e) {
    if (e.target.matches('.cell')) {
        e.target.classList.add('active');
    };
});

function resetGrid(num) {
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  };
  createDivs(num);
};

function resizeGrid() {
  let num = prompt("How many rows should be in your new grid?", "16");
  if (num > 0 && num < 101) {
  resetGrid(num);
  } else if (num <= 0) {
      while (num <= 0) {
          num = prompt("Try again, this time with a number larger than 0", "16");
      };
      resetGrid(num);
    } else if (num > 100) {
        while (num > 100) {
          num = prompt("Try again, this time with a number equal to or smaller than 100", "16");
      };
      resetGrid(num);
  };
};