const line1Text = "From Your Couch to Your Car,";
const line2Text = "We Clean It All with Care!";
const line1 = document.getElementById("line1");
const line2 = document.getElementById("line2");
const cursor1 = document.getElementById("cursor1");
const cursor2 = document.getElementById("cursor2");

let index1 = 0,
  index2 = 0;

function typeEffect() {
  if (index1 < line1Text.length) {
    // Typing the first line
    line1.textContent = line1Text.slice(0, index1 + 1);
    cursor1.style.display = "inline-block"; // Show cursor for line 1
    cursor2.style.display = "none"; // Hide cursor for line 2
    index1++;
    setTimeout(typeEffect, 100); // Continue typing first line
  } else if (index2 < line2Text.length) {
    // Typing the second line
    line2.textContent = line2Text.slice(0, index2 + 1);
    cursor1.style.display = "none"; // Hide cursor for line 1
    cursor2.style.display = "inline-block"; // Show cursor for line 2
    index2++;
    setTimeout(typeEffect, 100); // Continue typing second line
  } else {
    // Restart the animation after a pause
    setTimeout(() => {
      index1 = 0;
      index2 = 0;
      line1.textContent = "";
      line2.textContent = "";
      cursor1.style.display = "inline-block"; // Reset cursor for line 1
      cursor2.style.display = "none"; // Hide cursor for line 2
      typeEffect(); // Restart typing effect
    }, 2000); // Pause before restarting
  }
}

// Start the typing effect
typeEffect();
