console.log('Service Worker Loaded');

function askForNPerm() {
  Notification.requestPermission(function(result) {
    console.log("User choice", result);
    if (result !== "granted") {
      console.log("No notification permission granted!");
    } else {
      configurePushSub();// Write your custom function that pushes your message
    }
  });
}

setTimeout(() => {
  self.registration.showNotification("alert!")
  console.log("HH");
}, 3000);
