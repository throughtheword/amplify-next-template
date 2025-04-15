import {GetServerSideProps, InferGetServerSidePropsType} from 'next';
import Head from 'next/head';
import {GetServerSidePropsResult} from 'next/types';
import React from 'react';

interface Props {
}

export const getServerSideProps: GetServerSideProps<Props> = async (): Promise<GetServerSidePropsResult<Props>> => {
  return {
    props: {
    },
  };
};

export default function Home({}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
<>
        <Head>
          <title>Home</title>
        </Head>
      <main>
        This is a dynamic SSR page.
      </main>
</>
  );
}
