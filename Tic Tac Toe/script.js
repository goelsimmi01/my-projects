console.log("Welcome to Tic Tak Toe")
let music = new Audio("resources/music.mp3")
let audioTurn =  new Audio("resources/ting.mp3")
let gameover = new Audio("resources/gameover.mp3")
let turn = "X"
let isgameover = false;
//FUNCTION TO CHANGE THE TURN
const changeTurn=()=>{
    return turn === "X" ?"0": "X"
}

// FUNCTION TO CHECK FOR A WIN
const checkWin = ()=>{
let boxtext = document.getElementsByClassName('boxtext');
let win = [
   [0,1,2,5,6,0],
   [3,4,5,5,18,0],
   [6,7,8,5,30,0],
   [0,3,6,-7,20,90],
   [1,4,7,4,20,90],
   [2,5,8,16,20,90],
   [0,4,8,5,18,44],
   [2,4,6,4,18,-42],
]
win.forEach(e => {
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== ""))
    {
        document.querySelector('.info').innerText = boxtext[e[0]].innerText + " won"
        isgameover = true;
     document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "250px"
     document.querySelector(".line").style.transform = `translate(${e[3]}vw,${e[4]}vw) rotate(${e[5]}deg)`
     document.querySelector(".line").style.width = "28vw";
     gameover.play();
     document.getElementsByClassName('gameoveralert')[0].style.display = 'block'
    } 
})
}
// GAME LOGIC

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
let boxtext = element.querySelector('.boxtext');
element.addEventListener('click',()=>
{
    if(boxtext.innerText === '')
    {
        boxtext.innerText = turn;
       turn = changeTurn();
        audioTurn.play();
        checkWin();
     
         if(!isgameover)
           {
             
             document.getElementsByClassName("info")[0].innerText = " turn for " +  turn;    

           } 
           else{
            setTimeout(() => {
                let boxtexts = document.querySelectorAll('.boxtext');
                Array.from(boxtexts).forEach(element =>{
                    element.innerText = ""
                });
                document.querySelector(".line").style.width = "0vw";
            }, 2000);


            

           }
            
             
               
    }
})
})
// Add onclick listner to rest button
reset.addEventListener('click',()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText = ""
    });
  
    turn ="X"
    isgameover = false;
    document.querySelector(".line").style.width = "0vw";

    if(!isgameover){
             
        document.getElementsByClassName("info")[0].innerText = "turn for" + turn;
        
    }
    
    

    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
    document.getElementsByClassName('gameoveralert')[0].style.display = 'none'
    
})
