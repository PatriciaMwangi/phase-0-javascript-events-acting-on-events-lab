// Your code here
function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
  document.addEventListener("keydown", function(e){
    if(e.key==="ArrowLeft"){
        moveDodgerLeft()
    }
  })
  function moveDodgerRight(){
    let dodger=document.getElementById("dodger")
    let newPosition = parseInt(dodger.style.left.replace("px",''));
    if(newPosition<360){
      dodger.style.left=`${newPosition+1}px`;
    }
  }
  document.addEventListener("keydown",function(e){
    if(e.key==="ArrowRight"){
      moveDodgerRight()
    }
  })
