<?php
$db = pg_connect("host=localhost port=5432 dbname=final user=postgres password=yolo");

$exchangeName = $_POST['exchange_name'];

$exchangeName1 = str_replace(' ','',$exchangeName);

$sql = "select u.user_id, u.share_count from users u where not exists( (select s.ticker_name from stock s where s.exchange_name = '$exchangeName1') except (select us.ticker_name from user_shares us, stock s where us.ticker_name = s.ticker_name AND us.user_id = u.user_id)  )";


$result = pg_query($db, $sql);
$company_arr = array();
$company_arr = pg_fetch_all($result);
number
echo json_encode($company_arr);
?>