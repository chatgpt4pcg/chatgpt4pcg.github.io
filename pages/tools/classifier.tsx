import LetterClassifier from '@/components/tools/LetterClassifier/LetterClassifier';
import PageHeader from '@/components/ui/PageHeader/PageHeader';
import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageMeta from '@/components/content/PageMeta';
import PageSubHeader from '@/components/ui/PageSubHeader/PageSubHeader';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';

export default function ClassifierPage() {
	return (
		<>
			<PageMeta pageTitle='Tools - Online Letter Classifier' />
			<PageLayout>
				<PageSubHeader>The 1st ChatGPT4PCG Competition</PageSubHeader>
				<PageHeader>
					Character-like Level Generation for Science Birds
				</PageHeader>
				<Section>
					<SectionHeader>Letter Classifier</SectionHeader>
					<LetterClassifier />
				</Section>
			</PageLayout>
		</>
	);
}
