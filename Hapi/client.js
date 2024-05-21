const axios = require('axios');
process.env.NODE_TLS_REJECT_UNAUTHORIZED=0
axios.post('https://localhost:3000/clientDataNew', {
    name: 'sachin'
  })
  .then(function (response) {
    if(response.data){
    	console.log("response-->",response.data);    	
    }
  })
  .catch(function (error) {
    console.log("error-->",error);
  })
  .finally(function () {
    // always executed
    console.log("Finally-->");
  });