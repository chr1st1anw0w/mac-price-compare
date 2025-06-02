// This file manages the local storage of product data.
// It provides functions for saving, retrieving, and deleting product information from the local database.

const database = {
    // Save product data to local storage
    saveProduct: function(product) {
        const products = this.getProducts();
        products.push(product);
        localStorage.setItem('macProducts', JSON.stringify(products));
    },

    // Retrieve all product data from local storage
    getProducts: function() {
        const products = localStorage.getItem('macProducts');
        return products ? JSON.parse(products) : [];
    },

    // Delete a product from local storage by its ID
    deleteProduct: function(productId) {
        const products = this.getProducts();
        const updatedProducts = products.filter(product => product.id !== productId);
        localStorage.setItem('macProducts', JSON.stringify(updatedProducts));
    },

    // Clear all products from local storage
    clearProducts: function() {
        localStorage.removeItem('macProducts');
    }
};