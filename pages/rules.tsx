import Link from 'next/link';
import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageMeta from '@/components/content/PageMeta';
import PageTitle from '@/components/content/PageTitle';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';

export default function RulesPage() {
	return (
		<>
			<PageMeta pageTitle='Competition Rules' />
			<PageLayout>
				<PageTitle />
				<Section>
					<SectionHeader id='general'>General</SectionHeader>
					<ol>
						<li>
							<Paragraph>
								Any form of cheating, as determined by the organizers, will
								result in automatic disqualification from the competition.
							</Paragraph>
						</li>
						<li>
							<Paragraph>
								Any intended attempts to harm the computing system used to
								conduct the evaluation process will result in automatic
								disqualification.
							</Paragraph>
						</li>
						<li>
							<Paragraph>
								The organizers reserve the right to update the rules and details
								of the competition at any time. Any changes will be communicated
								through our website.
							</Paragraph>
						</li>
					</ol>
				</Section>
				<Section>
					<SectionHeader id='prompt'>Prompt</SectionHeader>
					<Paragraph>
						Please consult the <Link href='/prompt'>Prompt</Link> page for
						information regarding the prompt rules and specifications.
					</Paragraph>
				</Section>
				<Section>
					<SectionHeader id='submission'>Submission</SectionHeader>
					<Paragraph>
						Please refer to the <Link href='/submission'>Submission</Link> page
						for information and guidelines on submitting your work.
					</Paragraph>
				</Section>
				<Section>
					<SectionHeader id='evaluation'>Evaluation</SectionHeader>
					<Paragraph>
						Please refer to the <Link href='/evaluation'>Evaluation</Link> page
						for information on the evaluation process and policies.
					</Paragraph>
				</Section>
				<Section>
					<SectionHeader id='pledge'>Pledge</SectionHeader>
					<Paragraph>
						We pledge to conduct the competition with fairness and impartiality.
						We will ensure that the evaluation process is transparent by
						recording it and making a reasonable amount of evidence available
						upon request, along with appropriate reasons.
					</Paragraph>
				</Section>
			</PageLayout>
		</>
	);
}
