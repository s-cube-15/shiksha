import { initializeApp } from "firebase/app";
import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAa_hJ6cq2ZZbtZUI5__6yOkhxe14qP9wE",
  authDomain: "shiksha-b8390.firebaseapp.com",
  projectId: "shiksha-b8390",
  storageBucket: "shiksha-b8390.appspot.com",
  messagingSenderId: "183113807478",
  appId: "1:183113807478:web:197666b2474c38bb865157"
};

const app = initializeApp(firebaseConfig);

export default app;