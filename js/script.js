document.addEventListener("DOMContentLoaded", function() {
  var galleryImages = document.querySelectorAll("#gallery img");
  var overlay = document.getElementById("overlay");
  var popupImage = document.querySelector("#popup img");
  var prevBtn = document.querySelector("#popup .prev");
  var nextBtn = document.querySelector("#popup .next");

  var currentIndex = 0;

  galleryImages.forEach(function(image, index) {
      image.addEventListener("click", function() {
          currentIndex = index;
          showImage(index);
          overlay.style.display = "block";
      });
  });

  function showImage(index) {
      var imgSrc = galleryImages[index].getAttribute("src");
      popupImage.setAttribute("src", imgSrc);
  }

  prevBtn.addEventListener("click", function() {
      currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      showImage(currentIndex);
  });

  nextBtn.addEventListener("click", function() {
      currentIndex = (currentIndex + 1) % galleryImages.length;
      showImage(currentIndex);
  });

  overlay.addEventListener("click", function(event) {
      if (event.target === overlay) {
          overlay.style.display = "none"
      }
  });
});