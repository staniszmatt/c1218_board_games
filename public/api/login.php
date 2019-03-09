<?php
require_once('../../config/setup.php');
require_once('../../config/mysql_connect.php');

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
print_r($data);

echo date("M,d,Y h:i:s ") ;
// $query = "INSERT INTO location 
//             SET streetAddress='{$data['streetAddress']}', 
//                city='{$data['city']}',
//                state='{$data['state']}',
//                zipcode='{$data['zipcode']}'";
               
// $result = $db->query($query);

// if($result){
//    $output['success'] = true;
//    $output['id'] = $id;
// } else {
//       $output['error'] = mysqli_error($db);
// }

// $json_output = json_encode($output);
// print($json_output);
?>