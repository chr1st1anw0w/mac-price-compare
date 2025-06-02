// main.js - Entry point for the Mac Price Compare application

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    loadInitialData();
});

// Set up event listeners for user interactions
function setupEventListeners() {
    const urlInput = document.getElementById('url-input');
    const uploadButton = document.getElementById('upload-button');
    const compareButton = document.getElementById('compare-button');

    urlInput.addEventListener('change', handleUrlInput);
    uploadButton.addEventListener('click', handleFileUpload);
    compareButton.addEventListener('click', initiateComparison);
}

// Load initial data from local storage
function loadInitialData() {
    // Load any previously saved product data
    const products = Database.getProducts();
    if (products.length > 0) {
        renderProductList(products);
    }
}

// Handle URL input change
function handleUrlInput(event) {
    const url = event.target.value;
    // Process the URL input
    Parser.parseUrl(url);
}

// Handle file upload
function handleFileUpload() {
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (file) {
        Parser.parseFile(file);
    }
}

// Initiate comparison of products
function initiateComparison() {
    const products = Database.getProducts();
    if (products.length > 0) {
        Charts.renderPriceComparisonChart(products);
    } else {
        alert('No products available for comparison.');
    }
}

// Render the list of products
function renderProductList(products) {
    // Code to display the list of products in the UI
}