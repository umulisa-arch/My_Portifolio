 function submitToGoogleSheet(){
document.getElementById('myForm').addEventListener('submit', function(e) {
  e.preventDefault();
  var formData = new FormData(this);
  
  fetch('https://script.google.com/macros/s/AKfycbx8TKBhPyQWk3g2OsS1eJu4jJQfnrG7SAQ33qt69AnTTrGVc4e6aHvizpNJ141RB_mkNQ/exec', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    console.log('Form submitted successfully');
    // Handle success or redirect user
  })
  .catch(error => console.error('Error:', error));
});
}
