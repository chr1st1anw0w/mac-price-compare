// This file handles the rendering of charts using a charting library.
// It includes functions for creating different types of visualizations based on the product data.

const ctx = document.getElementById('chart').getContext('2d');
let priceComparisonChart;

function renderPriceComparisonChart(labels, data) {
    if (priceComparisonChart) {
        priceComparisonChart.destroy();
    }

    priceComparisonChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Price Comparison',
                data: data,
                backgroundColor: 'rgba(0, 122, 255, 0.5)',
                borderColor: 'rgba(0, 122, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Price (TWD)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Products'
                    }
                }
            },
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return `Price: ${tooltipItem.raw} TWD`;
                        }
                    }
                }
            }
        }
    });
}

function renderSpecsDistributionChart(labels, data) {
    const ctx = document.getElementById('specsDistributionChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                label: 'Specifications Distribution',
                data: data,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(75, 192, 192, 0.5)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return `${tooltipItem.label}: ${tooltipItem.raw}`;
                        }
                    }
                }
            }
        }
    });
}

function renderPerformanceScoreChart(labels, data) {
    const ctx = document.getElementById('performanceScoreChart').getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Performance Score',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                r: {
                    beginAtZero: true
                }
            }
        }
    });
}

function renderTrendAnalysisChart(labels, data) {
    const ctx = document.getElementById('trendAnalysisChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Price Trend',
                data: data,
                fill: false,
                borderColor: 'rgba(255, 99, 132, 1)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Price (TWD)'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Time'
                    }
                }
            }
        }
    });
}