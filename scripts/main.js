if ('serviceWorker' in navigator) {
  navigator.serviceWorker
           .register('/sw.js')
           .then(function() { console.log('Прогуляйся по Сухуму без интернета!'); });
}