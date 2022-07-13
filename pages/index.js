import Head from "next/head";
import Cover from "../components/Image";
import Text from "../components/Text";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Snob Solutions</title>
        <meta name="description" content="Snob Solutions" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js"></script>
        <script>
          const firebaseConfig = {
          apiKey: "AIzaSyCwd54H2r-19ayJy1EaSZNf6F2eDweH7fc",
          authDomain: "web-snob.firebaseapp.com",
          projectId: "web-snob",
          storageBucket: "web-snob.appspot.com",
          messagingSenderId: "116537960046",
          appId: "1:116537960046:web:d2d9a07f4da1965dbd287f",
          measurementId: "G-S8ELMEWDGC"
          };
          const app = initializeApp(firebaseConfig);
          const analytics = getAnalytics(app);
        </script>
      </Head>
      <div className="container">
        <Cover />
        <Text />
      </div>
    </div>
  );
}
