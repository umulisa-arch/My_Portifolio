function displayMessage() {
    // var inputField = document.getElementById("myInput");
    // var message = document.getElementById("message");
  
    if (inputField.value.trim() !== '') {
      message.style.display = "block";
    } else {
      message.style.display = "none";
    }
  }