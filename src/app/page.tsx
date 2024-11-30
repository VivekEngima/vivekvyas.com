import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Under Maintenance</title>
        <meta
          name="description"
          content="We are currently working on improvements. Please check back later."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="text-center">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            Under Maintenance
          </h1>
          <p className="text-white mt-4 text-lg sm:text-xl md:text-2xl">
            We&apos;re working hard to improve our site. Please check back
            later!
          </p>
        </div>
      </div>
    </>
  );
}
