// src/pages/index.tsx
import Head from "next/head";
import About from "./Home/about";
import Hero from "./Home/hero";
import Feature from "./Home/feature";
import Team from "./teams/page";
import Footer from "./Home/footer";

export default function MainPage() {
  return (
    <div>
      <Head>
        <title>Main Page </title>
        <meta name="description" content="Main Page with multiple sections" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <About />
                <Footer />      </main>
    </div>
  );
}
