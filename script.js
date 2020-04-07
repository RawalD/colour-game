//alert("test")
let numOfSquares = 6;
let colours = generateRandomColors(numOfSquares);

const squares = document.querySelectorAll('.square');
let pickedColour = randomColor();
let colourDisplay = document.getElementById('displayColour');
let message = document.getElementById('message');
let header = document.getElementById('header');
const newColourBtn = document.getElementById('newColours');
const hardBtn = document.getElementById('hard');
const easyBtn = document.getElementById('easy');


easyBtn.addEventListener('click',function(){
    // alert('hey');
    message.textContent = "";
    numOfSquares = 3
    hardBtn.classList.remove('selected');
    easyBtn.classList.add('selected');
    colours = generateRandomColors(numOfSquares);
    pickedColour = randomColor();
    colourDisplay.textContent = pickedColour;

    for(let i = 0; i < squares.length; i++){
        if(colours[i]){
            squares[i].style.backgroundColor= colours[i];
        }
        else{
            squares[i].style.display = 'none';
        }
    }
})

hardBtn.addEventListener('click',function(){
    // alert('bye');
    message.textContent = "";
    easyBtn.classList.remove('selected');
    hardBtn.classList.add('selected');
    numOfSquares = 6;
    colours = generateRandomColors(numOfSquares);
    pickedColour = randomColor();
    colourDisplay.textContent = pickedColour;

    for(let i = 0; i < squares.length; i++){
        
            squares[i].style.backgroundColor= colours[i];
            squares[i].style.display = 'block';
        
       
    }

})

colourDisplay.textContent = pickedColour;

function generateRandomColors(num){
    let arr = []

    for(let i = 0; i < num; i++){
        arr.push(randomColourGeneration());
    }

    return arr
}

function changeColours(colour){
    //loop through colours
    for(let i = 0; i < squares.length ; i++) {
        squares[i].style.background = colour;
    }
}


function randomColourGeneration(){
    //red 0 - 255
    let red = Math.floor(Math.random() * 256);
    // green 0 - 255
    let green = Math.floor(Math.random() * 256);
    // blue 0 - 255
    let blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`
}

function randomColor(){
    let random =  Math.floor(Math.random() *colours.length);
    
    return colours[random]
}

for(let i = 0; i < squares.length; i++){
    //add initial colours to squares
    message.textContent = "";
    squares[i].style.backgroundColor = colours[i];

    //add click listeners
    squares[i].addEventListener('click', function(){
        
        //alert('clicked');
        //get colour of clicked square
        //alert(this.style.backgroundColor);
        //compare to pickedColour

        let clickedColour = this.style.backgroundColor;

        if(clickedColour === pickedColour){
           // alert('works');
            squares[i].style.backgroundColor = pickedColour;
            message.textContent = "Correct!";
            message.classList.add('textMessageCorrect');
            changeColours(clickedColour);
            //squares.style.backgroundColor = '#232323';
            
            header.style.backgroundColor = clickedColour;

            newColourBtn.textContent = 'play again ?'.toUpperCase();
            newColourBtn.addEventListener('click', function() {
                 newColourBtn.textContent = 'New Colours';
                message.textContent = "";
            });
            


        }else{
            this.style.backgroundColor = '#232323';
            message.textContent = 'Try Again';
            message.classList.add('textMessageIncorrect');
        }
    })
}

newColourBtn.addEventListener('click', function(){
        //alert('works');

        colours = generateRandomColors(numOfSquares);

        pickedColour = randomColor();

        colourDisplay.textContent = pickedColour;

        header.style.backgroundColor = 'aqualite';

        for(let i = 0; i < squares.length; i++){

            squares[i].style.backgroundColor = colours[i];
        }
})
