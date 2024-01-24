import ExportedImage from 'next-image-export-optimizer'
import React from 'react';
import styles from './Image.module.css';

type ImageProps = {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	noBorderRadius?: boolean;
};

export default function Image({
	src,
	alt,
	width = 1,
	height = 1,
	noBorderRadius = false,
}: Readonly<ImageProps>) {
	if (width === 1 && height === 1) {
		return <div className={styles.imageContainer}>
			<ExportedImage
				src={src}
				alt={alt}
				className={styles.image}
				width={width}
				height={height}
				layout='responsive'
				style={noBorderRadius ? { borderRadius: 0 } : undefined}
			/>
		</div>
	}

	return (
		<div className={styles.imageContainer}>
			<ExportedImage
				src={src}
				alt={alt}
				className={styles.image}
				width={width}
				height={height}
				style={noBorderRadius ? { borderRadius: 0 } : undefined}
			/>
		</div>
	);
}
