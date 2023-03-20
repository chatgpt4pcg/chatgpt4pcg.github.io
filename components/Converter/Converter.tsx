import { Block, convertTextToBlocks, convertTextToXML } from 'chatgpt4pcg';
import React, { FormEvent, useEffect, useState } from 'react';

import ImageConverter from './ImageConverter/ImageConverter';
import SectionSubHeader from '../SectionSubHeader/SectionSubHeader';
import XMLConverter from './XMLConverter/XMLConverter';
import styles from './Converter.module.css';

export default function Converter() {
	const [rawData, setRawData] = useState('');
	const [xmlOutput, setResult] = useState('');
	const [fileCounter, setFileCounter] = useState(0);
	const [blocks, setBlocks] = useState<Block[]>([]);

	useEffect(() => {
		window.localStorage.getItem('fileCounter') &&
			setFileCounter(parseInt(window.localStorage.getItem('fileCounter')!));
	}, []);

	useEffect(() => {
		window.localStorage.setItem('fileCounter', fileCounter.toString());
	}, [fileCounter]);

	useEffect(() => {
		if (rawData.length === 0) {
			setResult('');
			setBlocks([]);
		}
	}, [rawData]);

	function submitHandler(event: FormEvent) {
		event.preventDefault();
		try {
			const xmlString = convertTextToXML(rawData.toLowerCase());
			const [blocksResult] = convertTextToBlocks(rawData.toLowerCase());
			setResult(xmlString);
			setFileCounter(fileCounter + 1);
			setBlocks(blocksResult);
		} catch (e) {
			if (e instanceof Error) {
				alert(e.message);
			} else if (typeof e === 'string') {
				alert(e);
			}
		}
	}

	return (
		<form className={styles.form} onSubmit={submitHandler}>
			<div className={styles.formField}>
				<label className={styles.fieldLabel} htmlFor='raw-input-field'>
					<SectionSubHeader>String Input</SectionSubHeader>
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
				<XMLConverter xmlResult={xmlOutput} fileCounter={fileCounter} />
				<ImageConverter blocksResult={blocks} fileCounter={fileCounter} />
			</div>
		</form>
	);
}
