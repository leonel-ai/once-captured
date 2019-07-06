<?php
  header("Access-Control-Allow-Origin: *");
  $rest_json = file_get_contents("php://input");
  $_POST = json_decode($rest_json, true);

  if (empty($_POST['name']) && empty($_POST['fiance'])) && empty($_POST['email'])) && empty($_POST['date'])) && empty($_POST['location']))die();

  if ($_POST)
    {

    // set response code - 200 OK

    http_response_code(200);
    $subject = $_POST['name'] . ': New Inquiry';
    $to = "oncecinemaco@gmail.com";
    $from = $_POST['email'];

    // data
    $client= $_POST['name'];
    $fiance = $_POST['fiance'];
    $contact = $_POST['email'];
    $date = $_POST['date'];
    $place = $_POST['location'];
    $phone = $_POST['phone'];
    $msg = $_POST['message'];

    $formData = 'Client: ' . $client . '\nFiance: ' . $fiance . '\nContact: ' . $contact . '\nDate: ' . $date . '\nPlace: ' . $place . '\nPhone: ' . ($phone == true ? $phone: 'None provided') .'\nMessage: ' . ($msg == true ? $msg: 'No message');

    // Headers

    $headers = "MIME-Version: 1.0\r\n";
    $headers.= "Content-type: text/html; charset=UTF-8\r\n";
    $headers.= "From: <" . $from . ">";
    mail($to, $subject, $formData, $headers);

    // echo json_encode( $_POST );

    echojson_encode(array(
      "sent" => true
    ));
    }
    else
    {

    // tell the user about error

    echojson_encode(["sent" => false, "message" => "Something went wrong"]);
    }

?>