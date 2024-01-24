import React, { PropsWithChildren } from 'react';

import styles from './PageHeader.module.css';

export default function PageHeader({ children }: Readonly<PropsWithChildren>) {
	return <h1 className={styles.header}>
    {children}
  </h1>;
}
