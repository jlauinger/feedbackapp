<?php

const USER = 'user';
const PASS = 'password';

session_start();

switch($_SERVER["REQUEST_METHOD"]) {
  case 'GET':
    get_login();
    break;
  case 'POST':
    post_login();
    break;
  case 'DELETE':
    delete_login();
    break;
  default:
    http_response_code(405);
    die();
}

function get_login() {
  if ($_SESSION["loggedin"] == true) {
    echo json_encode(array(
      'loggedin' => true,
      'status' => 'logged in'
    ));
  } else {
    echo json_encode(array(
      'loggedin' => false,
      'status' => 'not logged in'
    ));
  }
}

function post_login() {
  $data = json_decode(file_get_contents('php://input'));
  if (isset($data->user) && $data->user == USER
      && isset($data->password) && $data->password == PASS) {
    $_SESSION["loggedin"] = true;
    echo json_encode(array(
      'loggedin' => true,
      'status' => 'successfully logged in'
    ));
  } else {
    $_SESSION["loggedin"] = false;
    echo json_encode(array(
      'loggedin' => false,
      'status' => 'invalid credentials'
    ));
    http_response_code(400);
  }
}

function delete_login() {
  $_SESSION["loggedin"] = false;
  echo json_encode(array(
    'loggedin' => false,
    'status' => 'successfully logged out'
  ));
}
