var calculator = '';
var result = 0;
var btn_clicked = Array.from(document.getElementsByClassName('click'));
var operators = Array.from(document.getElementsByClassName('operator'));
var btn_result = document.getElementById("btn_result");
var show_result = document.getElementById('show_result');
var deleted_all = document.getElementById('deleted_all'); // note name delete is word reversed
var deleted = document.getElementById('deleted'); 
var counter = 0;
var result2 = null;
 
deleted_all.onclick = () => {
  result = 0;
  calculator = "";
  show_result.innerHTML = '0';
  counter = 0;
}

deleted.onclick = () => {
  var new_calc = calculator.split('');
  
  let new_calc2 = new_calc.map((el) => {
    return el == ' ' ? '' : el; 
  })
  
  new_calc2.length = --new_calc2.length;
  
  calculator = new_calc2.join('');
  show_result.innerHTML = calculator;
  counter = 0;
  
}

btn_clicked.forEach(el => {
  el.onclick = (event) => {
    
    if(el.innerHTML === ' + ') {
      counter++;
    }else if(el.innerHTML === ' - '){
      counter++;
    }
    else if(el.innerHTML === ' / '){
      counter++;
    }
    else if(el.innerHTML === ' * '){
      counter++;
    }
    if(counter > 1){
      operators.forEach(el => {
        el.disabled = true;
      });
      
      calculator = calculator.slice(0,3);
    }
      calculator += el.innerHTML;
      show_result.innerHTML = calculator;
    
  }
})

  btn_result.onclick = () => {
  var arr_calc = calculator.split(" ");
  for(var i = 0; i < arr_calc.length; i++){
    if(arr_calc[i] === '+'){
      if(arr_calc[i - 1] == ""){
		arr_calc[i - 1] = result2; 
	  }
	  
	  result = +arr_calc[i - 1] + +arr_calc[i + 1];
	  
    }if(arr_calc[i] === '-'){
		if(arr_calc[i - 1] == ""){
		arr_calc[i - 1] = result2; 
	  }
	  
      result = +arr_calc[i - 1] - +arr_calc[i + 1];
    }if(arr_calc[i] === '*'){
		if(arr_calc[i - 1] == ""){
		arr_calc[i - 1] = result2; 
	  }
      result = +arr_calc[i - 1] * +arr_calc[i + 1];
    }if(arr_calc[i] === '/'){
		if(arr_calc[i - 1] == ""){
		arr_calc[i - 1] = result2; 
	  }
      result = +arr_calc[i - 1] / +arr_calc[i + 1];
    }
  }
  show_result.textContent = result;
  calculator = "";
  result2 = result;
  result = 0;
  
  btn_clicked.forEach(el => {
    el.disabled = false;
    
  })
  counter = 0;
  
}