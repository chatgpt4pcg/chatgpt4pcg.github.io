import Paragraph from '../../ui/Paragraph/Paragraph';
import React from 'react';
import styles from './LetterClassifier.module.css';

export default function LetterClassifier() {
	return (
		<div className={styles.container}>
			<Paragraph>
				<span className='red'>
					Please note that the Online Letter Classifier embed in this page is
					also available at{' '}
					<a href='https://huggingface.co/spaces/pittawat/letter_recognizer'>
						Hugging Face Spaces
					</a>{' '}
					and only shows the top five predicted classes with associated percentage.
					For the full version of the model, please use the{' '}
					<a href='https://github.com/chatgpt4pcg/similarity-checking-script'>
						similarity checking script
					</a>
					. This model was a fine-tuned version of{' '}
					<a href='https://huggingface.co/google/vit-base-patch16-224-in21k'>
						Vision Transformer (ViT)
					</a>{' '}
					trained on{' '}
					<a href='https://huggingface.co/datasets/pittawat/letter_recognition'>
						this dataset
					</a>
					. More information on the dataset is also available on the same page.
				</span>
			</Paragraph>
			<iframe
				src='https://pittawat-letter-recognizer.hf.space'
				className={styles.iframe}
			></iframe>
		</div>
	);
}
