
var cnfrm = true,
	text = "<<Отмена>>  -  Выход,  <<Ок>>  -  Продолжить";

	function randInt(min, max) {
		var a = max - min +1,
			b = Math.floor(Math.random() * a) + min;
		return b;	
	}

	function mathOp(a, b, op){

	}

for( var s_num = 0; s_num < 1; ++s_num){

	var prmt = +prompt("Количество вопросов?", "10");

	if(isNaN(prmt)){
		cnfrm = confirm("Ошибка! Символы вводить нельзя." + "\n\r" + text);
	}

	else if(prmt == 0){
		cnfrm = confirm("Ошибка! Вы ничего не ввели." + "\n\r" + text);
	}

	if( cnfrm == false) break;

	if(cnfrm == true){
		for( var f_num = 1; f_num <= prmt; ++f_num ){

			var res, resU, num1, num2, op, code,

				var_m = ["+", "-", "*"];

			op = randInt(0, 2);
			code = var_m[op];

			switch(code){
				case "+":
					num1 = randInt(10, 100);
					num2 = randInt(10, 100);
					res = num1 + num2;
					break;

				case "-":
					num1 = randInt(50, 100);
					num2 = randInt(10, 50);
					res = num1 - num2;
					break;

				case "*":
					num1 = randInt(1, 10);
					num2 = randInt(1, 10);
					res = num1 * num2;
					break;
				}

			console.log(res);
		    resU = +prompt(+ f_num + " из " + prmt + "\n\rВопрос: " + num1 + "  " + code + "  " + num2 + " = ? ");

		    if(isNaN(resU)){
		    	cnfrm = confirm("Ошибка! Символы вводить нельзя." + "\n\r" + text);
		    }

		    else if( resU == 0){
		    	cnfrm = confirm("Ошибка! Вы не ввели ответ." + "\n\r" + text);
		    }

		    if( cnfrm == false ) break;

		  	if(cnfrm == true){
			  	if( res == resU){
			  		alert("Ответ верный!\n\r" + num1 + "  " + code + "  "  + num2 + " = " + res, "");
			  	}else {
			  		alert("Ответ неверный!\n\r" + num1 + "  " + code + "  " + num2 + " = " + resU + ";\n\rОтвет: " + res + ";");
			  	}
			}

			if(f_num == prmt) cnfrm = confirm("Вопросы закончились :(" + "\n\r" + text);
		}
	}
	
	if( cnfrm == true) --s_num;
}
