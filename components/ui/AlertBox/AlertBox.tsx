import React, { PropsWithChildren } from 'react';

import Divider from '../Divider/Divider';
import styles from './AlertBox.module.css';

type AlertBoxProps = {
	header?: string;
};

export default function AlertBox({ header, children }: PropsWithChildren<AlertBoxProps>) {
	return (
		<section className={styles.container}>
			{header && (
				<>
					<header className={styles.header}>
						<h1>{header}</h1>
					</header>
					<Divider style={{
            borderColor: '#E97777',
          }} />
				</>
			)}
      {children}
		</section>
	);
}
