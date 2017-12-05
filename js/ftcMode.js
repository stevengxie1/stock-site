$(document).ready(function(){
	$("#findPeopleWhoOwnEveryStockInExchange").on('click',function(){
		var exchange = document.getElementById("dropdownExchangeList1");
		var val = exchange.options[exchange.selectedIndex].value;
		var ajaxurl = 'ftcMode.php';
		data = {'exchange_name': val};
		$.post(ajaxurl,data,function(response){
			//change an html element here instead
			console.log(JSON.stringify(response));
		});
	});

});
