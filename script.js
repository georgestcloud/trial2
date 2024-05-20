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






























































// JavaScript to create and display the modal
document.addEventListener('DOMContentLoaded', (event) => {
  const openModalBtn = document.getElementById("openModal");
  
  // Event listener to create and display the modal
  openModalBtn.addEventListener('click', function() {
      const modal = document.createElement("div");
      modal.classList.add("modal");
      
      const modalContent = document.createElement("div");
      modalContent.classList.add("modal-content");
      
      const modalHeader = document.createElement("div");
      modalHeader.classList.add("modal-header");
      
      const headerTitle = document.createElement("h2");
      headerTitle.textContent = "Green Infrastructure";
      
      const closeModalBtn = document.createElement("span");
      closeModalBtn.classList.add("close");
      closeModalBtn.textContent = "×";
      
      modalHeader.appendChild(headerTitle);
      modalHeader.appendChild(closeModalBtn);
      
      const modalBody = document.createElement("div");
      modalBody.classList.add("modal-body");
      modalBody.innerHTML = `
          <p>
              <span>G</span><span>R</span><span>E</span><span>E</span><span>N</span>
              <span>I</span><span>N</span><span>F</span><span>R</span><span>A</span><span>S</span><span>T</span><span>R</span><span>U</span><span>C</span><span>T</span><span>U</span><span>R</span><span>E</span>
              <span>A</span><span>N</span><span>D</span>
              <span>P</span><span>O</span><span>W</span><span>E</span><span>R</span>
              <span>I</span><span>N</span><span>V</span><span>E</span><span>S</span><span>T</span><span>M</span><span>E</span><span>N</span><span>T</span><span>S</span>
              <span>P</span><span>L</span><span>C</span>
               is a company dedicated to advancing sustainable energy solutions. Their current flagship initiative involves the comprehensive development and management of a Solar Photovoltaic (PV) Farm in Mill City Clean Energy City, Iwopin, Ogun State. This project will feature a 250 MWA solar farm and a 63 MW/126 MWh Battery Energy Storage System (BESS).
              <br> The company's scope of work encompasses the entire project lifecycle, including design, construction, financing, commissioning, operation, and maintenance.
          </p>
          <p>
              A key component of the project is its integration with the West African Power Pool through a 440V HVDC Submarine Transmission cable, linking Iwopin, Nigeria, to Sakete, Benin Republic, in its first phase. <br> Additionally, the initiative includes the establishment of a Marine Wildlife Conservation Centre and a Biogas Generation Project utilizing Water Hyacinth Biomass (WHB), in collaboration with the World Wildlife Fund.
          </p>
          <p>
              The Mill City Solar PV Project aims to reduce reliance on carbon-based fuels, achieve renewable energy targets, and lower greenhouse gas emissions, reflecting the company's commitment to environmental sustainability and clean energy.
          </p>
      `;
      
      modalContent.appendChild(modalHeader);
      modalContent.appendChild(modalBody);
      
      modal.appendChild(modalContent);
      
      document.body.appendChild(modal);
      
      // Event listener to close the modal using the 'X' button
      closeModalBtn.addEventListener('click', function() {
          modal.style.display = "none";
      });

      // Event listener to close the modal when clicking outside of it
      window.addEventListener('click', function(event) {
          if (event.target == modal) {
              modal.style.display = "none";
          }
      });

      // Dynamically adjust modal height and width based on screen size
      function adjustModalStyle() {
          if (window.innerWidth >= 1100) {
              modal.style.height = "100%";
              modal.style.overflowY = "scroll";
          } else if (window.innerWidth < 800) {
              modal.style.width = "100%";
          }
      }

      // Apply the style for modal when the page loads and on window resize
      window.onload = adjustModalStyle;
      window.onresize = adjustModalStyle;
      
      // Display the modal
      modal.style.display = "block";
  });
});
