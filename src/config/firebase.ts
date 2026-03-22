import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported as analyticsIsSupported } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHBZt2JvXE32rrZhHnBGPqe8HPjg5brzM",
  authDomain: "eduzy-ec691.firebaseapp.com",
  projectId: "eduzy-ec691",
  storageBucket: "eduzy-ec691.firebasestorage.app",
  messagingSenderId: "106528117894",
  appId: "1:106528117894:web:a5227b33e092416ed07",
  measurementId: "G-RZ0M3M4673"
};

const app = initializeApp(firebaseConfig);

// Only initialize analytics if supported, to avoid blocking app load
let analytics: ReturnType<typeof getAnalytics> | undefined = undefined;
analyticsIsSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
  }
});

export { analytics };
export const auth = getAuth(app);
export const db = getFirestore(app);