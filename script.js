// Get the popup
const popup = document.getElementById("file-upload-popup");
const getStartedButton = document.getElementById("get-started");
const closeButton = document.getElementById("close-popup");

// Show the popup when the button is clicked
getStartedButton.onclick = function() {
    popup.style.display = "flex"; // Show the popup
}

// Close the popup when the close button is clicked
closeButton.onclick = function() {
    popup.style.display = "none"; // Hide the popup
}

// Close the popup when clicking outside of the popup content
window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = "none"; // Hide the popup
    }
}

// Handle drag and drop
const uploadArea = document.getElementById("upload-area");

uploadArea.addEventListener("dragover", (event) => {
    event.preventDefault(); // Prevent default behavior
});

uploadArea.addEventListener("drop", (event) => {
    event.preventDefault(); // Prevent default behavior
    const files = event.dataTransfer.files; // Get the files
    console.log(files); // For demonstration purposes, log the files
});

// Trigger file upload dialog on click
uploadArea.addEventListener("click", () => {
    document.getElementById("file-upload").click(); // Click the hidden file input
});
