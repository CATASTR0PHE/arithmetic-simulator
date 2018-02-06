function randInt(min, max) {
	var a = max - min +1,
		b = Math.floor(Math.random() * a) + min;
	return b;	
}

var cnfrm = true;
	text = "<<Отмена>>  -  Выход,  <<Ок>>  -  Продолжить";

for( var s_num = 0; s_num < 1; ++s_num){

	var prmt = +prompt("Количество вопросов? \n\rМаксимальное значение 15", "10");

	if(isNaN(prmt)){
		cnfrm = confirm("Ошибка! Символы вводить нельзя." + "\n\r" + text);
	}

	else if(prmt == 0){
		cnfrm = confirm("Ошибка! Вы ничего не ввели." + "\n\r" + text);
	}

	else if(prmt >= 15){
		cnfrm = confirm("Ошибка! Максимальное значение 15! Вы ввели:  " + prmt + ";" + "\n\r" + text);
	}

	if( cnfrm == false) break;

	var	f_num = 1, issues = [];

	for( f_num; f_num <= prmt; ++f_num ){

		var res, resU, num1, num2,
			good = 0,
			var_m = ["+", "-", "*"],
			op = randInt(0, 2),
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

		for( var w = 0; w < 1; ++w){
			console.log(res);
			resU = +prompt(+ f_num + " из " + prmt + "\n\rВопрос: " + num1 + "  " + code + "  " + num2 + " = ? ");

			if(isNaN(resU)){
				cnfrm = confirm("Ошибка! Символы вводить нельзя." + "\n\r" + text);
				--w;
			}

			else if( resU == 0){
				cnfrm = confirm("Ошибка! Вы не ввели ответ." + "\n\r" + text);
				--w;
			}

			if( cnfrm == false ) break;
		}

		if( cnfrm == false ){
			break;
		}

		else if(cnfrm == true){
			if( res == resU){
				++good;
				issues.push(f_num + ". Верно:  " + num1 + "  " + code + "  " + num2 + " = " + resU + ";   Ваш ответ:  " + res + ";\n");
			}else {
				issues.push(f_num + ". Не верно:  " +num1 + "  " + code + "  " + num2 + " = " + resU + ";   Ваш ответ:  " + res + ";\n");
			}
		}
	}

	var issues_res = [];

	for(var i = 0; i <= issues.length; i++) issues_res.push(issues[i]);

	if( --f_num == prmt) {
		cnfrm = confirm("Вопросы закончились :(" + "\n\r" + "Из " + prmt + " " + "  Верно  " + good + "\n" + issues_res + "\n\r" + text );
		if( cnfrm == true) --s_num;
	}
}