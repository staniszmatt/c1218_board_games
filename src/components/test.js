import React, { Component } from 'react';
import axios from 'axios';

class Test extends Component {
   async componentDidMount(){
      
      const resp = await axios.get('/api/test.php');

      console.log('Test Resp:', resp);
   }
   render(){
      return <h1>Test Stuff</h1>
   }
}

export default Test;
