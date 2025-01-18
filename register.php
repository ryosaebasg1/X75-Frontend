<?php


// $request = json_decode(json: file_get_contents(filename: 'php://input'));
$request = file_get_contents(filename: 'php://input');


var_dump($request);

