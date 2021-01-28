<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

$response=array();
session_start();
if($_SERVER["REQUEST_METHOD"]=="POST")
{
  $s="select count(id) id from image";
  $no=($conn->query($s)->FETCH_ASSOC())["id"];
  $email=$_POST["email"];
  $file=$_FILES["imagefile"]["name"];
  $temp_name=$_FILES["imagefile"]["tmp_name"];

//   
//   $target="/home/avinashreddysallagonda/Desktop/Assignment/php-login-registration-api/classes/images/";
//   if (!mkdir($target, 0777, true)) {
//     die('Failed to create folders...');
// }
$root = $_SERVER["DOCUMENT_ROOT"];
 $target =  './public/images/';
 if( !file_exists($target) ) {
  mkdir($target, 0755, true);
}
  $imageFileType = strtolower(pathinfo($file,PATHINFO_EXTENSION));
//  echo $imageFileType;
  $targetpath = $target.$file;
  //echo $targetpath;
 //   echo "The file $target does not exists";
  $file="image".$no.".".$imageFileType;
  //echo $targetpath;
  move_uploaded_file($temp_name, $targetpath);
  $sql = "insert into image values(null,'$file','$email');";
  $conn->query($sql);
  $response["status"]="success";
  $response["file"]= $file;
  $response["email"]=$email;
}
    echo json_encode($response);
