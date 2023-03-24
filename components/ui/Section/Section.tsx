import React, { PropsWithChildren } from 'react';

import styles from './Section.module.css';

export default function Section({ children }: PropsWithChildren) {
	return <section className={styles.section}>{children}</section>;
}
