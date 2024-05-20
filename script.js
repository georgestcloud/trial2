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



// Function to check if the device is in mobile browser desktop mode
function isMobileBrowserDesktopMode() {
  return window.innerWidth >= 700 && window.innerWidth <= 1024;
}

// Apply the style if in mobile browser desktop mode
function applyStyleForMobileBrowserDesktopMode() {
  if (isMobileBrowserDesktopMode()) {
    var carouselContainer = document.getElementById("demo"); // Assuming "demo" is the ID of the carousel container
    var carouselImages = document.querySelectorAll(".carousel-item img");
    carouselImages.forEach(function(image) {
      image.style.height = "1150px"; // Adjust height as needed
    });
    carouselContainer.style.height = "auto"; // Reset height to auto to accommodate the increased image height
  }
}



// Apply the style when the page loads and on window resize
window.onload = applyStyleForMobileBrowserDesktopMode;
window.onresize = applyStyleForMobileBrowserDesktopMode;















// Function to increase font size and weight for carousel captions in mobile browser desktop mode
function adjustCarouselCaptionStyle() {
  if (isMobileBrowserDesktopMode()) {
    var carouselCaptions = document.querySelectorAll(".carousel-caption");
    carouselCaptions.forEach(function(caption) {
      caption.style.fontWeight = "bold";
      caption.style.fontSize = "55px";
    });
  }
}

// Apply the style for carousel captions when the page loads and on window resize
window.onload = function() {
  applyStyleForMobileBrowserDesktopMode();
  adjustCarouselCaptionStyle();
};
window.onresize = function() {
  applyStyleForMobileBrowserDesktopMode();
  adjustCarouselCaptionStyle();
};








// Get modal element
var modal = document.getElementById("myModal");

// Get button that opens the modal
var openModalBtn = document.getElementById("openModalBtn");

// Get close button element
var closeBtn = document.getElementById("closeBtn");

// Get danger button element
var dangerBtn = document.getElementById("dangerBtn");

// Open modal when the open button is clicked
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// Close modal when the close button is clicked
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal when the danger button is clicked
dangerBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




