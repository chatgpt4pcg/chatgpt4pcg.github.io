import React, { useEffect, useRef, useState } from 'react';

import SectionSubHeader from '../SectionSubHeader/SectionSubHeader';
import { extractString } from '@/utils/code-extraction';
import styles from './CodeExtractor.module.css';

export default function CodeExtractor() {
	const resultRef = useRef<HTMLTextAreaElement>(null);
	const [rawData, setRawData] = useState('');
	const [fileCounter, setFileCounter] = useState(0);
	const [extractedCode, setExtractedCode] = useState('');

	useEffect(() => {
		window.localStorage.getItem('codeFileCounter') &&
			setFileCounter(parseInt(window.localStorage.getItem('codeFileCounter')!));
	}, []);

	useEffect(() => {
		window.localStorage.setItem('codeFileCounter', fileCounter.toString());
	}, [fileCounter]);

	useEffect(() => {
		setExtractedCode(extractString(rawData) || '');
	}, [rawData]);

	function copyToClipboard() {
		resultRef.current!.select();
		resultRef.current!.setSelectionRange(0, 99999);

		navigator.clipboard.writeText(resultRef.current!.value);

		alert('Copied!');
	}

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
			<div className={styles.formField}>
				<SectionSubHeader>Result</SectionSubHeader>
				<label className={styles.fieldLabel} htmlFor='result-field'></label>
				<textarea
					readOnly
					ref={resultRef}
					id='result-field'
					value={extractedCode}
					rows={15}
				/>
			</div>
			{extractedCode && (
				<div className={styles.actions}>
					<button className={styles.standardBtn} onClick={copyToClipboard}>
						Copy to clipboard
					</button>
					<a
						className={styles.standardBtn}
						href={URL.createObjectURL(
							new Blob([extractedCode], { type: 'application/xml' })
						)}
						download={`result_${String(fileCounter).padStart(2, '0')}.xml`}
					>
						Download XML file
					</a>
				</div>
			)}
		</form>
	);
}
