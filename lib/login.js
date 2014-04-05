$(document).ready(function(){
	$(".login_form").submit(function(){
		try{
			$.post("http://moodle.curtin.edu.my/login/index.php", {'email':this.username.value,'password':this.password.value},
			function (data){	
			}, 'json');
		}
		catch(exception) {
			alert(exception);
		}
		return false;
	});
});