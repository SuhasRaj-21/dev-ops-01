// Add any global javascript interactions here
document.addEventListener('DOMContentLoaded', function() {
    // Hide loader on load completed
    const loader = document.getElementById('loader');
    if(loader) {
        loader.classList.add('d-none');
    }

    // Auto-dismiss alerts after 5 seconds
    const alerts = document.querySelectorAll('.alert:not(.alert-important)');
    alerts.forEach(function(alert) {
        setTimeout(function() {
            const bsAlert = new bootstrap.Alert(alert);
            bsAlert.close();
        }, 5000);
    });
});
