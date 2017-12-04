//JQuery, with AJAX
$(document).ready(function(){

    //Dynamic filling of the selection box, once clicked
    
    $("#exchange-option").on('change', function() {

        console.log("In exchange-option change");
        //Saves current exchange name
        var exchangeName = $(this).val();
        console.log("Exchange name: " + exchangeName);
        
        var ajaxurl = 'getCompanies.php';
        //data to pass
        // data = {exchange_name:exchangeName};

        // $.post(ajaxurl, data, function (response){

        //     console.log("Length of recieved string: " + response.length);
        //     console.log("Response: " + JSON.stringify(response));
        // });
        
        /**/
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
        /**/
        //Test
        //$("#company-option").append("<option value='"+"Hi"+"'>"+"hi"+"</option>");
    });
    
    //
    $("#company-option").on('change', function() {

        console.log("In company-option change");
        //Saves current exchange name
        var companyName = $(this).val();
        console.log("Company name: " + companyName);
        
        var ajaxurl = 'getDays.php';
        //data to pass
        /*
        data = {company_name:companyName};

        $.post(ajaxurl, data, function (response){

             console.log("Length of recieved string: " + response.length);
             console.log("Response: " + JSON.stringify(response));
         });
        */
        
        $.ajax({
            url: 'getDays.php',
            type: 'post',
            //puts the companyName into something called 'company_name'
            data: {company_name:companyName},
            dataType: 'json',
            success:function(response){
                
                console.log("Debugging now in main success function");

                var len = response.length;

                $("#day-option").empty();
                for( var i = 0; i<len; i++){
                    var stock_day = response[i]['day'];
                    console.log("Stock day:" + stock_day);
                    //Date Conversion Stuff
                    // myDate=stock_day.split("-");
                    // var newDate=myDate[1]+"/"+myDate[0]+"/"+myDate[2];
                    // proper_date = (new Date(newDate).getTime());
                    // console.log("stock day:" + proper_date);
                    //We use companyName for the value and option text
                    $("#day-option").append("<option value='"+stock_day+"'>"+stock_day+"</option>");
                    //Debugging
                    //console.log("In main.js loop, : day" + strDay);
                }
            }
        });
        

    });



});