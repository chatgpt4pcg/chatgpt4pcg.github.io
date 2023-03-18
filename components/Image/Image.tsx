import React from 'react';
import styles from './Image.module.css';

type ImageProps = {
	src: string;
	alt: string;
	width?: number;
	noBorderRadius?: boolean;
};

export default function Image({
	src,
	alt,
	width,
	noBorderRadius = false,
}: ImageProps) {
	return (
		<div className={styles.imageContainer}>
			<img
				src={src}
				alt={alt}
				className={styles.image}
				width={width}
				style={noBorderRadius ? { borderRadius: 0 } : undefined}
			/>
		</div>
	);
}
