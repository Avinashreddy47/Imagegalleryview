<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access,Origin,Accept");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$servername = "172.17.0.2";
$user = "root";
$pass = "password";
$db_name="php_auth_api";
$conn = new mysqli($servername,$user,$pass,$db_name);
$response=array();
if($_SERVER["REQUEST_METHOD"]=="POST")
{
    $email=$_POST['email'];
    $password=$_POST['password'];
    $s="SELECT * from users WHERE email='$email' and password='$password';";
    $stmt = $conn->query($s);
    $x=$stmt->num_rows;
   // echo $x;
   // $stmt->bind_param("s", $email);
    if($x>0)
    {
    $response["status"]="success";
    $response["email"]=$email;
    $response["password"]=$password;
    http_response_code(201);

    }
    else
    {
    echo "invalid user details";
    }
    echo json_encode($response);
}
?>