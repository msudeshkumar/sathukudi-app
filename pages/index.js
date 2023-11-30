import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useRef } from 'react'
import { Fireworks } from '@fireworks-js/react';
// import type { FireworksHandlers } from '@fireworks-js/react';
// import { Fireworks } from 'fireworks-js'
import styles from '../styles/Home.module.css';
import { useSearchParams } from 'next/navigation';

export default function Home() {
  const [countDown, setCountDown] = useState(null)
  // const countDownDate = new Date("Dec 3, 2023 00:00:00").getTime();
  const ref = useRef(null)
  const searchParams = useSearchParams()
  const countDownDate = new Date("Dec 3, 2023 00:00:00").getTime();

  const startFireworks = () => {
    console.log('startFireworks()');
    ref.current?.start()

    /* const container = document.querySelector('.fireworks-container')
    const fireworks = new Fireworks(container, {
      autoresize: true,
      boundaries: {
        width: container.clientWidth,
        height: container.clientHeight
      },
      opacity: 0.5,
      acceleration: 1.05,
      friction: 0.97,
      gravity: 1.5,
      particles: 50,
      traceLength: 3,
      traceSpeed: 10,
      explosion: 5,
      intensity: 30,
      flickering: 50,
      lineStyle: 'round',
      hue: {
        min: 0,
        max: 360
      },
      delay: {
        min: 30,
        max: 60
      },
      rocketsPoint: {
        min: 50,
        max: 50
      },
      lineWidth: {
        explosion: {
          min: 1,
          max: 3
        },
        trace: {
          min: 1,
          max: 2
        }
      },
      brightness: {
        min: 50,
        max: 80
      },
      decay: {
        min: 0.015,
        max: 0.03
      },
      mouse: {
        click: false,
        move: false,
        max: 1
      }
    })
    fireworks.start() */
  };
  const x = () => {
    setInterval(() => {
  
      // Get today's date and time
      var now = new Date().getTime();
  
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
  
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      // Display the result in the element with id="demo"
      /* document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s "; */
  
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        startFireworks();

        // document.getElementById("demo").innerHTML = "EXPIRED";
        // setCountDown
        // setCountDown(days + "d " + hours + "h " + minutes + "m " + seconds + "s " + " to go...")
      } else {
        setCountDown(days + "d " + hours + "h " + minutes + "m " + seconds + "s " + " to go...")
      }
    }, 1000);
  };

  useEffect(() => {
    console.log('useEffect');
    console.log('searchParams', searchParams.get('query'));
    x();
    // startFireworks();
  });

  // Update the count down every 1 second

  return (
    <div className={styles.container} style={{ backgroundColor: '#f8adc3', padding: 0 }}>
      <Head>
        <title>Sathukudi's Birthday!</title>
        <link rel="icon" href="/animation-animated.gif" />
      </Head>

      <main style={{ width: '100%', display: 'flex' }}>
      {/* <Fireworks
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
      /> */}
          <div style={{ flex: 1, fontStyle: 'oblique', fontSize: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: 'salmon' }}>{countDown}</span>
              <span style={{ marginBottom: 25 }}>
                <img src="/cake-three.gif" alt="Vercel custom" style={{ height: 120 }} />
              </span>
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <img src="/ranjita.gif" alt="Vercel custom" style={{ flex: 1, maxWidth: '100%' }} />
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
  );
}