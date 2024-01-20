import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageMeta from '@/components/content/PageMeta';
import PageTitle from '@/components/content/PageTitle';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';

export default function PromptPage() {
	return (
		<>
			<PageMeta pageTitle='Prompt Rules and Guidelines' />
			<PageLayout>
				<PageTitle />
				<Section>
					<SectionHeader id='rules'>Prompt Rules</SectionHeader>
					<Paragraph>TBA</Paragraph>
				</Section>
			</PageLayout>
		</>
	);
}
