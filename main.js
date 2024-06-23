let slideIndex = 0;

// Function to display the current slide
function showSlide(index) {
  let banners = document.getElementsByClassName("detail");
  // Hide all slides
  for (let i = 0; i < banners.length; i++) {
    banners[i].style.display = "none";  
  }
  // Display the slide at the given index
  banners[index].style.display = "block";  
}

// Function to go to the next slide
function nextSlide() {
  slideIndex++;
  if (slideIndex >= document.getElementsByClassName("detail").length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

// Function to go to the previous slide
function previousSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = document.getElementsByClassName("detail").length - 1;
  }
  showSlide(slideIndex);
}

// Event listeners for forward and previous buttons
document.querySelector('.forward-button').addEventListener('click', nextSlide);
document.querySelector('.previous-button').addEventListener('click', previousSlide);

// Initially display the first slide
showSlide(slideIndex);
