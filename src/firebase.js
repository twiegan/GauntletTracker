import { initializeApp } from "firebase/app";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTlvBM05NCb1UqzSOtyxRZmEOi2D_V_kk",
  authDomain: "gauntlettracker.firebaseapp.com",
  databaseURL: "https://gauntlettracker-default-rtdb.firebaseio.com",
  projectId: "gauntlettracker",
  storageBucket: "gauntlettracker.appspot.com",
  messagingSenderId: "558145500004",
  appId: "1:558145500004:web:b6ef830e9576e2cf95c071"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;