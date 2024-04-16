
$("#track").click(function(){
   var currentDate = new Date();
    var date = currentDate.getDate()+"/"+(currentDate.getMonth()+1)+"/"+currentDate.getFullYear();
    var time = currentDate.getHours()+"/"+currentDate.getMinutes();
    var data = date+"/"+time;
  document.getElementById("test").innerHTML = data;
  
  function sendData(data) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/tracking');
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));
    
    xhr.onload = function() {
      if (xhr.status === 200) {
          console.log('Data sent successfully!');
      } else {
          console.log('Error sending data: ' + xhr.statusText);
      }
  };
  }
  
  });