import Head from 'next/head';
import styles from '../../styles/Home.module.css';

export default function SingleStatus() {
    return (
    <div className={styles.container} style={{ backgroundColor: '#f8adc3', padding: 0 }}>
      <Head>
        <title>Sathukudi!</title>
        <link rel="icon" href="/smiling.gif" />
      </Head>

      <main style={{ width: '100%', height: '100%', display: 'flex', flex: 1, flexDirection: 'column', padding: 0 }}>
        <div style={{ flex: 1 }}>
          <img src="/announcement-tr.gif" alt="Vercel custom" style={{ flex: 1, maxWidth: '100%' }} />
        </div>
        <div style={{ flex: 1, fontSize: 30 }}>
            Finally Single!
        </div>
        <div style={{ flex: 1 }}>
          <img src="/dancing.gif" alt="Vercel custom" style={{ flex: 1, maxWidth: '100%' }} />
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