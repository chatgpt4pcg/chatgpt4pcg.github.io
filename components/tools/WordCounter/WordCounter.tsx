import React, { useEffect, useState } from 'react';

import SectionSubHeader from '../../ui/SectionSubHeader/SectionSubHeader';
import { countWords } from 'chatgpt4pcg';
import styles from './WordCounter.module.css';

export default function WordCounter() {
	const [rawData, setRawData] = useState('');
	const [wordCount, setWordCount] = useState(0);

	useEffect(() => {
		setWordCount(countWords(rawData));
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
