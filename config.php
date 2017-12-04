<?php
$host = "localhost"; /* Host name */
$user = "postgres"; /* User */
$password = "12345"; /* Password */
$dbname = "stock_db"; /* Database name */

//debug_to_console("In config.php");

//$con = pg_connect($host, $user, $password,$dbname);

$con = pg_connect("host=localhost port=5432 dbname=stock_db user=postgres password=12345");
// Check connection
if (!$con) {
 die("Connection failed: " . pg_connect_error());
}