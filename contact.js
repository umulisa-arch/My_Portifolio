document.getElementById('sendButton').addEventListener('click', function (event) {
  event.preventDefault();
  const name = document.getElementById('nameInput').value;
  const email = document.getElementById('emailInput').value;
  const message = document.getElementById('messageInput').value;
  // Send email using mailto
  const mailtoLink = `mailto:agnesrukundo1998@gmail.com?subject=Message from ${name}&body=${message}%0A%0AReply to: ${email}`;
  window.location.href = mailtoLink;
});