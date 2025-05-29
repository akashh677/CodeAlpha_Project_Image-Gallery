const images = document.querySelectorAll('.gallery img');
const gallery = document.getElementById('gallery');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

let currentIndex = 0;

function refreshListeners() {
  const newImages = document.querySelectorAll('.gallery img');
  newImages.forEach((img, index) => {
    img.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      lightboxImg.src = img.src;
      currentIndex = index;
    });
  });
}

refreshListeners();

function closeLightbox() {
  lightbox.style.display = 'none';
}

function nextImage() {
  const imgs = document.querySelectorAll('.gallery img');
  currentIndex = (currentIndex + 1) % imgs.length;
  lightboxImg.src = imgs[currentIndex].src;
}

function prevImage() {
  const imgs = document.querySelectorAll('.gallery img');
  currentIndex = (currentIndex - 1 + imgs.length) % imgs.length;
  lightboxImg.src = imgs[currentIndex].src;
}

// Filter function
function filterGallery(category) {
  const imgs = document.querySelectorAll('.gallery img');
  imgs.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'inline';
    } else {
      img.style.display = 'none';
    }
  });
}

// Upload function
function uploadImage() {
  const input = document.getElementById('uploadInput');
  const file = input.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const newImg = document.createElement('img');
      newImg.src = e.target.result;
      newImg.alt = "Uploaded Image";
      newImg.className = "uploaded";
      gallery.appendChild(newImg);
      refreshListeners();
    };
    reader.readAsDataURL(file);
  }
}
