// This file contains utility functions that are used throughout the application.
// These may include functions for formatting data, validating input, or other common tasks.

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(amount);
}

function validateInput(input) {
    return input && input.trim() !== '';
}

function debounce(func, delay) {
    let timeout;
    return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), delay);
    };
}

function generateUniqueId() {
    return 'id-' + Math.random().toString(36).substr(2, 16);
}

export { formatCurrency, validateInput, debounce, generateUniqueId };