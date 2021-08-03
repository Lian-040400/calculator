let blocks = document.querySelectorAll(".bloks");
let output = document.querySelector(".output");


blocks.forEach(element => { element.onclick = buttonClick });
document.addEventListener("keydown",(event)=>{
    let regExp=/\+|\/|\-|\*|\.|[0-9]|c/i;
    if (event.key==="Enter") {
        calc("=");
    }
    if(regExp.test(event.key)){
        calc(event.key);
        
    }

});
function buttonClick(event) {
calc(event.target.innerText)
}


function calc(value){
   
    let outputText=output.innerText;
    let regExp=/\+|\/|\-|\*/;
try {
  
    if (value=== "=") {
        output.innerText= eval(outputText);
        return;
    }
    if (value=== "."&& outputText.includes(".")) {
        return;
    }

    if(regExp.test(outputText[outputText.length-1])&& regExp.test(value)){
        outputText=outputText.split("");
        outputText[outputText.length-1]=value;
        output.innerText=outputText.join("");
        return;
    }

    

    
    if (value.toLowerCase()=== "c") {
        output.innerText = "0";
        return
    }
    

    if (output.innerText === "0"&&value===".") {
        output.innerText +=value;
        return

    }
    if (output.innerText === "0") {
        output.innerText =value;
        return

    }
    if(!regExp.test(outputText[outputText.length-1])&& regExp.test(value)){
        let result=eval(outputText);
        output.innerText=result+value;
        return;
    }
   
    output.innerText +=value;

} catch (error) {
    console.log(error);
}

}

