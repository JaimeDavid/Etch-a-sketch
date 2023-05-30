//declaring color variable
let color ='';
let click = true;
// declaring variables for elements in html
let submitElement = document.querySelector('.set-size');
let blackButton = document.querySelector('#black');
let randomButton = document.querySelector('#random');
let eraserButton = document.querySelector('#white');
let resetButton = document.querySelector('#reset');
let drawArea  = document.querySelector('#draw-area');


submitElement.addEventListener('click', changeSize);
resetButton.addEventListener('click', resetBoard);
blackButton.addEventListener('click',draw);
eraserButton.addEventListener('click',draw);
randomButton.addEventListener('click', draw);
populateBoard(16);


//populates the board with div elements
function populateBoard(size){    
    let squares = drawArea.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    for ( let i = 0 ; i < size; i++){
       let row = document.createElement('div');
       row.classList.add('row');
       row.style.display= 'flex';
       row.style.flex = '1'
       row.style.border = '1px solid rgb(243, 239, 239)';
       drawArea.appendChild(row);
       for( let j = 0; j < size; j++){
           let column = document.createElement('div');
           column.classList.add('column');
           column.style.display = 'flex';
           column.style.flex = '1';
           column.style.border = '1px solid rgb(243, 239, 239)';
           row.appendChild(column);
   
       }
    }
}

function changeSize(input){
    let text = document.querySelector('#message');
    if(input >= 2 && input <= 99 ){
        text.textContent = 'Grid size must be a number between 2 and 99'
        populateBoard(parseInt(input));
    }else{
        text.textContent = 'Please provide a number between 2 and 99'

    }
}

function resetBoard(){
    let squares = drawArea.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = '');
}

function colorSquare(){
    if (click){
        if (color === "random"){
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        }else{
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice){
    color = choice;   

}
function draw(){
    let element = document.getElementsByClassName("column");
    for (let i = 0; i < element.length; i++) {
        element[i].addEventListener("mouseover", colorSquare);
        }
}

document.querySelector('body').addEventListener("click", (e) => {
    if(e.target.tagName != 'BUTTON'){
        click = !click;
        if (click){
            document.querySelector(".mode").textContent = "Mode Coloring";
        }else{
            document.querySelector(".mode").textContent = "Mode Not Coloring";
        }
    }
});

