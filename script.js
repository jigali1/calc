let displayTop = document.querySelector('.displayTop');
let displayBottom = document.querySelector('.displayBottom');

let buttons = document.querySelectorAll('.button');
for (let i = 0; i < buttons.length; i++) {
	buttons[i].onclick = () => {
  		switch(event.target.innerText) {
  			case 'C':
  				displayBottom.innerText = '0';
  				displayTop.innerText = '';
  				break;
  			case '÷':
  				displayBottom.innerText += event.target.innerText;
  				displayTop.innerText = displayBottom.innerText;
  				displayBottom.innerText = 0;
  				break;
  			case '×':
  				displayBottom.innerText += event.target.innerText;
  				displayTop.innerText = displayBottom.innerText;
  				displayBottom.innerText = 0;
  				break;
  			case '-':
  				displayBottom.innerText += event.target.innerText;
  				displayTop.innerText = displayBottom.innerText;
  				displayBottom.innerText = 0;
  				break;
  			case '+': 
  				displayBottom.innerText += event.target.innerText;
  				displayTop.innerText = displayBottom.innerText;
  				displayBottom.innerText = 0;
  				break;
  			case '=':
  				if (typeof lastA != 'undefined') {
  				}
  				let a = Number(displayTop.innerText.substring(0, displayTop.innerText.length - 1));
  				let b = Number(displayBottom.innerText);
  				let c = (displayTop.innerText.slice(-1));
  				let answer;
  				let exemple;
  				if (c == '+') {
  					example = `${a}${c}${b}=`;
  					answer = +(a + b).toFixed(4);
  				} else if (c == '-') {
  					example = `${a}${c}${b}=`;
  					answer = +(a - b).toFixed(4);
  				} else if (c == '×') {
  					example = `${a}${c}${b}=`;
  					answer = +(a * b).toFixed(4);
  				} else if (c == '÷') {
  					example = `${a}${c}${b}=`;
  					answer = +(a / b).toFixed(4);
  				} else if (c == '') {
  					example = b + '=';
  					answer = b;
  				} else if (c == '=' && a == b) {
  					example = a + '=';
  					answer = a;
  				} else {
  					example = b + '=';
  					answer = b;
  				}
  				displayTop.innerText = example;
  				
  				displayBottom.innerText = answer; 
  				break;
  			case '.':
  				let text = displayBottom.innerText;
  				if (text.indexOf('.') != '-1') {
  					break;
  				} else {
  					displayBottom.innerText += '.';
  				}
  				break;	
  			default:
  				if (displayBottom.innerText.length != 10) {
  					if (displayBottom.innerText === '0') {
  						displayBottom.innerText = '';
  					}
					displayBottom.innerText += event.target.innerText;
				}
			break;								
  		}	
	}	
}


	
	
	