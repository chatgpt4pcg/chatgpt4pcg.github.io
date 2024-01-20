import 'katex/dist/katex.min.css';

import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageMeta from '@/components/content/PageMeta';
import PageTitle from '@/components/content/PageTitle';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';

export default function ChangelogPage() {
	return (
		<>
			<PageMeta />
			<PageLayout>
				<PageTitle />
				<Section>
					<SectionHeader id='changelog'>Changelog</SectionHeader>
					<Paragraph>N/A</Paragraph>
				</Section>
			</PageLayout>
		</>
	);
}
