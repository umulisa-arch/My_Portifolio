document.getElementById('sendButton').addEventListener('click', function (event) {
  event.preventDefault();
  const name = document.getElementById('getname').value;
  const email = document.getElementById('getemail').value;
  const subject = document.getElementById('getsubject').value;
  const message = document.getElementById('getmessage').value;

  // Send email using mailto
  const mailtoLink = `mailto:agnesrukundo1998@gmail.com?subject=Message from ${name}&body=${message}%0A%0AReply to: ${email}`;
  window.location.href = mailtoLink;
});