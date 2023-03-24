import CodeExtractor from '@/components/tools/CodeExtractor/CodeExtractor';
import Head from 'next/head';
import PageHeader from '@/components/ui/PageHeader/PageHeader';
import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageSubHeader from '@/components/ui/PageSubHeader/PageSubHeader';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';
import Paragraph from '@/components/ui/Paragraph/Paragraph';

export default function CodeExtractorPage() {
	return (
		<>
			<Head>
				<title>
					The 1st ChatGPT4PCG Competition: Character-like Level Generation for
					Science Birds
				</title>
				<meta
					name='description'
					content='The ChatGPT4PCG Competition invites participants to use ChatGPT to generate stable levels for Science Birds resembling English characters. Participants must submit a prompt and instructions, and the generated levels will undergo testing for stability and similarity using an OCR model, offering a chance to showcase prompt engineering skills and push the boundaries of natural language processing and procedural content generation.'
				/>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
			</Head>
			<PageLayout>
				<PageSubHeader>The 1st ChatGPT4PCG Competition</PageSubHeader>
				<PageHeader>
					Character-like Level Generation for Science Birds
				</PageHeader>
				<Section>
					<SectionHeader>Code Extractor</SectionHeader>
					<Paragraph>
						The online code extractor extracts a code block from ChatGPT API
						responses, demonstrating the same algorithm used in the{' '}
						<a href='https://github.com/chatgpt4pcg/code-extraction-script'>
							code extraction script
						</a>
						.
					</Paragraph>
					<CodeExtractor />
				</Section>
			</PageLayout>
		</>
	);
}
