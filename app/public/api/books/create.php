<?php

try {
    $_POST = json_decode(
                file_get_contents('php://input'), 
                true,
                2,
                JSON_THROW_ON_ERROR
            );
} catch (Exception $e) {
    header($_SERVER["SERVER_PROTOCOL"] . " 400 Bad Request");
    // print_r($_POST);
    exit;
}

require("class/DbConnection.php");


// Step 1: Get a datase connection
$db = DbConnection::getConnection();

// Step 2: Create & run the query
$stmt = $db->prepare(
  'INSERT INTO books ( title, author, publishyr, pgcount, msrp)
  VALUES (?, ?, ?, ?, ?)'
);

$stmt->execute([
  $_POST['title'],
  $_POST['author'],
  $_POST['publishyr'],
  $_POST['pgcount'],
  $_POST['msrp']
]);

//Get auto-generated PK from DB
//https://www.php.net/manual/en/pdo.lastinsertid.php
//$pk = $db->lastInsertId();  

// Step 4: Output
header('HTTP/1.1 303 See Other');
header('Location: ../books/');