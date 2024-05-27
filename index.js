const display = document.getElementById('display');
function val(input)
{   
    let k = input;
    display.value += input;
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Math error";
    }
}
function reset(){
    display.value = " ";
}
