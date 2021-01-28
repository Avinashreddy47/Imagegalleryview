<?php
$servername = "172.17.0.2";
$user = "root";
$pass = "password";
$conn = new mysqli($servername,$user,$pass);
if($conn){
    $sql = "create database if not exists mysqlp";
    $conn->query($sql);
    $sql = "use mysqlp";
    $conn->query($sql);
    $sql = "create table if not exists image(id int(10) auto_increment primary key,name varchar(50),email varchar(50));";
    $conn->query($sql);
}
?>