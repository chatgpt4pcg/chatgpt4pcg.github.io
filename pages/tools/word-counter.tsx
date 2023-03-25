import PageHeader from '@/components/ui/PageHeader/PageHeader';
import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageMeta from '@/components/content/PageMeta';
import PageSubHeader from '@/components/ui/PageSubHeader/PageSubHeader';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';
import WordCounter from '@/components/tools/WordCounter/WordCounter';

export default function WordCounterPage() {
	return (
		<>
			<PageMeta pageTitle='Tools - Online Word Counter' />
			<PageLayout>
				<PageSubHeader>The 1st ChatGPT4PCG Competition</PageSubHeader>
				<PageHeader>
					Character-like Level Generation for Science Birds
				</PageHeader>
				<Section>
					<SectionHeader>Word Counter</SectionHeader>
					<Paragraph>
						The word counter web app is a quick and efficient tool that uses the{' '}
						<a href='https://www.npmjs.com/package/words-count'>
							<code>words-count</code>
						</a>{' '}
						package—the same package used for our evaluation process—to
						accurately count the number of words in your prompt.
					</Paragraph>
					<WordCounter />
				</Section>
			</PageLayout>
		</>
	);
}
