<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
//require_once("../classes/Database.php");
//require_once("../middlewares/Auth.php");
//require_once("./Database.php");
require __DIR__.'/classes/Database.php';
require __DIR__.'/classes/JwtHandler.php';

$db_connection = new Database();
$conn = $db_connection->dbConnection();

$data = json_decode(file_get_contents("php://input"));
$returnData = [];

$temp_name  = $_FILES['image']['tmp_name'];
$fetch_user_by_email = "SELECT * FROM `images` WHERE `email`=:email";
            $query_stmt = $conn->prepare($fetch_user_by_email);
            $query_stmt->bindValue(':email', $email,PDO::PARAM_STR);
            $query_stmt->execute();

            // IF THE USER IS FOUNDED BY EMAIL
            if($query_stmt->rowCount()):
                $row = $query_stmt->fetch(PDO::FETCH_ASSOC);
                $uploadfile='/Desktop/react-proj/src/components/Login/';
                $name=$uploadfile.basename($_FILES['image']['name']);
                if(isset($_POST['submit'])){
                    $name=$_POST['name'];
                    $image=$_FILES['image']['name'];
                $insert="Insert into images Values('a@gmail.com','$image')";
                if(move_uploaded_file($temp_name,$name)){
                     echo 'File uploaded successfully<br />';
                } else {
                       echo 'You should select a file to upload !!';
            }
            }
 $jsonMsg = json_encode($Msg);
 echo $jsonMsg
?>