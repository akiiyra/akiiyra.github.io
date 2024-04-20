function checkPassword() {
    var password = document.getElementById('passwordInput').value;
    // Replace 'your_password' with the actual password
    if (password === 'yaye') {
        window.location.href = 'https://sofriggies.framer.ai'; // Redirect to the desired page
    } else {
        alert('try again baby, u can do it!');
    }
}