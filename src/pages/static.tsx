import React from 'react';
import Head from 'next/head';

export default function Static() {
  return (
    <>
      <Head>
        <title>Static Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        This is a static page.
      </main>
    </>
  );
}
