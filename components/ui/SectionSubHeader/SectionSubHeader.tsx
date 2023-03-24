import React, { PropsWithChildren } from 'react';

import styles from './SectionSubHeader.module.css';

export default function SectionSubHeader({
	id,
	children,
}: PropsWithChildren<{ id?: string }>) {
	if (!id) {
		return (
			<h3 id={id} className={styles.subSectionHeader}>
				{children}
			</h3>
		);
	}
	
	return (
		<h3 id={id} className={styles.subSectionHeader}>
			<a href={`#${id}`}>{children}</a>
		</h3>
	);
}
