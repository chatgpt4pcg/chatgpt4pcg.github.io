import Head from 'next/head';
import React from 'react';

type PageMetaProps = {
	pageTitle?: string;
};

export default function PageMeta({ pageTitle }: Readonly<PageMetaProps>) {
	let title =
		'The 2nd ChatGPT4PCG Competition: Character-like Level Generation for Science Birds';

	if (pageTitle) {
		title = `${title} - ${pageTitle}`;
	}
	return (
		<Head>
			<title>{title}</title>
			<meta
				name='description'
				content='The 2nd ChatGPT4PCG Competition challenges participants to use ChatGPT to generate diverse Science Birds levels resembling English capital letters, with stability and similarity to the letter being evaluated through testing, and offers a chance for prompt engineers to demonstrate their creativity and skills.'
			/>
			<meta
				name='google-site-verification'
				content='zP3knJHTSO5RclPqlwXpxPbPT3Paw17OMhL69EbHW0E'
			/>
			<meta name='viewport' content='width=device-width, initial-scale=1' />
		</Head>
	);
}
