var buttons=document.getElementsByClassName("key");
var display=document.getElementById("display");
var expDisplay=document.getElementById("display-heading");

var operand1=0;
var operand2="";
var operator=null;
var x=null;
var y=null;

for(var i=0; i<buttons.length; i++){
	buttons[i].addEventListener('click', function(){
		
		var val= this.getAttribute('data-value');


		
		if(val=="+"||val=="-"||val=="*"||val=="÷"||val=="%"){
			if(val=="%"){
				operator='*0.01*';
			}
			else if(val=="÷"){
				operator='/';
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
				expDisplay.innerText=operand1
			 }
			 
		else if(val=='C'){
			var x=display.textContent;
			display.textContent=x.slice(0,-1);
		}
		else if(val=="="){
			operand2=parseFloat(display.textContent);

			display.innerText=eval(operand1+operator+operand2);
			expDisplay.innerText=display.innerText;
		}
		
		else if(val=="AC"){
			display.innerText=null;
		}

		else{
			display.innerText+=val;
		}

		if(val=="AC"){
			expDisplay.innerText="";
		}
		else if(val!='C' && val!='=' && val!=="+/-"){

		expDisplay.innerText+=val;
		}
		else if(val=="C"){
			var y=expDisplay.textContent;
			expDisplay.innerText=y.slice(0,-1);
		}
		// else if(val=="+/-"){
		// 	expDisplay.innerText=-1* parseFloat(display.textContent);
		// }

	});
}