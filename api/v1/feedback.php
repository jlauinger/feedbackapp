<?php

require('database.php');

switch($_SERVER["REQUEST_METHOD"]) {
  case "GET":
    get_feedback();
    break;
  case "POST":
    add_feedback();
    break;
  default:
    http_response_code(405);
    die();
}

function get_feedback() {
  $db = new Database();
  $sth = $db->prepare('SELECT * FROM feedback');
  $sth->execute();
  echo json_encode($sth->fetchAll(PDO::FETCH_ASSOC));
}

function add_feedback() {
  $db = new Database();
  $sth = $db->prepare('INSERT INTO feedback (general, generalComment, communications, communicationsComment, lecture, lectureComment, misc) VALUES (:general, :generalComment, :communications, :communicationsComment, :lecture, :lectureComment, :misc)');
  if($sth->execute(array(
    ':general' => $_POST["general"],
    ':generalComment' => $_POST["generalComment"],
    ':communications' => $_POST["communications"],
    ':communicationsComment' => $_POST["communicationsComment"],
    ':lecture' => $_POST["lecture"],
    ':lectureComment' => $_POST["lectureComment"],
    ':misc' => $_POST["misc"]
  ))) {
    echo json_encode(array('status' => 'ok'));
    http_response_code(201);
  } else {
    print_r($db->errorInfo());
    echo json_encode(array('status' => 'error'));
    http_response_code(500);
  }
}
