import React, { PropsWithChildren } from 'react';

import Footer from '../Footer/Footer';
import NavBar from '../NavBar/NavBar';
import styles from './PageLayout.module.css';

export default function PageLayout({ children }: Readonly<PropsWithChildren>) {
	
	return (
		<>
			<NavBar />
			<main className={styles.layout}>
				{children}
				<Footer />
			</main>
		</>
	);
}
