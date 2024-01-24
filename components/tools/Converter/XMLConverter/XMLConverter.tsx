import React, { useRef } from 'react';

import Paragraph from '@/components/ui/Paragraph/Paragraph';
import SectionSubHeader from '@/components/ui/SectionSubHeader/SectionSubHeader';
import styles from './XMLConverter.module.css';

type XMLConverterProps = {
	xmlResult: string;
	fileCounter: number;
};

export default function XMLConverter({
	fileCounter,
	xmlResult,
}: Readonly<XMLConverterProps>) {
	const resultRef = useRef<HTMLTextAreaElement>(null);

	function copyToClipboard() {
		resultRef.current!.select();
		resultRef.current!.setSelectionRange(0, 99999);

		navigator.clipboard.writeText(resultRef.current!.value);

		alert('Copied!');
	}

	return (
		<div className={styles.container}>
			<SectionSubHeader>XML Result</SectionSubHeader>
			<Paragraph>
				Please Note that the XML file needs to be placed in the{' '}
				<code>Assets/StreamingAssets/Levels</code> folder of the{' '}
				<a href='https://github.com/chatgpt4pcg/modified-science-birds'>
					Science Birds.
				</a>
			</Paragraph>
			<div className={styles.formField}>
				<label className={styles.fieldLabel} htmlFor='result-field'></label>
				<textarea
					readOnly
					ref={resultRef}
					id='result-field'
					value={xmlResult}
					rows={15}
				/>
			</div>
			{xmlResult && (
				<div className={styles.actions}>
					<button className={styles.standardBtn} onClick={copyToClipboard}>
						Copy to clipboard
					</button>
					<a
						className={styles.standardBtn}
						href={URL.createObjectURL(
							new Blob([xmlResult], { type: 'application/xml' })
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
