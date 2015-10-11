<?php

session_start();

require('database.php');

switch($_SERVER["REQUEST_METHOD"]) {
  case 'GET':
    get_feedback();
    break;
  case 'POST':
    post_feedback();
    break;
  default:
    http_response_code(405);
    die();
}

function get_feedback() {
  if ($_SESSION["loggedin"] == true) {
    $db = new Database();
    $sth = $db->prepare('SELECT * FROM feedback');
    $sth->execute();
    echo json_encode($sth->fetchAll(PDO::FETCH_ASSOC));
  } else {
    echo json_encode(array('status' => 'unauthorized'));
    http_response_code(403);
  }
}

function post_feedback() {
  $data = json_decode(file_get_contents('php://input'));
  $db = new Database();
  $sth = $db->prepare('INSERT INTO feedback (general, communications, communicationsComment, lecture, lectureComment, misc) VALUES (:general, :communications, :communicationsComment, :lecture, :lectureComment, :misc)');
  if($sth->execute(array(
    ':general' => isset($data->general) ? $data->general : -1,
    ':communications' => isset($data->communications) ? $data->communications : -1,
    ':communicationsComment' => isset($data->communicationsComment) ? $data->communicationsComment : '',
    ':lecture' => isset($data->lecture) ? $data->lecture : -1,
    ':lectureComment' => isset($data->lectureComment) ? $data->lectureComment : '',
    ':misc' => isset($data->misc) ? $data->misc : ''
  ))) {
    echo json_encode(array('status' => 'ok'));
    http_response_code(201);
  } else {
    print_r($db->errorInfo());
    echo json_encode(array('status' => 'error'));
    http_response_code(500);
  }
}
