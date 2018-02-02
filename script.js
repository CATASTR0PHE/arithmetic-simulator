
var res, resU, num1, num2, prmt,
	s_num = 0,
	f_num = 1,
	cnfrm = true,
	text = "<<Отмена>>  -  Выход,  <<Ок>>  -  Продолжить";

for(s_num; s_num < 1;){

	prmt = +prompt("Количество вопросов?", "10");

	if(isNaN(prmt)){
		cnfrm = confirm("Ошибка! Символы вводить нельзя." + "\n\r" + text);
	}

	else if(prmt == 0){
		cnfrm = confirm("Ошибка! Вы ничего не ввели." + "\n\r" + text);
	}

	if( cnfrm == false) break;

	if(cnfrm == true){
		for( f_num = 1; f_num <= prmt; ++f_num ){

			num1 = (Math.floor(Math.random() * 11) + 1);
			num2 = (Math.floor(Math.random() * 11) + 1);
			res = num1 * num2; console.log(f_num + ".  " + res);

		    resU = +prompt(+ f_num + " из " + prmt + "\n\rВопрос: " + num1 + " * " + num2 + " = ? ");

		    if(isNaN(resU)){
		    	cnfrm = confirm("Ошибка! Символы вводить нельзя." + "\n\r" + text);
		    }

		    else if( resU == 0){
		    	cnfrm = confirm("Ошибка! Вы не ввели ответ." + "\n\r" + text);
		    }

		    if( cnfrm == false ) break;

		  	if(cnfrm == true){
			  	if( res == resU){
			  		alert("Ответ верный!\n\r" + num1 + " * " + num2 + " = " + res, "");
			  	}else {
			  		alert("Ответ неверный!\n\r" + num1 + " * " + num2 + " = " + resU + ";\n\rОтвет: " + res + ";");
			  	}
			}

			if(f_num == prmt) cnfrm = confirm("Вопросы закончились :(" + "\n\r" + text);
		}
	}
	
	
	if( cnfrm == false ) ++s_num;
	if( cnfrm == true) --s_num;
}