import React from 'react';
import SectionSubHeader from '@/components/SectionSubHeader/SectionSubHeader';
import styles from './ImageConverter.module.css';

export default function ImageConverter() {
	return (
		<div className={styles.container}>
			<SectionSubHeader>Image Result</SectionSubHeader>
			<canvas className={styles.area}></canvas>
		</div>
	);
}
