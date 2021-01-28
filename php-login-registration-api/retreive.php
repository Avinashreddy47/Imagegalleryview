<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access,Origin,Accept");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");


$conn = mysqli_connect("172.17.0.2","root","password","mysqlp");
    $response=array();
    if($_SERVER["REQUEST_METHOD"]=="POST") {
        $email = $_POST['email'];
        $sql = "select * from image where email='$email';";
        $result = $conn->query($sql) or die($conn->error);
        while($row = $result->fetch_assoc()) {
            array_push($response,$row["name"]);
        }
        echo json_encode($response);
    }
?>