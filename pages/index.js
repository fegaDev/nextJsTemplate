import Layout from '../component/layout'
import styles from '../styles/index.module.css'
export default function Home() {
  return (
    <div className={styles.container}>
      <Layout title="Home"
       description="Create NextJs App Project">
        <main className={styles.main}>
          <h3>Cover your page</h3>
          <p>
          Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.
          </p>
          <button>Learn more</button>
        </main>
      </Layout>
    </div>
  )
}
