document.getElementById('sendButton').addEventListener('click', function (event) {
  let messages = []
  if(name.value === '' || name.value == null){
    messages.push('Name is required')
  }
  if(messages.length>0){
    event.preventDefault();
    errorElement.innerText = messages.join(',')
  }
  
  const name = document.getElementById('getname').value;
  const email = document.getElementById('getemail').value;
  const subject = document.getElementById('getsubject').value;
  let message = document.getElementById('getmessage').value;
  const phone = document.getElementById('getphone').value;
  const form = document.getElementById('formSubmit')
  const errorElement = document.getElementById('error')

  // Send email using mailto
  const mailtoLink = `mailto:agnesrukundo1998@gmail.com?subject=Message from ${name} / ${phone} : ${subject} &body=${message}%0A%0AReply to: ${email}`;
  window.location.href = mailtoLink;

  //for alert message after sending a message

  function showAlert() {
    var alertBox = document.getElementById("alertMsg");
    alertBox.style.display = "block";

    setTimeout(function(){
      alertBox.style.display = "none";
    }, 4000);
  }
  showAlert()
  // return alert("Your data sent well!!");


  // function sendMessage() {
  //   var Name = document.getElementById('Name').value;
  //   var email = document.getElementById('email').value;
  //   var subject = document.getElementById('subject').value;
  //   var message = document.getElementById('message').value;
    
  //   alert('Name: ' + Name + '\nEmail: ' + email + '\nsubject: ' + subject +
  //         '\nmessage: ' + message );
  
   
  // }
  // sendMessage();

});

