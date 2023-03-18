import React, { FormEvent, useEffect, useState } from 'react';

import ImageConverter from './ImageConverter/ImageConverter';
import XMLConverter from './XMLConverter/XMLConverter';
import { convertToXML } from '@/converter/xml';
import styles from './Converter.module.css';

export default function Converter() {
	const [rawData, setRawData] = useState('');
	const [result, setResult] = useState('');
	const [fileCounter, setFileCounter] = useState(0);

	useEffect(() => {
		if (rawData.length === 0) {
			setResult('');
		}
	}, [rawData]);

	function submitHandler(event: FormEvent) {
		event.preventDefault();
		try {
			const [output] = convertToXML(rawData.toLowerCase());
			setResult(output);
			setFileCounter(fileCounter + 1);
		} catch (e) {
			alert(e);
		}
	}

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<div className={styles.formField}>
				<label className={styles.fieldLabel} htmlFor='raw-input-field'>
					Input as a series of <code>ab_drop()</code>
				</label>
				<textarea
					id='raw-input-field'
					value={rawData}
					onChange={(event) => {
						setRawData(event.target.value);
					}}
					placeholder={`ab_drop('b31', 1)
ab_drop('b11', 0)
ab_drop('b13', 1)`}
					rows={8}
				/>
			</div>
			<button type='submit' className={styles.standardBtn}>
				Convert
			</button>
			<div className={styles.resultContainer}>
				<XMLConverter
					result={result}
					fileCounter={fileCounter}
					setFileCounter={setFileCounter}
				/>
				<ImageConverter />
			</div>
		</form>
	);
}
