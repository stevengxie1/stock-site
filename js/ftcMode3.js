$(document).ready(function(){
	$("#companyDropDown").on('change', function(){
		var exchange = document.getElementById("companyDropDown");
		var val = exchange.options[exchange.selectedIndex].value;
		var ajaxurl = 'getExecutiveInfo.php';
		data = {'company_name':val};
		$.post(ajaxurl, data, function(response){
			console.log(response);
			response = $.parseJSON(response);
			var len = response.length;
		});
	});
});
