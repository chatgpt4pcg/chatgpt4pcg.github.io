import LetterClassifier from '@/components/tools/LetterClassifier/LetterClassifier';
import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageMeta from '@/components/content/PageMeta';
import PageTitle from '@/components/content/PageTitle';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';

export default function ClassifierPage() {
	return (
		<>
			<PageMeta pageTitle='Tools - Online Letter Classifier' />
			<PageLayout>
				<PageTitle />
				<Section>
					<SectionHeader>Letter Classifier</SectionHeader>
					<LetterClassifier />
				</Section>
			</PageLayout>
		</>
	);
}
