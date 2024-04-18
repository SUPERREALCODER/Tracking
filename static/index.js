
$("#track").click(function(){
   var currentDate = new Date();
    var date = currentDate.getDate()+"/"+(currentDate.getMonth()+1)+"/"+currentDate.getFullYear();
    var time = currentDate.getHours()+"/"+currentDate.getMinutes();
    var data = date+"/"+time;
  document.getElementById("test").innerHTML = data;
  
  // Send data to Flask route using POST request
  fetch('/tracking', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => response.json())
.then(data => {
    // Display the received date and time
    document.getElementById('result').textContent = "Received date and time: " + data.received_date_time;
})
.catch(error => console.error('Error:', error));
  
  
  });