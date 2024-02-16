window.onload = createGrid(16);

function createGrid(num){
    //Clear the grid
    document.querySelector(".grid").innerHTML = "";

    for(i=0; i<num*num; i++){
        let pixel = document.createElement("div");
            pixel.className = "pixel";
            pixel.style.width = `${100 / num}%`; // Calculate the width
            pixel.style.height = `${100 / num}%`; // Calculate the height

            //eventlisteners for onClick

            pixel.addEventListener("mouseover" , () =>{
                pixel.style.backgroundColor = selectedColor();
                if(rainbowMode){
                    pixel.style.backgroundColor = getRandomColor();
                }
                if(eraserMode){
                    pixel.style.backgroundColor = '#fff';
                }
             });

       document.querySelector(".grid").appendChild(pixel);      
    }
}


function clearGrid(){
    let pixels = document.querySelectorAll(".pixel")
    pixels.forEach((pixel) => {
        pixel.style.backgroundColor = '#fff';
    });
}

function promptUser(unum){
    var unum = window.prompt("Please enter a number between 1 and 64");
    if(unum>64 || unum<1){
        alert("Please enter a number between 1 and 64");
    } else {
        createGrid(unum);
    }
}

function selectedColor(){
    return color = document.getElementById('palette').value;  
}

let rainbowMode = false;

function rainbowModeEnabled(){
    rainbowMode = !rainbowMode;
    console.log("rainbow mode :"+rainbowMode);
    return rainbowMode;
}

let eraserMode = false;

function eraserModeEnabled(){
    eraserMode = !eraserMode;
    console.log("eraser mode:"+eraserMode);
    return eraserMode;
}


//Helper functions
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

