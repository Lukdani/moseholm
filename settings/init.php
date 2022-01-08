<?php
require $_SERVER['DOCUMENT_ROOT'] ."/moseholm/classes/classDB.php";

define("CONFIG_LIVE", "0"); // 0: Test enviroment || 1: Live enviroment

if(CONFIG_LIVE == 0){
    $DB_SERVER = "localhost";
    $DB_NAME = "moseholm";
    $DB_USER = "root";
    $DB_PASS = "";
}else{
    $DB_SERVER = "lukdani.com.mysql:3306";
    $DB_NAME = "lukdani_commoseholm";
    $DB_USER = "lukdani_commoseholm";
    $DB_PASS = "ze4l4nd6";
}

$db = new db($DB_SERVER, $DB_NAME, $DB_USER, $DB_PASS);