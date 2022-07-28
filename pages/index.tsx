import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import { Header, Feed, Modal } from '../components'

const Home: NextPage = () => {
  return (
    <div className=" bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Insta App</title>
        <link rel="icon" href="https://img.icons8.com/color/48/000000/instagram-new--v1.png" />
      </Head>
      {/* Header */}
      <Header/>
      {/* Feed */}
      <Feed/>
      {/* Modal */}
      <Modal/>
    </div>
  )
}

export default Home
