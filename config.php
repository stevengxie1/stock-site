<?php
$host = "localhost"; /* Host name */
$user = "postgres"; /* User */
$password = "12345"; /* Password */
$dbname = "stock_db"; /* Database name */

debug_to_console("In config.php");

//$con = pg_connect($host, $user, $password,$dbname);

$con = pg_connect("host=localhost dbname=stock_db user=postgres password=12345");
// Check connection
if (!$con) {
 die("Connection failed: " . pg_connect_error());
}

//DEBUGGER
function debug_to_console( $data ) {
    $output = $data;
    if ( is_array( $output ) )
        $output = implode( ',', $output);

    echo "<script>console.log( 'Debug Objects: " . $output . "' );</script>";
}