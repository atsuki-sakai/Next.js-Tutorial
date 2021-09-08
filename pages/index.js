import Head from "next/head";
import Link from "next/link";
import Layout, { setTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{setTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you`ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.jstutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
