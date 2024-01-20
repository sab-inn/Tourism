 document.addEventListener("DOMContentLoaded", function() {
            // Hide the skeleton and show the images when they are loaded
            var images = document.querySelectorAll('.scrollable-images img');
            var skeleton = document.querySelector('.skeleton-container');

            images.forEach(function(image) {
                image.addEventListener('load', function() {
                    skeleton.style.display = 'none';
                    image.style.display = 'block';
                });
            });

            // Automatically change images every 3 seconds (adjust as needed)
            var currentIndex = 0;
            setInterval(function() {
                images[currentIndex].style.display = 'none';
                currentIndex = (currentIndex + 1) % images.length;
                images[currentIndex].style.display = 'block';
            }, 3000);
        });