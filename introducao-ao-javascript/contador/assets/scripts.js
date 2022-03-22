let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment(){
    if(count < 10){
	count++;
	CURRENT_NUMBER.innerHTML = count;
    }
    if(count >= 0){
        document.getElementById('currentNumber').style.color = '#ff0000';
    }
} 

document.getElementById("adicionar").addEventListener("click", increment);


function decrement(){
    if(count > - 10 ){
	count--;
	CURRENT_NUMBER.innerHTML = count;
    }
    if(count < 0){
        document.getElementById('currentNumber').style.color = '#0000ff';
    }
}

document.getElementById("subtrair").addEventListener("click", decrement);