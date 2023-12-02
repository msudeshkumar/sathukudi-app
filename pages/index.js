import Head from 'next/head';
import { useRef } from 'react'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import { useSearchParams } from 'next/navigation';
import { CountdownCircleTimer } from "react-countdown-circle-timer";

export default function Home() {
  const [countDown, setCountDown] = useState(null)
  const [finalCountDown, setFinalCountDown] = useState(null)
  const ref = useRef(null)
  const searchParams = useSearchParams()
  const countDownDate = new Date("Dec 2, 2023 22:52:00").getTime();

  const x = () => {
    setInterval(() => {
      var now = new Date().getTime();
      var distance = countDownDate - now;
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(x);
        window.location.replace('/birthday');
      } else if (distance <=30000) {
        setCountDown(null)
        if (!finalCountDown) {
          setFinalCountDown(seconds)
        }
      } else {
        setCountDown(days + "d " + hours + "h " + minutes + "m " + seconds + "s " + " to go...")
      }
    }, 1000);
  };

  const sos = () => {
    console.log('sos!');
    window.open('https://zomato.com/robertsonpet/robertsonpet-locality-restaurants?dishv2_id=14735&category=1')
    // window.open('https:///www.zomato.com/chennai/delivery-in-thuraipakkam?dishv2_id=14735')
  }

  const renderTime = ({ remainingTime }) => {
    const currentTime = useRef(remainingTime);
    const prevTime = useRef(null);
    const isNewTimeFirstTick = useRef(false);
    const [, setOneLastRerender] = useState(0);
  
    if (currentTime.current !== remainingTime) {
      isNewTimeFirstTick.current = true;
      prevTime.current = currentTime.current;
      currentTime.current = remainingTime;
    } else {
      isNewTimeFirstTick.current = false;
    }
  
    // force one last re-render when the time is over to tirgger the last animation
    if (remainingTime === 0) {
      setTimeout(() => {
        setOneLastRerender((val) => val + 1);
      }, 20);
    }
  
    const isTimeUp = isNewTimeFirstTick.current;
  
    return (
      <div className="time-wrapper" style={{ display: 'flex', flexDirection: 'column', color: 'red' }}>
        <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`} style={{ flex: 1 }}>
          {remainingTime}
        </div>
        {prevTime.current !== null && (
          <div
            key={prevTime.current}
            className={`time ${!isTimeUp ? "down" : ""}`}
            style={{ flex: 1 }}
          >
            {prevTime.current}
          </div>
        )}
      </div>
    );
  };

  useEffect(() => {
    x();
  });

  return (
    <div className={styles.container} style={{ backgroundColor: '#f8adc3', padding: 0 }}>
      <Head>
        <title>Sathukudi's Birthday!</title>
        <link rel="icon" href="/animation-animated.gif" />
      </Head>

      <main style={{ width: '100%', display: 'flex' }}>
          {finalCountDown ? (
            <>
            <div style={{ marginBottom: 200 }}>
              <CountdownCircleTimer
                isPlaying
                duration={30}
                colors={["#f58aaa", "#ef4377", "#eb1455"]}
                colorsTime={[20, 10, 0]}
                size={250}
              >
                {renderTime}
              </CountdownCircleTimer>
              <div style={{ marginTop: 50, width: '100%', textAlign: 'center', color: 'red', fontStyle: 'oblique', fontSize: 30 }}>{finalCountDown >= 20 ? `It's Happening...` : finalCountDown >= 10 ? `Almost there...` : `Here we go!!!`}</div>
            </div>
              {<img src={finalCountDown >= 10 ? "/skateboarding-tr.gif" : "/orange-jogging-tr.gif"} alt="Vercel custom" style={{ height: 300, width: '100%', position: 'absolute', bottom: 0 }} />}
            </>
          ) : (
            <>
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
              {Date.now() > new Date("Dec 3, 2023 00:00:00") ? <button style={{ position: 'absolute', width: 50, height: 50, bottom: 20, right: 20, borderRadius: 60, backgroundColor: 'red', color: 'white', fontWeight: 'bolder' }} onTouchStart={sos}>SOS</button> : null}
            </>
          )}
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
        .timer-wrapper {
          display: flex;
          justify-content: center;
        }
        
        .time-wrapper {
          position: relative;
          width: 80px;
          height: 60px;
          font-size: 90px;
          font-family: "Montserrat";
        }
        
        .time-wrapper .time {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: translateY(0);
          opacity: 1;
          transition: all 0.2s;
        }
        
        .time-wrapper .time.up {
          opacity: 0;
          transform: translateY(-100%);
        }
        
        .time-wrapper .time.down {
          opacity: 0;
          transform: translateY(100%);
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
        .timer-wrapper {
          display: flex;
          color: 'red',
          justify-content: center;
        }
        
        .time-wrapper {
          position: relative;
          width: 80px;
          height: 60px;
          font-size: 60px;
          font-family: "Montserrat";
        }
        
        .time-wrapper .time {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: translateY(0);
          opacity: 1;
          transition: all 0.2s;
          color: 'red',
        }
        
        .time-wrapper .time.up {
          opacity: 0;
          transform: translateY(-100%);
          color: 'red',
        }
        
        .time-wrapper .time.down {
          opacity: 0;
          transform: translateY(100%);
        }
      `}</style>
    </div>
  );
}