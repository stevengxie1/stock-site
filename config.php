<?php
$host = "localhost"; /* Host name */
$user = "root"; /* User */
$password = "123456"; /* Password */
$dbname = "stock_info"; /* Database name */

$con = mysqli_connect($host, $user, $password,$dbname);
// Check connection
if (!$con) {
 die("Connection failed: " . mysqli_connect_error());
}