const firebase = require('firebase');
const { generateUniqueId } = require("../utils/uniqueIdGenerator");

const firebaseConfig = {
    apiKey: "AIzaSyDx2oN2zHZPSoglCpHsG8JNk32w_Zfk9vw",
    authDomain: "myfirstwebpage-16260.firebaseapp.com",
    projectId: "myfirstwebpage-16260",
    storageBucket: "myfirstwebpage-16260.appspot.com",
    messagingSenderId: "482042499549",
    appId: "1:482042499549:web:6782ffd5287ee512b4a634",
    measurementId: "G-4V79LS6658"
};

firebase.initializeApp(firebaseConfig);

db = firebase.firestore();

const save = (collectionName, operationName, input, result) => {
    let data = {
        "operation": operationName,
        "input": input,
        "result": result
    }
    let operationBaseRef = db.collection(collectionName).doc(generateUniqueId());
    operationBaseRef.set(data);
};


module.exports = {
    db,
    save
}



// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="https://www.gstatic.com/firebasejs/8.1.2/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="https://www.gstatic.com/firebasejs/8.1.2/firebase-analytics.js"></script>

// <script>
//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   var firebaseConfig = {
//     apiKey: "AIzaSyDx2oN2zHZPSoglCpHsG8JNk32w_Zfk9vw",
//     authDomain: "myfirstwebpage-16260.firebaseapp.com",
//     projectId: "myfirstwebpage-16260",
//     storageBucket: "myfirstwebpage-16260.appspot.com",
//     messagingSenderId: "482042499549",
//     appId: "1:482042499549:web:6782ffd5287ee512b4a634",
//     measurementId: "G-4V79LS6658"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
// </script>