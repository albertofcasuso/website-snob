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
      </Head>
      <div className="container">
        <Cover />
        <Text />
      </div>
    </div>
  );
}
