import React, { useEffect, useState } from 'react';

import SectionSubHeader from '../SectionSubHeader/SectionSubHeader';
import styles from './WordCounter.module.css';
import wordsCount from 'words-count';

export default function WordCounter() {
	const [rawData, setRawData] = useState('');
	const [wordCount, setWordCount] = useState(0);

	useEffect(() => {
		setWordCount(wordsCount(rawData));
	}, [rawData]);

	return (
		<form className={styles.form}>
			<div className={styles.formField}>
				<label className={styles.fieldLabel} htmlFor='raw-input-field'>
					<SectionSubHeader>Input</SectionSubHeader>
				</label>
				<textarea
					id='raw-input-field'
					value={rawData}
					onChange={(event) => {
						setRawData(event.target.value);
					}}
					rows={8}
				/>
			</div>
			<div className={styles.resultContainer}>
				<span className={styles.result}>{wordCount}</span> words
			</div>
		</form>
	);
}
