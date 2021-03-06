import React, { useEffect } from 'react';
import Head from 'next/head';
// import Nav from '../components/nav';

const Home = () => {
  useEffect(() => {
     if ('serviceWorker' in navigator) {
       navigator.serviceWorker
         .register('/clevertap_sw.js')
         .then((registration) => {
           console.log('service worker registration successful');
         })
         .catch((err) => {
           console.warn('service worker registration failed', err.message);
         });
     }
  }, []);

  return (
    <div>
     <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
        <script src='/ejjs.js' type='text/javascript' />
      </Head>

      {/* <Nav /> */}

      <div className='hero'>
        <h1 className='title'>Test push notification</h1>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: left;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card:hover {
          border-color: #067df7;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
        .card p {
          margin: 0;
          padding: 12px 0 0;
          font-size: 13px;
          color: #333;
        }
      `}</style>
    </div>
  );
};

// import * as serviceWorker from '../public/serviceWorker';
// if (window) {
//   serviceWorker.register();
// } else {
//   setTimeout(() => {
//     alert('ada21212121');
//     serviceWorker.register();
//   }, 3000);
// }

export default Home;
