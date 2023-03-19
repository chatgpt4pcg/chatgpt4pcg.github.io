import React, { useState } from 'react';

import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';
import { FileUploader } from 'react-drag-drop-files';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import Paragraph from '../Paragraph/Paragraph';
import SectionSubHeader from '../SectionSubHeader/SectionSubHeader';
import SectionSubSubHeader from '../SectionSubSubHeader/SectionSubSubHeader';
import Tesseract from 'tesseract.js';
import styles from './OCRRecognizer.module.css';

const acceptedFileTypes = ['JPEG', 'PNG'];

export default function OCRRecognizer() {
	const [recognizedText, setRecognizedText] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [confidence, setConfidence] = useState(0);

	async function fileChangeHandler(file: File) {
		setIsLoading(true);
		const {
			data: { text, confidence },
		} = await Tesseract.recognize(file, 'eng', { logger: () => {} });
		setIsLoading(false);
		if (text.trim().length === 0) {
			setRecognizedText('No text found in the image.');
			setConfidence(0);
			return;
		}
		setRecognizedText(text);
		setConfidence(confidence / 100);
	}

	return (
		<div className={styles.container}>
			<div className={styles.fileUploaderContainer}>
				<SectionSubHeader>Input Image</SectionSubHeader>
				<FileUploader
					handleChange={fileChangeHandler}
					name='file'
					types={acceptedFileTypes}
					children={
						<div className={styles.fileUploader}>
							<ArrowUpTrayIcon className={styles.icon} />
							<Paragraph>
								<span className={styles.underline}>Upload</span> or drag and
								drop an image here to start the recognition.
							</Paragraph>
						</div>
					}
				/>
			</div>
			<div className={styles.resultContainer}>
				<SectionSubHeader>Recognized Text</SectionSubHeader>
				{isLoading ? (
					<LoadingSpinner />
				) : (
					<Paragraph>
						{recognizedText.length === 0 ? (
							'Please upload an image to start the recognition process.'
						) : (
							<div className={styles.recognitionResult}>
								<div className={styles.textContainer}>
									<SectionSubSubHeader>Text</SectionSubSubHeader>
									<Paragraph>{recognizedText}</Paragraph>
								</div>
								<div className={styles.confidenceContainer}>
									<SectionSubSubHeader>Confidence</SectionSubSubHeader>
									<Paragraph>{confidence}</Paragraph>
								</div>
							</div>
						)}
					</Paragraph>
				)}
			</div>
		</div>
	);
}
