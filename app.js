let user1 = '';
let user2 = '';
let choosen = false;
let isGameStart = false;
let isGameOver = false;

const winnerDisplay = document.querySelector('.winnerDisplay');
let winnerName = document.querySelector('#winnerName');
const userSymbol = document.querySelector('.options');
const buttons = document.querySelectorAll('.users button')
const tableArr = document.querySelectorAll('.table button');
const table = Array.from(tableArr);

let cell1 = table[0];
let cell2 = table[1];
let cell3 = table[2];
let cell4 = table[3];
let cell5 = table[4];
let cell6 = table[5];
let cell7 = table[6];
let cell8 = table[7];
let cell9 = table[8];

table.forEach(item=>item.style.pointerEvents = 'none')

userSymbol.addEventListener('click', function(e){
    if(e.target.value === 'X'){
        if(!isGameStart){
            user1 = 'X';
            user2 = 'O'
            choosen = true;
            buttons.forEach(item=>item.style.pointerEvents = 'none')
            table.forEach(item=>item.style.pointerEvents = 'all')
            isGameStart = true;
        }
    }else if(e.target.value === 'O'){
        if(!isGameStart){
            user1 = 'O';
            user2 = 'X'
            choosen = true;
            buttons.forEach(item=>item.style.pointerEvents = 'none')
            table.forEach(item=>item.style.pointerEvents = 'all')
            isGameStart = true;
        }
        
    }
})

table.forEach(item=>{
    item.addEventListener('click', function(e){
        if(choosen===true && isGameStart === true){
            e.target.innerText = user1;
            choosen = false;
            e.target.value = '1'
            e.target.style.pointerEvents = 'none'
            
        }else if(choosen===false && isGameStart === true){
            e.target.innerText = user2;
            choosen = true;
            e.target.value = '0'
            e.target.style.pointerEvents = 'none'
        }
        let row1 = parseInt(cell1.value)+parseInt(cell2.value)+parseInt(cell3.value);
        let row2 = parseInt(cell4.value)+parseInt(cell5.value)+parseInt(cell6.value);
        let row3 = parseInt(cell7.value)+parseInt(cell8.value)+parseInt(cell9.value);
        let col1 = parseInt(cell1.value)+parseInt(cell4.value)+parseInt(cell7.value);
        let col2 = parseInt(cell2.value)+parseInt(cell5.value)+parseInt(cell8.value);
        let col3 = parseInt(cell3.value)+parseInt(cell6.value)+parseInt(cell9.value);
        let dg1 = parseInt(cell1.value)+parseInt(cell5.value)+parseInt(cell9.value);
        let dg2 = parseInt(cell3.value)+parseInt(cell5.value)+parseInt(cell7.value);
        
        if(row1 === 3 || row1 === 0){
            let name = cell1.innerText+' is winner!!';
            displayWinner(name)
        }
        else if(row2 === 3 || row2 === 0){
            let name = cell4.innerText+' is winner!!';
            displayWinner(name)
        }
        else if(row3 === 3 || row3 === 0){
            let name = cell7.innerText+' is winner!!';
            displayWinner(name)
        }
        else if(col1 === 3 || col1 === 0){
            let name = cell1.innerText+' is winner!!';
            displayWinner(name)
        }
        else if(col2 === 3 || col2 === 0){
            let name = cell2.innerText+' is winner!!';
            displayWinner(name)
        }
        else if(col3 === 3 || col3 === 0){
            let name = cell3.innerText+' is winner!!';
            displayWinner(name)
        }
        else if(dg1 === 3 || dg1 === 0){
            let name = cell1.innerText+' is winner!!';
            displayWinner(name)
        }
        else if(dg2 === 3 || dg2 === 0){
            let name = cell3.innerText+' is winner!!';
            displayWinner(name)
        }

        if(table.every(item=>item.innerHTML !== '')){
            let name = 'This is a Tie';
            displayWinner(name)
        }

        
    })
})

function showWinner(){
    table.forEach(item=>item.value = '');
    table.forEach(item=>item.innerHTML = '');
    table.forEach(item=>item.style.pointerEvents = 'none')
    user1 = ''
    user2 = ''
    isGameOver = true
}

function over(){
    if(isGameOver){
        choosen = false;
        isGameStart = false;
        buttons.forEach(item=>item.style.pointerEvents = 'all');
        winnerDisplay.style.display = "none";
    }
}

function displayWinner(name){
    winnerDisplay.style.display = "flex";
    winnerName.innerText = name;
    showWinner()
}

const resetAll = document.querySelector('#restart')
resetAll.addEventListener('click', over);


