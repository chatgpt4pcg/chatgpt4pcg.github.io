import React, { PropsWithChildren } from 'react';

import styles from './SectionHeader.module.css';

export default function SectionHeader({
	children,
	id,
}: PropsWithChildren<{ id?: string }>) {
	if (!id) {
		return (
			<h2 id={id} className={styles.sectionHeader}>
				{children}
			</h2>
		);
	}

	return (
		<h2 id={id} className={styles.sectionHeader}>
			<a href={`#${id}`}>{children}</a>
		</h2>
	);
}
