function checkEmpty(input,helpTxt) {
        if (input.value.length == 0) {
            if (helpTxt != null) {
                document.getElementById(helpTxt).innerHTML = "Required!";
            }
            return false;
        } else {
            if (helpTxt != null) {
                document.getElementById(helpTxt).innerHTML = "";
            }
            return true;
        }
}	
	
function regEx(reg, input, helpTxt, helpMsg){
	if (!reg.test(input)) {
		if (helpTxt != null) {
			document.getElementById(helpTxt).innerHTML = helpMsg;
		}
		return false;

	} else {
		if (helpTxt != null) {
			document.getElementById(helpTxt).innerHTML = "";
		}
		return true;
	}
}
	
function valitadeEmail (input,helpTxt) {
	 if (!checkEmpty(input,helpTxt)) { return false;}
	return regEx( /^[\w\.\-_\+]+@[\w-]+(\.\w{2,4})+$/ ,input.value,helpTxt,"please put a valid email (ex:john@doe.com)!") 
		//  /^\w+@\w+\.\w{2,3}$/ 
}

function valitadePassword (min,max,input,helpTxt) {
	 if (!checkEmpty(input,helpTxt)) { return false;}
	return regEx(  /^\w{6,16}$/  ,input.value,helpTxt,  "please insert between "  + min + " and " + max +" characters (a-z,A-Z,0-9)!") 
}

function alertMsg(idTrue,idFalse,msg){
	document.getElementById(idTrue).style.display='block';
	document.getElementById(idFalse).style.display='none';
	document.getElementById(idTrue).innerHTML = msg; 
}
	
function valitadeEqual (input,password,helpTxt) {
	password =  document.getElementById(password).value;
	if (!checkEmpty(input,helpTxt)) { return false;}
	// alert (password);	 				 
	if (input.value !== password ) {
		if (helpTxt != null) {
  	             document.getElementById(helpTxt).innerHTML = "password does not match!";
		}
   	        return false;
	} 
	return true;
}
		
function valitadePadName (min,max,input,helpTxt) {
	 if (!checkEmpty(input,helpTxt)) { return false;}
	return regEx(  /^.{1,16}$/  ,input.value,helpTxt,  "please insert between "  + min  + " and " + max +" characters!") 
}

function checkAll(form){
	if ( valitadePadName(1,16,form["name"],'error1') ) { form.submit();  }
	else { 	alertMsg("alert-error","alert-success", "Check your input!");}
}



	 function formatCalendar(){
		var table =  document.getElementById("table");
		for(var i = 1; i < table.rows.length; i++){
			 table.rows[i].cells[2].innerHTML =    moment(table.rows[i].cells[2].innerHTML,'MM/DD/YYYY hh:mm:ss a').calendar();
		}
	}

	 function formatTime(){
		 var time =  document.getElementById("time").innerHTML;
		time = moment(time,'MM/DD/YYYY hh:mm:ss a').calendar();
		document.getElementById("time").innerHTML =  time ;
	 }

/*
  		function checkAll(form){ //acc settings
			if (	valitadePassword(6,16,form["passwordOld"],'error1') &&
				valitadePassword(6,16,form["password"],'error2') &&
				valitadeEqual(form["confirm-password"],'password','error3')
			) { form.submit(); }
			else { alertMsg("alert-error","alert-success", "Check your input!"); }
		}


  		function checkAll(form){ //forgot pwd
           	if ( 
     			valitadeEmail(form["email"],'error1') 
		)
		 { // alertMsg("alert-success","alert-error", "Sucess!");
			form.submit(); 
		 }
		else { 	alertMsg("alert-error","alert-success", "Check your input!");	 }
		}  


               function checkAll(form){ //signup
           	if (
     			valitadeEmail(form["email"],'error1') &&
			valitadePassword(6,16,form["password"],'error2') &&
			valitadeEqual(form["confirm-password"],'password' ,'error3')
		)
		 { // alertMsg("alert-success","alert-error", "Sucess!");
			form.submit(); 
		 }
		else { 	alertMsg("alert-error","alert-success", "Check your input!");	 }
		}  


  		function checkAll(form){ //sign in
           		if (
     				valitadeEmail(form["email"],'error1') &&
				valitadePassword(6,16,form["password"],'error2')
			)
			 { form.submit();  }
		else { 	alertMsg("alert-error","alert-success", "Check your input!");	 }
		}  
*/
	
