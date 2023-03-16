import React, { PropsWithChildren } from 'react';

import styles from './SectionSubSubHeader.module.css';

export default function SectionSubSubHeader({ children }: PropsWithChildren) {
	return <h4 className={styles.subSubSectionHeader}>{children}</h4>;
}
