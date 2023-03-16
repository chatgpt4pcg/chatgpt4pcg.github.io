import React, { PropsWithChildren } from 'react';

import styles from './SectionSubHeader.module.css';

export default function SectionSubHeader({ children }: PropsWithChildren) {
	return <h3 className={styles.subSectionHeader}>{children}</h3>;
}
