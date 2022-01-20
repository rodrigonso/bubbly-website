import styles from '../styles/Footer.module.scss';


export default function Footer() {
    return (
        <footer>
            <div className={styles.footer}>
                <div className={styles.content}>
                    <div className={styles.links}>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <a>SERVICES</a>
                            <br />
                            <p>Superior Detail</p>
                            <p>Bubbly Pro</p>
                            <p>Bubbly Showroom</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <a>LOCATIONS</a>
                            <br />
                            <p>Houston</p>
                            <p>Katy</p>
                            <p>Memorial</p>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <a>ABOUT</a>
                            <br />
                            <p>Team</p>
                            <p>FAQ</p>
                            <p>Contact</p>
                        </div>
                    </div>
                    <p>© 2022 Bubbly Mobile Detailing, LLC</p>
                </div>
            </div>
        </footer>
    )
}
