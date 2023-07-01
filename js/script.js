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

function openModal(newsId) {
  var modal = document.getElementById("modal");
  var modalTitle = document.getElementById("modal-title");
  var modalDescription = document.getElementById("modal-description");
  var modalDate = document.getElementById("modal-date");

  // Set konten modal berdasarkan ID berita yang diklik
  if (newsId === 1) {
    modalTitle.innerHTML = "Judul Berita 1";
    modalDescription.innerHTML = "Isi berita 1...";
    modalDate.innerHTML = "Tanggal Berita 1";
  } else if (newsId === 2) {
    modalTitle.innerHTML = "Judul Berita 2";
    modalDescription.innerHTML = "Isi berita 2...";
    modalDate.innerHTML = "Tanggal Berita 2";
  }

  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}
