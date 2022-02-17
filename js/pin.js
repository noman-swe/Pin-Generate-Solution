function getPin(){
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }else{
        // console.log('hey! it is 3 digit.. Next calling getPin function again');
        return getPin();
    }
}

function generatePin(){
  const pin = getPin();
  
  document.getElementById('display-pin').value = pin;
}

// verifyPin()
function verifyPin(){
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    
    const successMsg = document.getElementById('notify-success');
    const failError = document.getElementById('notify-fail');
    if(pin == typedNumbers){
        successMsg.style.display = "block"; 
        failError.style.display = "none";
    }else{
        
        failError.style.display = "block";
        successMsg.style.display = "none"; 
    }
    
}


// 
document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if(isNaN(number)){
        if(number == 'C'){
calcInput.value = '';
        }
    }else{
        
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number; 
        calcInput.value = newNumber;
    }
    
})