$(document).ready(function(){
	$("#dropdownExchangeList1").on('change',function(){
		var exchange = document.getElementById("dropdownExchangeList1");
		var val = exchange.options[exchange.selectedIndex].value;
		var ajaxurl = 'getExchangeInfo.php';
		data = {'exchange_name': val};
		$.post(ajaxurl,data, function(response){
			response = $.parseJSON(response);
			var len = response.length;
		
			$('#exchangeTable tbody').html("");

			for(var i = 0; i < len; i++){
				var tickerName = response[i].ticker_name;
				var companyName = response[i].company_name;
				var userId = response[i].user_id;
				var number = response[i].number;
				$('#exchangeTable tbody').append(
				"<tr><td>" + tickerName +
					"</td><td>" + companyName + "</td><td>" + userId +
						"</td><td>" + number + "</td></tr>"
			  );
			}

			
		});
	});
});
