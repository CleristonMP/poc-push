/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/8.2.4/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.2.4/firebase-messaging.js");

// https://github.com/react-boilerplate/react-boilerplate/issues/2952
const firebaseConfig = {
  apiKey: "AIzaSyDkwfiwXDAyMseuzHwcqIddI2-W8ILJXKo",
  authDomain: "push-bds.firebaseapp.com",
  projectId: "push-bds",
  storageBucket: "push-bds.appspot.com",
  messagingSenderId: "181033052862",
  appId: "1:181033052862:web:216a89c7619ee2d3e4ccef",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("sw bg message event: ", payload);
});

// O evento onMessage pertence ao contexto de Windows e não do service worker
//https://stackoverflow.com/questions/42964547/uncaught-firebaseerror-messaging-this-method-is-available-in-a-window-context
