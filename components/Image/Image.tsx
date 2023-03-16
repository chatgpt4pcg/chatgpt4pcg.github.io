import React from 'react';
import styles from './Image.module.css';

type ImageProps = {
	src: string;
	alt: string;
};

export default function Image({ src, alt }: ImageProps) {
	return <img src={src} alt={alt} className={styles.image} />;
}
