var buttons=document.getElementsByClassName("key");
var display=document.getElementById("display");

var operand1=0;
var operand2="";
var operator=null;
var x=null;

for(var i=0; i<buttons.length; i++){
	buttons[i].addEventListener('click', function(){
		
		var val= this.getAttribute('data-value');


		
		if(val=="+"||val=="-"||val=="*"||val=="/"||val=="%"){
			if(val=="%"){
				operator='*0.01*';
			}
			else{
				operator=val;
			}
			operand1=parseFloat(display.textContent);
			display.textContent="";
		}

		else if(val=="+/-"){
				operand1=parseFloat(display.textContent);
				operand1=-1*operand1;
				display.textContent=operand1;
		     }
		else if(val=="="){
			operand2=parseFloat(display.textContent);

			display.innerText=eval(operand1+operator+operand2);
		}
		
		else if(val=="AC"){
			display.innerText=null;
		}

		else{
			display.innerText+=val;
		}

	});
}