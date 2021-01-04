var buttons=document.getElementsByClassName("key");
var display=document.getElementById("display");

var operand1=0;
var operand2=null;
var operator=null;

for(var i=0; i<buttons.length; i++){
	buttons[i].addEventListener('click', function(){
		
		var val= this.getAttribute('data-value');

		// if(val=="+"){
		// 	operand1=parseInt(display.textContent());
		// 	operator="+";
		// }
		// else if(val=="-"){
		// 	operand1=parseInt(display.textContent());
		// 	operator="-";
		// }
		// else if(val=="/"){
		// 	operand1=parseInt(display.textContent());
		// 	operator="/";
		// }
		// else if(val=="*"){
		// 	operand1=parseInt(display.textContent());
		// 	operator="*";
		// }
		// else if(val=="%"){
		// 	operand1=parseInt(display.textContent());
		// 	operator="*";
		// }

		if(val=="="){
			// operand2=parseInt(display.textContent());
			// console.log("operator2", operand2)
			// display.innerText=eval(operand1+operator+operand2);
			// if("%" in display.innerText){
			// 	display.innerText=eval()
			// }
			display.innerText=eval(display.innerText)
		}
		else if(val=='AC'){
			display.innerText=null
		}
		else{
			display.innerText+=val;
		}
		
		

	});
}