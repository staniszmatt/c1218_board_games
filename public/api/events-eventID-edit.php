<?php
session_start();
require_once('../../config/setup.php');
require_once('../../config/mysql_connect.php');
//TODO: Setup an array of data fields that is allowed to change and reject the rest 
$dataCheck = [ "eventID", "date", "startTime", "endTime", "gameTitle", "gameImages"];

if (!isset($_SESSION['userID'])){
   $output['success'] = true;
   $output['logged-in'] = false;
} else {
   print(!isset($_SESSION));
   $data = json_decode( file_get_contents( 'php://input'),true);

   if(!$data){
      $output['success']=false;
      exit();
   }
   
   $output = [
      "success"=> false,
      "output"=> []
   ];
   
   foreach($data as $key=>$value){
      $data[$key] = addslashes($value);
   }
   
   if(!empty($output['error'])){
      print(json_encode($output));
      exit();
   }
   $eventID = $data['eventID'];
   unset($data['eventID']);

   foreach($data as $key=>$value){
      
      for ($index = 0; $index < sizeof($dataCheck); $index++ ){
         if ($key === $dataCheck[$index]){
            $checkValue = true; 
            echo("work here!");
            return; 
         } else {
            $checkValue = false; 
         }
      }
      
      echo($checkValue);
      if (!$checkValue){
         $output['error'][] = "Can not edit {$key}!";
      } 
      else {
         $query = "UPDATE event SET {$key} = '{$value}' WHERE id = '{$eventID}'";
         echo("<div>");
         print_r($query."<br>");
         echo("</div>");
         $result = $db->query($query);
         echo("<div>");
         echo($result."<br>");
         echo("</div>");
         if (!$result){
            $output['error'][] = $result;
         } else {
            $output['success'] = true;
            $output['updated'][] = $result;
         }
      }
   }
}

   // $query   = "UPDATE event SET gameTitle = "New Game" WHERE id = 1"
   
   
//    $query = "SELECT e.id AS eventID, e.hostID, e.date, e.startTime, e.endTime,e.gameTitle, e.gameImages, e.playerLimit, e.location,
//                l.streetAddress, l.city, l.state, l.zipcode, 
//                pn.playerName, 
//                pla.userID AS playerID
//             FROM event AS e
//             JOIN location AS l
//                ON e.location = l.id
//             JOIN playerList AS pl
//                ON e.id = pl.eventID
//             JOIN profile AS p
//                ON pl.userID = p.id
//             JOIN playerList AS pla
//                ON e.id = pla.eventID
//             JOIN profile AS pn
//                ON pla.userID = pn.id
//             WHERE e.id = $eventID";
//    $result = $db->query($query);
//    $event = [];
   
//    if ($result){
//       $output['success'] = true;
   
//       while($row = $result->fetch_assoc()){
//          if ($event) {
//             $event['playerList'][] = [
//                "playerID"=> $row["playerID"],
//                "playerName"=> $row["playerName"]
//             ];
//          } else {
//             $event = [
//                "eventID"=> $row["eventID"],
//                "hostID"=> $row["hostID"],
//                "date"=> $row["date"],
//                "startTime"=> $row["startTime"],
//                "endTime"=> $row["endTime"],
//                "gameTitle"=> $row["gameTitle"],
//                "gameImages"=> $row["gameImages"],
//                "playerLimit"=> $row["playerLimit"],
//                "location"=> $row["location"], 
//             ];
//             $event['location'] = [
//                "streetAddress"=> $row["streetAddress"],
//                "city"=> $row["city"],
//                "state"=> $row["state"],
//                "zipcode"=> $row["zipcode"]
//             ];
//             $event['playerList'][] = [
//                "playerID"=> $row["playerID"],
//                "playerName"=> $row["playerName"]
//             ];
//          }
//       }
//    }
//    $output['event'] = $event;
// }

$json_output = json_encode($output);
print($json_output);
?>
