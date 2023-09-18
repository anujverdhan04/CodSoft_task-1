const stars = document.querySelectorAll('.star');
const ratingText = document.getElementById('rating-text');

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        // Reset all stars
        stars.forEach((s, i) => {
            if (i <= index) {
                s.classList.add('rated');
            } else {
                s.classList.remove('rated');
            }
        });

        const rating = index + 1;
        ratingText.textContent = `Your rating: ${rating} star${rating !== 1 ? 's' : ''}`;
    });
});

const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    // You can add logic to handle login here
    alert(`Logged in as ${username}`);
});
