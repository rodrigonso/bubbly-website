import styles from '../styles/UpgradesList.module.scss';
import Image from 'next/image'
import upgrade1 from '../public/upgrade1.svg';
import upgrade2 from '../public/upgrade2.svg';
import upgrade3 from '../public/upgrade3.svg';
import upgrade4 from '../public/upgrade4.svg';

export default function UpgradesList() {
    const upgrades = [
        { title: 'Engine Clean', price: 60, desc: 'We detail your engine to look like new.', image: upgrade1 },
        { title: 'Pet Hair Removal', price: 24, desc: 'We remove all the stubborn pet hair left behind', image: upgrade2 },
        { title: 'Carpet Shampoo', price: 50, desc: 'Deep clean of your carpet ensuring maximum clean.', image: upgrade3 },
        { title: 'Hand Polished Wax', price: 69, desc: 'Carnauba wax to protect and ensure shine.', image: upgrade4 },
    ];


    return (
        <div className={styles.container}>
            {upgrades.map(item => {
                return (
                    <div className={styles.card} key={item.title}>
                        <div className={styles.textWrapper}>
                            <Image src={item.image} width={75} height={75} />
                            <h3>{item.title}</h3>
                            <p className={styles.description}>{item.desc}</p>
                            <p className={styles.price}>${item.price}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
