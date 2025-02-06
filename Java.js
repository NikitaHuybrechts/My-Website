// Event listener to change the background color when clicked
document.querySelector('.element').addEventListener('click', function() {
    // Function to generate a random color
    const randomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    // Change the background color of the element
    this.style.background = randomColor();
});

