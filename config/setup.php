<?php 
if (!function_exists(('handleError'))) {
  function handleError($errorObj) {
    print(json_encode( 
      [
        'success'=> false,
        'error'=> "{$errorObj->getMessage()}"
      ]
    ));
  }
}

set_exception_handler('handleError');
?>