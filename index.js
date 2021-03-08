const buttons = document.querySelectorAll('button')
// console.log(button)
const display = document.querySelector('.display')

buttons.forEach(function(getButton){
    getButton.addEventListener('click', calculate);
});


function calculate(event){
    //current clicked button value
    const currentButtonValue = event.target.value;

    if(currentButtonValue === '='){
        //check if the display is not empty then only do calculation

        if(display.value !== ''){
            display.value = eval(display.value)
        }
    }else if(currentButtonValue === 'C'){
        display.value =  '';
    }else{
        display.value += currentButtonValue;
    }
    
}