import React, { PropsWithChildren } from 'react';

import styles from './Paragraph.module.css';

export default function Paragraph({ children }: Readonly<PropsWithChildren>) {
	return <p className={styles.paragraph}>{children}</p>;
}
