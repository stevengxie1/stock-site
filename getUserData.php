<?php
$db = pg_connect("host=localhost port=5432 dbname=stock_db user=postgres password=12345");

$userId = $_POST['user_id'];
$sql = "SELECT number, ticker_name, purchase_price 
        from user_shares 
        where user_id='$userId'";

$result = pg_query($db, $sql);
$company_arr = array();
$company_arr = pg_fetch_all($result);

echo json_encode($company_arr);
?>