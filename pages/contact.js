import NavBar from "../components/NavBar";
import styles from '../styles/Contact.module.scss';
import image from '../public/contactimage.jpg';

import Image from 'next/image';

export default function contact() {
    return (
        <div>
            <NavBar />
            <div className={styles.container}>
                <Image src={image} />
                <div className={styles.formContainer}>
                    <h3>Contact Us</h3>
                    <p>If you have any questions, comments or concerns, feel free to contact us. Our team is here to help you!</p>
                    <form>
                        <input></input>
                    </form>
                </div>
            </div>
        </div>
    )
}
