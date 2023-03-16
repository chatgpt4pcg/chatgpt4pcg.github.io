import React, { PropsWithChildren } from 'react';

import styles from './SectionHeader.module.css';

export default function SectionHeader({ children }: PropsWithChildren) {
	return <h2 className={styles.sectionHeader}>{children}</h2>;
}
