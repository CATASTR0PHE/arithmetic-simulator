
var cnfrm = true,
	text = "<<Отмена>>  -  Выход,  <<Ок>>  -  Продолжить";

	function opt_random(){
		var a = Math.floor(Math.random() * 3 ) + 1;

		if( a == 1) a = "+";
		else if( a == 2) a = "-";
		else if( a == 3 ) a = "*";

		return a;
	}

	function num_random(min, max) {
		var a = max - min +1,
			b = Math.floor(Math.random() * a) + min;
		return b;	
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

			var res, resU, num1, num2;
			var opt_random_res = opt_random();

			switch(opt_random_res){
				case "+":
					num1 = num_random(10, 100);
					num2 = num_random(10, 100);
					res = num1 + num2;
					break;

				case "-":
					num1 = num_random(50, 100);
					num2 = num_random(10, 50);
					res = num1 - num2;
					break;

				case "*":
					num1 = num_random(1, 10);
					num2 = num_random(1, 10);
					res = num1 * num2;
					break;
			}

			console.log(res);
		    resU = +prompt(+ f_num + " из " + prmt + "\n\rВопрос: " + num1 + "  " + opt_random_res + "  " + num2 + " = ? ");

		    if(isNaN(resU)){
		    	cnfrm = confirm("Ошибка! Символы вводить нельзя." + "\n\r" + text);
		    }

		    else if( resU == 0){
		    	cnfrm = confirm("Ошибка! Вы не ввели ответ." + "\n\r" + text);
		    }

		    if( cnfrm == false ) break;

		  	if(cnfrm == true){
			  	if( res == resU){
			  		alert("Ответ верный!\n\r" + num1 + "  " + opt_random_res + "  "  + num2 + " = " + res, "");
			  	}else {
			  		alert("Ответ неверный!\n\r" + num1 + "  " + opt_random_res + "  " + num2 + " = " + resU + ";\n\rОтвет: " + res + ";");
			  	}
			}

			if(f_num == prmt) cnfrm = confirm("Вопросы закончились :(" + "\n\r" + text);
		}
	}
	
	if( cnfrm == true) --s_num;
}