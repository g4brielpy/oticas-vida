import Head from "next/head";
import { Header } from "@/components/Header";
import { SectionBanner } from "@/components/SectionBanner";

export default function Home() {
  return (
    <>
      <Head>
        <title>Óticas Vida</title>
        <meta name="description" content="Óculos de grau e de sol" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header></Header>
      <main>
        <SectionBanner />
      </main>
    </>
  );
}
