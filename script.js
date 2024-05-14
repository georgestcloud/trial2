document.addEventListener('DOMContentLoaded', function() {
    var carousel = document.querySelector('#demo');
    var paginationButtons = carousel.querySelectorAll('.carousel-pagination button');
    var carouselItems = carousel.querySelectorAll('.carousel-item');
    var carouselInstance = new bootstrap.Carousel(carousel, {
        interval: 5000 // Set interval to 5 seconds (5000 milliseconds)
    });

    carousel.addEventListener('slid.bs.carousel', function() {
        var activeIndex = carousel.querySelector('.carousel-item.active').getAttribute('data-bs-slide-to');
        paginationButtons.forEach(function(button, index) {
            if (index == activeIndex) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    });

    var swipeLeftButton = document.createElement('button');
    swipeLeftButton.classList.add('carousel-swipe', 'carousel-swipe-left');
    swipeLeftButton.innerHTML = '&lt;'; // You can put your left arrow icon or text here
    swipeLeftButton.addEventListener('click', function() {
        carouselInstance.prev();
    });
    carousel.appendChild(swipeLeftButton);

    var swipeRightButton = document.createElement('button');
    swipeRightButton.classList.add('carousel-swipe', 'carousel-swipe-right');
    swipeRightButton.innerHTML = '&gt;'; // You can put your right arrow icon or text here
    swipeRightButton.addEventListener('click', function() {
        carouselInstance.next();
    });
    carousel.appendChild(swipeRightButton);
});
