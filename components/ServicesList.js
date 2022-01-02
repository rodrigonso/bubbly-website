import { collection, getDocs, getFirestore } from 'firebase/firestore'
import styles from '../styles/ServicesList.module.scss'
import ServiceCard from './ServiceCard'

export default function ServicesList({ services }) {
	const services = [
		{ title: 'Superior Detail', priceSedan: 99, priceNonSedan: 119, duration: 1.5, desc: 'Recommended as weekly routine cleaning to maintain your vehicle clean.' },
		{ title: 'Bubbly Pro', priceSedan: 159, priceNonSedan: 189, duration: 2, desc: 'Includes hand wax, carpet shampoo, leather cleaning & more.' },
		{ title: 'Bubbly Showroom', priceSedan: 259, priceNonSedan: 289, duration: 2.5, desc: "We will bring your vehicle back to it's glory." },
	]

	return (
		<div className={styles.cardsWrapper}>
			{services.map(service => {
				return (
					<ServiceCard key={service.title} service={service} />
				)
			})}
		</div>
	)
}

