import styles from '../styles/Footer.module.scss';


export default function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.content}>
                    <div className={styles.links}>
                        <a>FAQ</a>
                        <a>Contact Us</a>
                        <a>Book</a>
                    </div>
                    <p>© 2022 Bubbly Mobile Detailing, LLC</p>
                </div>
            </div>
        </footer>
    )
}
