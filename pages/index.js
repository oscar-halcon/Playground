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
          Welcome to the comparison tool. If you want to know more about how it
          works you can click{" "}
          <Link href="/about">
            <a>here</a>
          </Link>
          .{<br/>} And if you want to jump straight to the offers click{" "}
          <Link href="/offers/">
            <a>here</a>
          </Link>
        </p>
      </div>
    </>
  );
}
