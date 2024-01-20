import Divider from '../Divider/Divider';
import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
	return (
		<>
			<Divider />
			<footer className={styles.footer}>
				<p>
					Previous edition:{' '}
					<a href='https://chatgpt4pcg.github.io/2023'>2023</a>
				</p>
				<p className={styles.footerQuote}>
					"Standing on the shoulders of giants"
				</p>
			</footer>
		</>
	);
}
