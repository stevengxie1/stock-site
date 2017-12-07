$(document).ready(function () {

    $("#dropdownUserList1").on('change', function () {

        var userId = $(this).val();
        var ajaxurl = 'getUserData.php';
        console.log("User ID:" + userId);
        data = {
            user_id: userId
        };

        // $.ajax({
        //     url: ajaxurl,
        //     type: 'post',
        //     //puts the companyName into something called 'company_name'
        //     data: data,
        //     dataType: 'json',
        //     success: function (response) {

        $.post(ajaxurl, data, function (response) {

            console.log("Debugging now in main success function");

            //One must apparantly parse this, versus main.js's implementation
            response = $.parseJSON(response);
            var len = response.length;
            console.log("Response, length:" + len + ", " + response);
            //Clear the respective table, nuclear option
            $('#user-table tbody').html("");

            for (var i = 0; i < len; i++) {
                //console.log('ticker_name:' + response[i]["ticker_name"]);
                var tickerName = response[i].ticker_name;
                var purchasePrice = response[i].purchase_price;
                var numstock = response[i].number;

                console.log("ticker_name:" + tickerName + ", " + purchasePrice);

                //Add to table
                $('#user-table tbody').append(
                    "<tr><td>" + tickerName +
                    "</td><td>" + userId + "</td><td>" + purchasePrice +
                    "</td><td>" + numstock + "</td></tr>"
                );

            }

        });
    });

    $('#find-stock-high').on('click', function () {

        console.log("Find button clicked!");
        //First, empty the table
        $("#stock-day-table tbody").html("");

		var userId = $('#dropdownUserList1').val();
        console.log("user_id: " + userId);

        $.ajax({
            url: 'getUserHigh.php',
            type: 'post',
            //puts the companyName into something called 'company_name'
            data: {
                user_id: userId
            },
            dataType: 'json',
            success: function (response) {

                console.log("Debugging now in main success function");

                var len = response.length;

                $("#day-option").empty();
                for (var i = 0; i < len; i++) {
                    var stock_day = response[i]['day'];
                    var ticker_name = response[i]['ticker_name'];
                    var type = response[i]['type'];
                    var high = response[i]['high'];
                    var low = response[i]['low'];

                    console.log("Stock day:" + stock_day + ", " + high + ", " + low);
  					  //We use companyName for the value and option text

                    //Add to table
                    $('#stock-day-table tbody').append(
                        "<tr> <td>" + ticker_name +
                        "</td><td>" + stock_day + "</td><td>" + type +
                        "</td><td>" + high + "</td><td>" + low + "</td></tr>"
                    );

                }

                //Debugging:
                console.log(response);

            }
        });


    });

});

$(document).ready(function () {



});
