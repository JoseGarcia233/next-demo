import Image from 'next/image'
import styles from '../page.module.css'
import Head from 'next/head'
import Link from 'next/link'
import { Navbar } from '../components/navbar'

export default function ContactPage()  {
  return (
    <div>
          <Head>
        <title>Contact page</title>
      </Head>

      <Navbar />

    <main className={styles.main}>
      <div className={styles.description}>
        <p>
           palomo esto es Contact &nbsp;
          <code className={styles.code}>src/app/contact.tsx</code>
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
          href="/pricing"
          className={styles.card}
        
        >
          <h2>
            Ir a la pagina principal <span>-&gt;</span>
          </h2>
          <p>dale para alla</p>
        </Link>


      </div>
    </main>
    </div>
  )
}
