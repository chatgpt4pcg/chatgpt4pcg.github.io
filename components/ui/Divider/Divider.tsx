import React from 'react';
import styles from './Divider.module.css';

type DividerProps = {
	style?: React.CSSProperties;
};

export default function Divider({ style }: DividerProps) {
	return <hr className={styles.divider} style={style} />;
}
