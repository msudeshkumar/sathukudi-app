import Head from 'next/head';
import styles from '../../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { useRef } from 'react'
import { Fireworks } from '@fireworks-js/react';
import { redirect, useSearchParams } from 'next/navigation';

export default function Birthday() {
    const ref = useRef(null)

    useEffect(() => {
      setTimeout(() => {
        ref.current?.start()
      }, 1000)
      window.location.reload();
    });

    return (
    <div className={styles.container} style={{ backgroundColor: '#f8adc3', padding: 0 }}>
      <Head>
        <title>Sathukudi!</title>
        <link rel="icon" href="/smiling.gif" />
      </Head>

      <main style={{ width: '100%', maxWidth: '100%', height: '100%', display: 'flex', flex: 1, flexDirection: 'column', padding: 0 }}>
        <Fireworks
          ref={ref}
          options={{ opacity: 0.5 }}
          style={{
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            position: 'fixed',
            // background: '#000'
        }}
        />
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: 25, fontWeight: 800, color: 'salmon', fontStyle: 'oblique', fontWeight: 700 }}>
            <span style={{ color: 'salmon' }}>Happy Birthday Sathukudi!!</span>
              <span style={{ marginBottom: 25, marginLeft: 10, zIndex: 10000001 }} onClick={() => {
                console.log('onMouseUp');
                window.location.replace('/sathukudi');
              }}>
                <img src="/animation-animated.gif" alt="Vercel custom" style={{ height: 50 }} />
              </span>
        </div>
        <div style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
          <img src="/cake-one.gif" alt="Vercel custom" style={{ flex: 1, width: '100%' }} />
        </div>
        <div style={{ flex: 1, display: 'none' }}>
          <img src="/pink-arrow.png" alt="Vercel custom" style={{ flex: 1, width: '100%' }} />
        </div>
      </main>
      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
    )
}