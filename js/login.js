function signinCallback(authResult){
	if authResult(['access_token']){
		document.getElementById('signinButton').setAttribute('style','display: none');
	}else
	if (authResult['access_denied']){
		alert("El usuario ha denegado el acceso a la aplicacion");
	}
	if (authResult['immediate_failed']){
		alert("No se ha podido dar acceso al ususrio de forma automática");
	}

}