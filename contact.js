document.getElementById('sendButton').addEventListener('click', function (event) {
  event.preventDefault();
  const name = document.getElementById('getname').value;
  const email = document.getElementById('getemail').value;
  const subject = document.getElementById('getsubject').value;
  const message = document.getElementById('getmessage').value;

  // Send email using mailto
  const mailtoLink = `mailto:agnesrukundo1998@gmail.com?subject=Message from ${name} : ${subject} &body=${message}%0A%0AReply to: ${email}`;
  window.location.href = mailtoLink;

  function showAlert() {
    var alertBox = document.getElementById("alertMsg");
    alertBox.style.display = "block";

    setTimeout(function(){
      alertBox.style.display = "none";
    }, 3000);
  }
  showAlert();
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

