<?php
include "config.php";

// A very useful reference: http://makitweb.com/auto-populate-dropdown-with-jquery-ajax/

// After selecting the exchange_name, 
//debug_to_console( "config added" );

$exchange_Name = $_POST['exchange_name'];
$exchangeName = strtoupper($exchange_Name);
//debug_to_console( "exchange_name: $exchangeName" );

$sql = "SELECT DISTINCT c.company_name, c.ticker_name, c.valuation, c.executive_name 
FROM company c, stock s 
WHERE s.ticker_name = c.ticker_name 
AND s.exchange_name = '$exchangeName'";

if($exchange_Name == '*') {
    $sql = "SELECT DISTINCT c.company_name, c.ticker_name, c.valuation, c.executive_name 
    FROM company c, stock s 
    WHERE s.ticker_name = c.ticker_name";
}
//Test code
//$sql_simple = "SELECT DISTINCT company_name FROM company";

$result = pg_query($con, $sql);

$company_arr = array();

$company_arr = pg_fetch_all($result);


//while($row = pg_fetch_array($sql))
// while( $row = pg_fetch_row($result) ){
//     $companyName = $row['company_name'];
    
//     $company_arr[] = array("company_name" => $companyName);
// }

// Encoding array to json format
echo json_encode($company_arr);
