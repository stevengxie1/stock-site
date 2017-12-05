<?php
$db = pg_connect("host=localhost port=5432 dbname=final user=postgres password=yolo");

$executiveName = $_POST['company_name'];
$str = ltrim($executiveName);

$sql = "select executive_name, salary, net_value
from executive natural join company 
where company_name='$str'
";

$result = pg_query($db, $sql);
$company_arr = array();
$company_arr = pg_fetch_all($result);
echo json_encode($company_arr);
?>