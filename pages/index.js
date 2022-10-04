import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <h1>Homepage</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
          impedit suscipit architecto, odio inventore nostrum non neque dicta.
          Quam magni accusantium culpa distinctio tempore iure accusamus,
          dolorem nobis odit.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi
          impedit suscipit architecto, odio inventore nostrum non neque dicta.
          Quam magni accusantium culpa distinctio tempore iure accusamus,
          dolorem nobis odit.
        </p>
        <Link href="/offers/">
          <a>See Offer Listing</a>
        </Link>
      </div>
    </>
  );
}
