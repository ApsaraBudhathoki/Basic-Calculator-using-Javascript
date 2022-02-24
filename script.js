let screen = document.getElementById('screen');
buttons = document.querySelectorAll('button');
// string
let screenValue = '';

for(item of buttons){
    item.addEventListener('click',(e) =>{
        buttonText = e.target.innerText;
        console.log('button text is', buttonText);
         if(buttonText == '*'){
           screenValue += buttonText;
          screen.value = screenValue;

        }
        // It erase the previous value 
        else if(buttonText == 'AC'){
            screenValue = "";
            screen.value = screenValue;

        }

        // it show the value
        else if(buttonText == '='){
            screen.value = eval(screenValue);
        } 
       
      
        else{
            screenValue += buttonText;
            // screen.value is input value
            screen.value = screenValue;
        }
    })

}



