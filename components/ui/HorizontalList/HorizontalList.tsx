import React from 'react';
import styles from './HorizontalList.module.css';

type HorizontalListProps = {
	header: string;
	items: Array<string>;
};

export default function HorizontalList({ header, items }: Readonly<HorizontalListProps>) {
	return (
		<figure className={styles.container}>
			<figcaption className={styles.listHeader}>{header}: </figcaption>
			<ul className={styles.list}>
				{items.map((item) => (
					<li key={item} className={styles.listItem}>{item}</li>
				))}
			</ul>
		</figure>
	);
}
