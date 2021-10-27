function buttonclick(val)
{
    console.log(val);
    document.getElementById("screen").value=document.getElementById("screen").value+=val;

}
function clearDisplay(){
  document.getElementById("screen").value="";
}
function equalClick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}



function clearDisplayOne()
{
    var field = document.getElementById('screen');
    field.value = field.value.slice(0, -1); //Extract from index 0 to the before-last charcter
 
}