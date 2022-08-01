import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Link-Previewer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <h1 className="text-black text-2xl">
            Link-Previewer
          </h1>
</div>
      </main>
    </div>
  );
}
