import React, { FormEvent, useEffect, useRef, useState } from 'react';

import SectionSubHeader from '../SectionSubHeader/SectionSubHeader';
import { convertToXML } from '@/converter/xml';
import styles from './XMLConverter.module.css';

export default function XMLConverter() {
	const [rawData, setRawData] = useState('');
	const [result, setResult] = useState('');
	const [resultGrid, setResultGrid] = useState<number[][]>([[]]);
	const [fileCounter, setFileCounter] = useState(0);
	const resultRef = useRef<HTMLTextAreaElement>(null);

	useEffect(() => {
		window.localStorage.getItem('fileCounter') &&
			setFileCounter(parseInt(window.localStorage.getItem('fileCounter')!));
	}, []);

	useEffect(() => {
		if (rawData.length === 0) {
			setResult('');
		}
	}, [rawData]);

	useEffect(() => {
		window.localStorage.setItem('fileCounter', fileCounter.toString());
	}, [fileCounter]);

	function submitHandler(event: FormEvent) {
		event.preventDefault();
		try {
			const [output, _, gridBeforeShift] = convertToXML(rawData.toLowerCase());
			setResult(output);
			setResultGrid(gridBeforeShift.reverse());
			setFileCounter(fileCounter + 1);
		} catch (e) {
			alert(e);
		}
	}

	function copyToClipboard() {
		resultRef.current!.select();
		resultRef.current!.setSelectionRange(0, 99999);

		navigator.clipboard.writeText(resultRef.current!.value);

		alert('Copied!');
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
			<div className={styles.formField}>
				<label className={styles.fieldLabel} htmlFor='result-field'>
					XML result
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
			{result && (
				<>
					<SectionSubHeader>Visualization</SectionSubHeader>
					<div className={styles.grid}>
						{resultGrid.map((row) => (
							<div className={styles.gridRow}>
								{row.map((cell) => (
									<div
										className={
											cell === 1 ? styles.activeGridCell : styles.gridCell
										}
									></div>
								))}
							</div>
						))}
					</div>
				</>
			)}
		</form>
	);
}
