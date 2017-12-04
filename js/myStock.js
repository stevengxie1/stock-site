$(document).ready(function(){
	$("#dropdownUserList1").on('change',function(){
		var userId = $(this).val();
		var ajaxurl = 'getUserData.php';
		data = {user_id:userId};
		$.post(ajaxurl, data, function(response){
			console.log(JSON.stringify(response));
		});
	});
});
