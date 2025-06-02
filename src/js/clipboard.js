// This file implements clipboard monitoring functionality. It detects changes in the clipboard and extracts URLs or product information for processing.

document.addEventListener('paste', function(event) {
    const clipboardData = event.clipboardData || window.clipboardData;
    const pastedData = clipboardData.getData('Text');

    if (isValidUrl(pastedData)) {
        processUrl(pastedData);
    } else {
        processText(pastedData);
    }
});

function isValidUrl(string) {
    const urlPattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z0-9](?:[a-z0-9-]*[a-z0-9])?)\\.)+[a-z]{2,}|' + // domain name
        'localhost|' + // localhost
        '\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}|' + // IP address
        '\\[?[a-f0-9]*:[a-f0-9:%.~]*\\]?)' + // IPv6
        '(\\:\\d+)?(\\/[-a-z0-9+&@#\\/%?=~_|!:,.;]*[a-z0-9+&@#\\/%=~_|])?$', 'i'); // fragment locator
    return !!urlPattern.test(string);
}

function processUrl(url) {
    // Logic to handle the URL (e.g., extract product information)
    console.log('Processing URL:', url);
}

function processText(text) {
    // Logic to handle plain text (e.g., extract product information)
    console.log('Processing text:', text);
}