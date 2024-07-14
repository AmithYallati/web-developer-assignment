document.getElementById('contact-us-btn').addEventListener('click', () => {
  document.getElementById('contact-form').style.display = 'block';
});

document.getElementById('close-form-btn').addEventListener('click', () => {
  document.getElementById('contact-form').style.display = 'none';
});

// Slider functionality
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
  if (index < 0) {
    slideIndex = slides.length - 1;
  } else if (index >= slides.length) {
    slideIndex = 0;
  } else {
    slideIndex = index;
  }

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${-slideIndex * 100}%)`;
  });

  dots.forEach((dot, i) => {
    if (i === slideIndex) {
      dot.style.backgroundColor = "#333"; // Active dot color
    } else {
      dot.style.backgroundColor = "#bbb"; // Inactive dot color
    }
  });
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showSlide(i);
  });
});

showSlide(slideIndex);

// Hover effect for slider
slides.forEach(slide => {
  slide.addEventListener('mouseover', () => {
    slide.querySelector('.overlay').style.opacity = '1';
  });
  slide.addEventListener('mouseout', () => {
    slide.querySelector('.overlay').style.opacity = '0';
  });
});

// Function to change project image on content click
function changeImage(imageSrc) {
  document.getElementById('project-img').src = imageSrc;
}
