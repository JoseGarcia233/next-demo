import Image from 'next/image'
import styles from './page.module.css'
// import Head from 'next/head'
import { Navbar } from './components/navbar'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    
    <Navbar/>
    <main className={styles.main}>

      <div className={styles.description}>
        <p>
          Get started by editin  palomo&nbsp;
          <code className={styles.code}>src/app/home.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <Link
          href="/about"
          className={styles.card}
        
        >
          <h2>
            Vamos para about cñ <span>-&gt;</span>
          </h2>
          <p>Deja la palomada y entra</p>
        </Link>


      </div>
    </main>


    </>
  )
}
