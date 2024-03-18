
const btns = Array.from(document.getElementsByClassName('click'));
const operators = Array.from(document.getElementsByClassName('btns'));

const btn_result = document.getElementById("btn_result");
const show_result = document.getElementById('show_result');
const deleted_all = document.getElementById('deleted_all'); // note name delete is word reversed
const deleted = document.getElementById('deleted'); 
let counter = 0;
let calculator = '';
let result = 0;
let result2 = null;

deleted_all.onclick = () => {
  result = 0;
  calculator = "";
  show_result.innerHTML = '0';
  counter = 0;
}

deleted.onclick = () => {
  operators.forEach(el => {
    el.disabled = false;
  });
  
  let new_calc = calculator.split('');
  
  let new_calc2 = new_calc.map((el) => {
    return el == ' ' ? ' ' : el; 
  })
  
  let new_calc3 = [];
  
  for(let i =0; i < new_calc2.length; i++){
	  new_calc3.push(new_calc2[i]);
	  if(new_calc2[i] == " "){
		  continue;
	  }
  }
  
  
  //let new_calc3 = new_calc2.filter((el) => {
   //return el != " "; 
  //});
  
  
  console.log(new_calc3);
  
  new_calc3.length = --new_calc3.length;
  
  calculator = new_calc3.join('');
  
  show_result.innerHTML = calculator;
  counter = 0;

}

btns.forEach(el => {
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
    if(counter == 1){
      operators.forEach(el => {
        el.disabled = true;
      });
	  
	  let arr = calculator.split(" ");
	  let arr2 = '';
	  let counter2 = 0;
	  
	  for(let i = 0; i < arr.length; i++){
		if(arr[i] == '+' || arr[i] == '-' || arr[i] == '/' || arr[i] == '*'){
			counter2++;
			arr[i] = " " + arr[i] + " ";
		}
		
		if(counter2 >= 2){
			counter2 = 0;
			continue;
		}
		
		arr2 += arr[i];
	}
	  
	  calculator = arr2;
    }
	  calculator += el.innerHTML;
    show_result.innerHTML = calculator;
  }
  
})

  btn_result.onclick = () => {
  let arr_calc = calculator.split(" ");
  for(let i = 0; i < arr_calc.length; i++){
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
  
  btns.forEach(el => {
    el.disabled = false;
    
  })
  counter = 0; 
}