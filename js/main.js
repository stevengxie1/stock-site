//JQuery, with AJAX
$(document).ready(function(){

    //Dynamic filling of the selection box, once clicked
    /*
    $("#exchange-option").on('change', function() {

        console.log("In exchange-option change");
        //Saves current exchange name
        var exchangeName = $(this).val();
        console.log("Exchange name: " + exchangeName);
        $.ajax({
            url: 'getCompanies.php',
            type: 'post',
            //puts the exchangeName into something called 'exchange_name'
            data: {exchange_name:exchangeName},
            dataType: 'json',
            success:function(response){
                
                console.log("Debugging now in main success function");

                var len = response.length;

                $("#company-option").empty();
                for( var i = 0; i<len; i++){
                    var companyName = response[i]['company_name'];
                    //We use companyName for the value and option text
                    $("#company-option").append("<option value='"+companyName+"'>"+companyName+"</option>");
                    //Debugging
                    console.log("In main.js loop, company name: " + companyName);
                }
            }
        });
    });
    */
    //
    $("#company-option").on('change', function() {

    //    var companyName 

    });



});