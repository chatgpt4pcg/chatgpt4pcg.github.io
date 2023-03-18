import React, { useEffect, useRef } from 'react';

import SectionSubHeader from '@/components/SectionSubHeader/SectionSubHeader';
import styles from './XMLConverter.module.css';

type XMLConverterProps = {
	result: string;
	fileCounter: number;
	setFileCounter: (value: number) => void;
};

export default function XMLConverter({
	fileCounter,
	result,
	setFileCounter,
}: XMLConverterProps) {
	const resultRef = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		window.localStorage.getItem('fileCounter') &&
			setFileCounter(parseInt(window.localStorage.getItem('fileCounter')!));
	}, []);

	useEffect(() => {
		window.localStorage.setItem('fileCounter', fileCounter.toString());
	}, [fileCounter]);

	function copyToClipboard() {
		resultRef.current!.select();
		resultRef.current!.setSelectionRange(0, 99999);

		navigator.clipboard.writeText(resultRef.current!.value);

		alert('Copied!');
	}

	return (
		<div className={styles.container}>
			<div className={styles.formField}>
				<label className={styles.fieldLabel} htmlFor='result-field'>
					<SectionSubHeader>XML Result</SectionSubHeader>
				</label>
				<textarea
					readOnly
					ref={resultRef}
					id='result-field'
					value={result}
					rows={8}
				/>
			</div>
			{result && (
				<div className={styles.actions}>
					<button className={styles.standardBtn} onClick={copyToClipboard}>
						Copy to clipboard
					</button>
					<a
						className={styles.standardBtn}
						href={URL.createObjectURL(
							new Blob([result], { type: 'application/xml' })
						)}
						download={`result_${String(fileCounter).padStart(2, '0')}.xml`}
					>
						Download XML file
					</a>
				</div>
			)}
		</div>
	);
}
