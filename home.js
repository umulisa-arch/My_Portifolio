window.addEventListener('load', function() {
    const homePhoto = document.querySelector('.homephoto');
    
    setTimeout(function() {
        homePhoto.style.boxShadow = '0 0 10px 5px rgba(0, 250, 0, 0.5)'; // Change to green after 5 seconds
        setTimeout(function() {
            homePhoto.style.boxShadow = '0 0 10px 5px rgba(250, 0, 0, 0.5)'; // Change to red after another 5 seconds
        }, 5000);
    }, 5000);
});
