window.addEventListener('DOMContentLoaded', () => {
    // Navigation initialization
    const element = document.querySelectorAll('.sidenav')
    M.Sidenav.init(element)

    registerServiceWorker()
})

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('../serviceWorker.js')
            .then(() => console.log('ServiceWorker Registered!'))
            .catch(() => console.log('ServiceWorker not Registered!'))
    }
}