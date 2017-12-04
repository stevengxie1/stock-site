//JQuery, with AJAX
$(document).ready(function(){

    $("#exchange-option").on('change', function() {
        var ajax = new XMLHttpRequest();
        ajax.open('GET', 'Ajax.php', false);
        ajax.send();
     
        $('#result').text(ajax.responseText);
    });

});