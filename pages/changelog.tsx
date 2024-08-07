import 'katex/dist/katex.min.css';

import Link from 'next/link';
import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageMeta from '@/components/content/PageMeta';
import PageTitle from '@/components/content/PageTitle';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';
import SectionSubHeader from '@/components/ui/SectionSubHeader/SectionSubHeader';

export default function ChangelogPage() {
	return (
		<>
			<PageMeta />
			<PageLayout>
				<PageTitle />
				<Section>
					<SectionHeader id='changelog'>Changelog</SectionHeader>
					<SectionSubHeader>August 8, 2024</SectionSubHeader>
					<ul>
						<li>
							We have released the{' '}
							<Link href='/result'>result of the competition</Link>.
						</li>
					</ul>
				</Section>
			</PageLayout>
		</>
	);
}
