// Global variables for Three.js
let scene, camera, renderer, cube;

// Initialize Three.js scene
function init3DViewer() {
    const canvas = document.getElementById('canvas3D');
    
    // Scene setup
    scene = new THREE.Scene();
    
    // Camera setup
    camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Renderer setup
    renderer = new THREE.WebGLRenderer({ canvas });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    
    // Basic Cube for testing (replace this with the actual 3D model after conversion)
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
    animate();
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Rotate cube for demonstration
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}

// Handle file upload
const dropArea = document.getElementById('drop-area');
const fileInput = document.getElementById('fileUpload');

// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false);    
    document.body.addEventListener(eventName, preventDefaults, false);  
});

// Highlight drop area when item is dragged over
['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false);
});

// Remove highlight when item is no longer hovering
['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false);
});

// Handle dropped files
dropArea.addEventListener('drop', handleDrop, false);

function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function highlight() {
    dropArea.classList.add('highlight');
}

function unhighlight() {
    dropArea.classList.remove('highlight');
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;

    // Process the files (you can implement your 2D to 3D conversion logic here)
    handleFiles(files);
}

// Handle selected files
function handleFiles(files) {
    // Example: just log the names of the files for now
    for (let i = 0; i < files.length; i++) {
        console.log('Uploaded file:', files[i].name);
    }
    // Enable the download button (after processing)
    document.getElementById('downloadBtn').disabled = false;
}

// Initialize the 3D viewer when the page loads
window.onload = init3DViewer;
