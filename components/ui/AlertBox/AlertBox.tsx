import React, { PropsWithChildren } from 'react';

import Divider from '../Divider/Divider';
import styles from './AlertBox.module.css';

type AlertBoxProps = {
	header?: string;
	level?: 'info' | 'warning' | 'error';
};

export default function AlertBox({ header, children, level = 'info' }: PropsWithChildren<AlertBoxProps>) {
	const borderColor = {
		info:'#77E9C9' ,
		warning: 'rgb(233, 201, 119)',
		error: '#E97777',
	}[level];

	return (
		<section className={styles.container}>
			{header && (
				<>
					<header className={`${styles.header} ${styles[level]}`}>
						<h1>{header}</h1>
					</header>
					<Divider style={{
            borderColor,
          }} />
				</>
			)}
      {children}
		</section>
	);
}
