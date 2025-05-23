// Wait for the page to load before adding event listeners
document.addEventListener("DOMContentLoaded", function () {
  // Contact Form Submission
  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
      alert("Form submitted successfully!");
      form.reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
});

// Iterative factorial
function factorialIterative(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Recursive factorial
function factorialRecursive(n) {
  if (n <= 1) return 1;
  return n * factorialRecursive(n - 1);
}

// Handle calculation
function calculateFactorial() {
  const number = parseInt(document.getElementById('numberInput').value);
  const method = document.querySelector('input[name="method"]:checked').value;
  const output = document.getElementById('output');

  if (isNaN(number) || number < 0) {
    output.textContent = "Please enter a valid positive integer.";
    output.style.color = "red";
    return;
  }

  const result =
    method === "iterative"
      ? factorialIterative(number)
      : factorialRecursive(number);

  output.style.color = "#006400";
  output.textContent = `Factorial of ${number} using ${method} method is: ${result}`;
}
