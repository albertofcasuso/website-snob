import "../styles/style.scss";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getPerformance } from "firebase/performance";
import { useEffect } from "react";

function App({ Component, pageProps }) {

  const firebaseConfig = {
    apiKey: "AIzaSyCwd54H2r-19ayJy1EaSZNf6F2eDweH7fc",
    authDomain: "web-snob.firebaseapp.com",
    projectId: "web-snob",
    storageBucket: "web-snob.appspot.com",
    messagingSenderId: "116537960046",
    appId: "1:116537960046:web:d2d9a07f4da1965dbd287f",
    measurementId: "G-S8ELMEWDGC"
  };

  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      const perf = getPerformance(app);
    }
  }, [])
  return <Component {...pageProps} />;
}

export default App;
