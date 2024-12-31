export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

// Form submission handler
window.handleSubmit = function(event) {
  event.preventDefault();
  
  const form = event.target;
  const formData = new FormData(form);
  
  // Here you would typically send the form data to your server
  console.log('Form submitted:', Object.fromEntries(formData));
  
  // Show success message
  alert('Thank you! We will contact you soon.');
  form.reset();
  
  return false;
};

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  // Add any additional initialization code here
});