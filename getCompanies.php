<?php
include "config.php";

// A very useful reference: http://makitweb.com/auto-populate-dropdown-with-jquery-ajax/

// After selecting the exchange_name, 
//debug_to_console( "config added" );

$exchangeName = $_POST['exchange_name'];

//debug_to_console( "exchange_name: $exchangeName" );

$sql = "SELECT DISTINCT company_name FROM company WHERE stock.ticker_name =company.ticker_name AND stock.exchange_name = ".$exchangeName;

$result = pg_query($con, $sql);

$company_arr = array();

//
while( $row = pg_fetch_array($result) ){
    $companyName = $row['company_name'];
  
    $company_arr[] = array("company_name" => $companyName);
}

// Encoding array to json format
echo json_encode($company_arr);
