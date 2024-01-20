import CodeExtractor from '@/components/tools/CodeExtractor/CodeExtractor';
import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageMeta from '@/components/content/PageMeta';
import PageTitle from '@/components/content/PageTitle';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';

export default function CodeExtractorPage() {
	return (
		<>
			<PageMeta pageTitle='Tools - Online Code Extractor' />
			<PageLayout>
				<PageTitle />
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
					<Paragraph>
						This tool automatically extracts any code between the last pairs of
						three backticks (```). Paste any response from ChatGPT that includes
						three backticks to see the extracted code.
					</Paragraph>
					<CodeExtractor />
				</Section>
			</PageLayout>
		</>
	);
}
