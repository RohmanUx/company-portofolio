// src/pages/index.tsx
import Head from "next/head";
import About from "./Home/[id]/about";
import Hero from "./Home/navbar-hero";
import Feature from "./Home/feature";
import Team from "./Home/team";

export default function MainPage() {
  return (
    <div>
      <Head>
        <title>Main Page</title>
        <meta name="description" content="Main Page with multiple sections" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Hero />
        <About />
        <Feature />
        <Team />
      </main>
    </div>
  );
}
