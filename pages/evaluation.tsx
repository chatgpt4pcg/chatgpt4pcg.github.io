import 'katex/dist/katex.min.css';

import { BlockMath, InlineMath } from 'react-katex';

import Link from 'next/link';
import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageMeta from '@/components/content/PageMeta';
import PageTitle from '@/components/content/PageTitle';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';
import SectionSubHeader from '@/components/ui/SectionSubHeader/SectionSubHeader';

export default function RulesPage() {
	return (
		<>
			<PageMeta pageTitle='Rules and Evaluation Guidelines' />
			<PageLayout>
				<PageTitle />
				<Section>
					<SectionHeader id='evaluation'>Evaluation</SectionHeader>
					<Paragraph>
						TBA
					</Paragraph>
					<SectionSubHeader id='ranking-policy'>
						Ranking Policy
					</SectionSubHeader>
					<Paragraph>
						TBA
					</Paragraph>
				</Section>
				<Section>
					<SectionHeader id='evaluation-tools'>Evaluation Tools</SectionHeader>
					TBA
				</Section>
				<Section>
					<SectionHeader id='evaluation-env'>
						Evaluation Environment
					</SectionHeader>
					TBA
				</Section>
				<Section>
					<SectionHeader id='evaluation-process'>
						Evaluation Process
					</SectionHeader>
					TBA
				</Section>
			</PageLayout>
		</>
	);
}
