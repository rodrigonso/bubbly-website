import Button from './Button';
import styles from '../styles/ServiceCard.module.scss'

export default function ServiceCard({ service }) {
	return (
		<div key={service.title} className={styles.card}>
			<div className={styles.left}>
				<h2 className={styles.title}>{service.title}</h2>
				<p className={styles.description}>{service.desc}</p>
				<br />
				<br />
				<p className={styles.description}>{service.duration} hours</p>
				<Button className={styles.learnmorebtn} type="link" title="Learn more ›" />
			</div>
			<div className={styles.right}>
				<p className={styles.preprice}>Sedans</p>
				<h2 className={styles.price}>${service.priceSedan}</h2>
				<p className={styles.subprice}>${service.priceNonSedan} for non-sedans.</p>
				<Button className={styles.bookbtn} size="small" type="secondary" title="Book" />
			</div>
		</div>
	)
}
