var deferredPrompt = null;
if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js'/*, { scope: '/' }*/)
        .then(result => console.log("Service worker registered"));
}

window.addEventListener('beforeinstallprompt', function(event) {
    event.preventDefault();
    deferredPrompt = event;
    return false;
});

var promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('This is executed after resolve is done.'), 3000);
});

promise.then(result => console.log(result));