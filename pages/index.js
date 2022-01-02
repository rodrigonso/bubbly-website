import { collection, getDocs, getFirestore } from 'firebase/firestore'
import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.scss'
import image from '../public/test3.png';

import Button from '../components/Button';
import ServicesList from '../components/ServicesList';


export default function Home() {
  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <Head>
          <title>Bubbly — On-Demand Mobile Car Care</title>
        </Head>
        <main className={styles.main}>
          <div className={styles.calltoaction}>
            <h3 className={styles.title}>No more sitting at the <br />car wash</h3>
            <p className={styles.description}>On-demand car cleaning to transform your vehicle at home or work. Book online and never waste time at the car wash again!</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
              <Button style={{ width: '10rem' }} title="Book" type="primary" />
              <Button style={{ width: '10rem' }} title="Learn more" type="secondary" />
            </div>
          </div>
          <div className={styles.graphic}>
            <Image src={image} height={600} width={600} />
          </div>
          <svg className={styles.bubbles} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#0099ff" fill-opacity="1" d="M0,128L40,128C80,128,160,128,240,144C320,160,400,192,480,181.3C560,171,640,117,720,106.7C800,96,880,128,960,144C1040,160,1120,160,1200,154.7C1280,149,1360,139,1400,133.3L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          </svg>
          <div className={styles.howitworks}>
            <div className={styles.textWrapper}>
              <h2 className={styles.title}>How it works</h2>
              <p className={styles.description}>Tired of waiting at the Car Wash? No problem, bubbly comes to you. <br />We'll arrive at your home or work with all the supplies needed to make your car look new again.</p>
            </div>
            <div style={{ display: 'flex' }}>
            </div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1180ff" fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,170.7C384,171,480,149,576,165.3C672,181,768,235,864,234.7C960,235,1056,181,1152,149.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
          <div className={styles.whybubbly}>
            <div className={styles.textWrapper}>
              <h2 className={styles.title}>Why bubbly?</h2>
              <p className={styles.description}>We believe that your valuable time should be spent on things that matter most — and driving/waiting at the car wash is not one of them.</p>
            </div>
            <div className={styles.graphicsWrapper}>
              <div className={styles.card}>
                Schedule anytime
              </div>
              <div className={styles.card}>
                We come to you
              </div>
              <div className={styles.card}>
                Enjoy your car
              </div>
            </div>
          </div>
          <div className={styles.ourservices}>
            <div className={styles.textWrapper}>
              <h2 className={styles.title}>Our services</h2>
              <p className={styles.description}>This is our simple menu. If you want to find out more about each service, click on learn more! We wash every car by hand, ensuring attention to detail and the highest quality service possible.</p>
            </div>
            <ServicesList />
          </div>
        </main>
      </div>
    </div>
  )
}

