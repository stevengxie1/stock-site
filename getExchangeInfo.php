<?php
$db = pg_connect("host=localhost port=5432 dbname=final user=postgres password=yolo");

$exchangeName = $_POST['exchange_name'];
$exchangeName1 = str_replace(' ','',$exchangeName);

$sql = "select ticker_name, company_name, user_id, number
from users natural join user_shares natural join stock natural join company
where exchange_name = '$exchangeName1'";

$result = pg_query($db, $sql);
$company_arr = array();
$company_arr = pg_fetch_all($result);
echo json_encode($company_arr);
?>