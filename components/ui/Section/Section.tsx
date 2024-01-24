import React, { PropsWithChildren } from 'react';

import styles from './Section.module.css';

export default function Section({ children }: Readonly<PropsWithChildren>) {
	return <section className={styles.section}>{children}</section>;
}
