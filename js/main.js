//JQuery, with AJAX
$(document).ready(function(){

    //Dynamic filling of the selection box, once clicked
    $("#exchange-option").on('change', function() {

        var exchangeName = $(this).val();
        
        var ajax = new XMLHttpRequest();
        
        $.ajax({
            url: 'getCompanies.php',
            type: 'post',
            data: {exchange_name:exchangeName},
            dataType: 'json',
            success:function(response){

                var len = response.length;

                $("#company-option").empty();
                for( var i = 0; i<len; i++){
                    var companyName = response[i]['company_name'];
                    //We use companyName for the value and option text
                    $("#company-option").append("<option value='"+companyName+"'>"+companyName+"</option>");

                }
            }
        });
    });



});