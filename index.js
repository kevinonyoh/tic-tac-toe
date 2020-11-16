// this.value = (this.value == "X") ? "O" : "X"

var playerTurn = "X";
var matrix =[ [0,0,0],
              [0,0,0],
              [0,0,0]
      ]
      // loop to select all td element
for (let i = 0; i < document.querySelectorAll("td").length; i++) {
  // event listener to carryout click event  
  document.querySelectorAll("td")[i].addEventListener("click", function(){
    if(this.innerHTML === "") { 
    this.innerHTML = playerTurn;
    gamedetect(this.getAttribute("id"), this.innerHTML)
      if(detectMove() === 1){
            document.querySelector("h2").innerHTML = "🎉✨ Player X win ✨🎇";
            document.querySelector("h6").innerHTML = "refresh to play again";
            playerTurn = "";
            var myWork = new Worker('index.js');
            myWork.terminate();
      }else if(detectMove() === -1){
            document.querySelector("h2").innerHTML = "🎉✨ Player O win ✨🎇";
            document.querySelector("h6").innerHTML = "refresh to play again";
            playerTurn = "";
            var myWork = new Worker('index.js');
            myWork.terminate();
      } else{    
          if(this.innerHTML === "X"){
          playerTurn = "O";
      }else{
          playerTurn = "X";
      }
    }
    }
   })

}

function gamedetect(myDetect, myDetect2){
 
   if(myDetect <= 3){
    
    if(myDetect2 === "X"){
       matrix[0][myDetect-1] = 1;
    }else{
      matrix[0][myDetect-1] = -1;
    }
}
 else if(myDetect <= 6){
  
  if(myDetect2 === "X"){
     matrix[1][myDetect-4] = 1;
  }else{
    matrix[1][myDetect-4] = -1;
  }
}
else if(myDetect <= 9){
  
  if(myDetect2 === "X"){
     matrix[2][myDetect-7] = 1;
  }else{
    matrix[2][myDetect-7] = -1;
  }
}

}

function detectMove(){
     
       if((matrix[0][0] === matrix[0][1]) && (matrix[0][1] === matrix[0][2]) && (matrix[0][0] !== 0)){
           return matrix[0][0];
       }else if((matrix[1][0] === matrix[1][1]) && (matrix[1][1] === matrix[1][2]) && (matrix[1][0] !== 0)){
           return matrix[1][0];
       }else if((matrix[2][0] === matrix[2][1]) && (matrix[2][1] === matrix[2][2]) && (matrix[2][0] !== 0)){
        return matrix[2][0];
       }else if((matrix[0][0] === matrix[1][0]) && (matrix[1][0] === matrix[2][0]) && (matrix[0][0] !== 0)){
            return matrix[0][0];
       }else if((matrix[0][0] === matrix[1][0]) && (matrix[1][0] === matrix[2][0]) && (matrix[0][0] !== 0)){
            return matrix[0][0];
       }else if((matrix[0][1] === matrix[1][1]) && (matrix[2][1] === matrix[0][1]) && (matrix[0][1] !== 0)){
           return matrix[0][1];
       }else if((matrix[0][2] === matrix[1][2]) && (matrix[2][2] === matrix[0][2]) && (matrix[0][2] !== 0)){
           return matrix[0][2];
       }else if((matrix[0][0] === matrix[1][1]) && (matrix[0][0] === matrix[2][2]) && (matrix[2][2] !== 0)){
             return matrix[0][0];
       }else if((matrix[0][2] === matrix[1][1]) && (matrix[2][0] === matrix[1][1]) && (matrix[1][1] !== 0)){
              return matrix[1][1]
       }else{
         return 0;
       }
}

