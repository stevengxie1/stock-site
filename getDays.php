<?php
include "config.php";

// A very useful reference: http://makitweb.com/auto-populate-dropdown-with-jquery-ajax/

// After selecting the exchange_name, 
//debug_to_console( "config added" );

$companyName = $_POST['company_name'];

//debug_to_console( "exchange_name: $exchangeName" );

$sql = "SELECT sd.day, sd.ticker_name, sd.type, sd.high, sd.low
FROM stock_day sd, company c, stock s 
WHERE s.ticker_name = c.ticker_name 
AND c.company_name = '$companyName'
AND s.ticker_name = sd.ticker_name
";

//Test code
//$sql_simple = "SELECT DISTINCT company_name FROM company";

$result = pg_query($con, $sql);

$day = array();

$day = pg_fetch_all($result);


//while($row = pg_fetch_array($sql))
// while( $row = pg_fetch_row($result) ){
//     $companyName = $row['company_name'];
    
//     $company_arr[] = array("company_name" => $companyName);
// }

// Encoding array to json format
echo json_encode($day);
