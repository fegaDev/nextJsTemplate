import Layout from '../component/layout'
import styles from '../styles/contact.module.css'
export default function Contact(){
    return (
        <div className={styles.container}>
            <Layout title="contacto" description="Pagina de Contacto">
            <main className={styles.mainContact}>
                <div className={styles.mainContainer}>
                    <div className={styles.form}>
                        <label>Tu Nombre</label>
                        <input type="text" className={styles.input} placeholder="Nombre de Contacto" />
                    </div>
                    <div className={styles.form}>
                        <label>Tu Apellido</label>
                        <input type="text" className={styles.input} placeholder="Nombre de Contacto" />
                    </div>
                    <div className={styles.form}>
                        <label>Tu Correo</label>
                        <input type="email" className={styles.input} placeholder="Correo Electrónico" />
                    </div>
                    <div className={styles.form}>
                            <button>Contact Me!</button>
                    </div>
                </div>
            </main>
            </Layout>
        </div>
   )
}