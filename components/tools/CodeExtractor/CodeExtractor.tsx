import React, { useEffect, useRef, useState } from 'react';

import SectionSubHeader from '../../ui/SectionSubHeader/SectionSubHeader';
import { extractCode } from 'chatgpt4pcg';
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
		setExtractedCode(extractCode(rawData) || '');
	}, [rawData]);

	function copyToClipboard(
		event: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) {
		event.preventDefault();
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
					placeholder={`To generate a structure like a character "I", you can use the following code:
\`\`\`
# drop the first square block
drop_block('b11', 1)

# drop the second square block
drop_block('b11', 1)
\`\`\``}
				/>
			</div>
			<div className={styles.formField}>
				<SectionSubHeader>Result</SectionSubHeader>
				<label className={styles.fieldLabel} htmlFor='result-field'></label>
				<textarea
					readOnly
					ref={resultRef}
					id='result-field'
					title='Result'
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
							new Blob([extractedCode], { type: 'text/plain' })
						)}
						download={`result_${String(fileCounter).padStart(2, '0')}.txt`}
					>
						Download TXT file
					</a>
				</div>
			)}
		</form>
	);
}
