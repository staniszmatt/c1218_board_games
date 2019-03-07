<?php 

if (!function_exists(('handleError'))) {
   function handleError($errorObj) {
      print(json_encode( 
         [
            'success'=> false,
            'error'=> "message: {$errorObj->getMessage()},
                        file: {$errorObj->getFile()},
                        line: {$errorObj->getLine()}"
         ]
      ));
   }
}

set_exception_handler('handleError');

?>