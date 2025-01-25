// Dark Mode Toggle
const toggleDarkModeBtn = document.getElementById("toggleDarkMode");
toggleDarkModeBtn.onclick = function() {
    document.body.classList.toggle("dark-mode");
};

// Back to Top Button
const backToTopBtn = document.getElementById("backToTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
};

backToTopBtn.onclick = function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

// Star Rating System
const ratings = document.querySelectorAll(".rating");

ratings.forEach(rating => {
    const stars = rating.querySelectorAll(".star");
    
    stars.forEach((star, index) => {
        star.addEventListener("click", function() {
            // Clear all stars
            stars.forEach(s => s.classList.remove("selected"));
            
            // Highlight selected star and all previous ones
            for (let i = 0; i <= index; i++) {
                stars[i].classList.add("selected");
            }
        });
    });
});
