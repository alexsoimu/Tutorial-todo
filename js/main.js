const firebaseConfig = {
  apiKey: "AIzaSyA3RgtDomL7_jSmeH9kA80r9zKdhlmpoTU",
  authDomain: "notes-todo-e5240.firebaseapp.com",
  projectId: "notes-todo-e5240",
  storageBucket: "notes-todo-e5240.appspot.com",
  messagingSenderId: "1014106150605",
  appId: "1:1014106150605:web:4028c8b57eba13433abb84",
};

// setam firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const logoutBtn = document.getElementById("logout-btn");

logoutBtn.onclick = function () {
  auth.signOut();
};

auth.onAuthStateChanged(function (firebaseUser) {
  if (firebaseUser != null) {
    logoutBtn.style.visibility = "visible";
  }
});
