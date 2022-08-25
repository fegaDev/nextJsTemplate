import Layout from "../component/layout";
import styles from "../styles/features.module.css";
export default function Features() {
  return (
    <div className={styles.container}>
      <Layout title="Features" description="Section Features">
        <main className={styles.mainFeatures}>
         <section className={styles.section}>
            <div className={styles.features}>
               <p>Feature 1</p>
            </div>
            <div className={styles.features}>
               <p>Feature 2</p>
            </div>
            <div className={styles.features}>
               <p>Feature 3</p>
            </div>
         </section>
        </main>
      </Layout>
    </div>
  );
}
