import Head from 'next/head';
import React from 'react';

type PageMetaProps = {
	pageTitle?: string;
};

export default function PageMeta({ pageTitle }: PageMetaProps) {
	let title =
		'The 1st ChatGPT4PCG Competition: Character-like Level Generation for Science Birds';

	if (pageTitle) {
		title = `${title} - ${pageTitle}`;
	}
	return (
		<Head>
			<title>{title}</title>
			<meta
				name='description'
				content='The 1st ChatGPT4PCG Competition challenges participants to use ChatGPT to generate a Science Birds level resembling an English capital letter, with stability and similarity to the letter being evaluated through testing, and offers a chance for prompt engineers to demonstrate their creativity and skills.'
			/>
			<meta name='viewport' content='width=device-width, initial-scale=1' />
		</Head>
	);
}
