<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
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
    $name=$_POST['name'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    echo $name;
    $s1="SELECT * from users WHERE email='$email';";
    $stmt = $conn->query($s1);
    $x=$stmt->num_rows;
    echo $x;
   // $stmt->bind_param("s", $email);
    if($x==0)
    {
        $st="insert into users VALUES(NULL,'$name','$email','$password');";
        if($conn->query($st))
         $response["status"]="success";
         $response["email"]=$email;
    }
    echo json_encode($response);
}?>