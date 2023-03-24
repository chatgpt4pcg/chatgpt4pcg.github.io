import React, { PropsWithChildren } from 'react';

import styles from './SectionSubSubHeader.module.css';

export default function SectionSubSubHeader({
	id,
	children,
}: PropsWithChildren<{ id?: string }>) {
	if (!id) {
		return <h4 className={styles.subSubSectionHeader}>{children}</h4>;
	}

	return (
		<h4 id={id} className={styles.subSubSectionHeader}>
			<a href={`#${id}`}>{children}</a>
		</h4>
	);
}
