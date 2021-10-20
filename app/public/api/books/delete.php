<?php

$num = 2;
$foo = "To be";
$bar = "or not " .$num. " be";

echo $foo . " " . $bar . "\n";

echo $num * $num * $num;

$arr = [
    "first" => "Tom",
    "second" => "Bipin",
    "best" => "DS"
];

$arr2 = [1,1,2,3,5,8];


if (true) {
    echo "\nTRUE\n";
}

while (true) {
    //This way it doesn't actually do anything
    break;
}

# This is also a comment

/* This is a 
multi-line 
comment */

function printList($someArr) {
    echo "<ul>\n";
    foreach($someArr as $key => $val) {
        echo "<li>".$key." is ".$val."</li>\n";
    }
    echo "</ul>\n";
}

printList($arr);
printList($arr2);

    echo json_encode(
        $arr2, 
        JSON_PRETTY_PRINT | JSON_THROW_ON_ERROR
    );