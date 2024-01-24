import React, { PropsWithChildren } from 'react';

import styles from './PageSubHeader.module.css';

export default function PageSubHeader({ children }: Readonly<PropsWithChildren>) {
	return <h2 className={styles.pageSubHeader}>{children}</h2>;
}
