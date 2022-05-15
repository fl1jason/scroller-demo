const car = document.getElementById('car');

document.addEventListener('scroll', function(e) {
    lastKnownScrollPosition = window.scrollY;
  
    window.requestAnimationFrame(function() {
        if (lastKnownScrollPosition > 10) {    
            let percentage = lastKnownScrollPosition / document.body.scrollHeight * 100;
            let offset = percentage / window.innerHeight * 100;

            if (lastKnownScrollPosition < document.body.scrollHeight)
            {
                car.style.top = (lastKnownScrollPosition * 1.20) + 'px';
            }
        }
    });
  });