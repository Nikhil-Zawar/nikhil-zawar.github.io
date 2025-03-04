let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000); // Change slide every 3 seconds

document.addEventListener('DOMContentLoaded', function() {
    const dateButtons = document.querySelectorAll('.date-button');
    const events = document.querySelectorAll('.event');

    dateButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            dateButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            this.classList.add('active');

            // Get the selected date
            const selectedDate = this.getAttribute('data-date');

            // Show/hide events based on the selected date
            events.forEach(event => {
                if (event.getAttribute('data-date') === selectedDate) {
                    event.style.display = ''; // Show the event
                } else {
                    event.style.display = 'none'; // Hide the event
                }
            });
        });
    });
});

