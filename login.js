document.getElementById('loginForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Clear previous error messages
  document.getElementById('emailError').style.display = 'none';
  document.getElementById('passwordError').style.display = 'none';

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  let valid = true;

  // Validate email
  if (!validateEmail(email)) {
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
      document.getElementById('emailError').style.display = 'block';
      valid = false;
  }

  // Validate password
  if (password.length < 6) {
      document.getElementById('passwordError').textContent = 'Password must be at least 6 characters long.';
      document.getElementById('passwordError').style.display = 'block';
      valid = false;
  }

  // If valid, you can proceed with form submission (e.g., send a request to your server)
  if (valid) {
      alert('Login successful!'); // Placeholder for actual login functionality
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regular expression for email validation
  return re.test(String(email).toLowerCase());
}
