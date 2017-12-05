$(document).ready(function(){
	
	$("#findPeopleWhoOwnEveryStockInExchange").on('click',function(){
		var exchange = document.getElementById("dropdownExchangeList1");
		var val = exchange.options[exchange.selectedIndex].value;
		var ajaxurl = 'ftcMode.php';
		data = {'exchange_name': val};
		$.post(ajaxurl,data,function(response){
			//change an html element here instead
			response = $.parseJSON(response);
			var len = response.length;
			for(var i = 0; i < len; i++){
				var userId = response[i].user_id;
				var number = response[i].share_count;
				console.log(userId);
				$('#badPeopleTable tbody').append(
					"<tr><td>"+userId+
						"</td><td>" + number +"</td><td>"+
					"</td></tr>"
				);
			}
		});
	});

});
