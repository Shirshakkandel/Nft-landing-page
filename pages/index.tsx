import type { NextPage } from 'next';
import React, { Suspense } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Footer from '../components/Footer';

const HeaderComp = dynamic(() => import('../components/Header'));
const HeroComp = dynamic(() => import('../components/Hero'));
const MintComp = dynamic(() => import('../components/MintComp'));
const RoadMap = dynamic(() => import('../components/RoadMap'));
const CollectionComp = dynamic(() => import('../components/Collection'));
const FaqComp = dynamic(() => import('../components/Faq'));

const Home: NextPage = () => {
  return (
    <div className="scroll-smooth">
      <Head>
        <title>Sayuri</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderComp />
      <main className="mt-20 scroll-smooth">
        <HeroComp />
        <CollectionComp />
        <MintComp />
        <RoadMap />
        <FaqComp />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
