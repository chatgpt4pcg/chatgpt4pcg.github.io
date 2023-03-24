import Head from 'next/head';
import Link from 'next/link';
import PageHeader from '@/components/ui/PageHeader/PageHeader';
import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageSubHeader from '@/components/ui/PageSubHeader/PageSubHeader';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';

export default function RulesPage() {
	return (
		<>
			<Head>
				<title>
					The 1st ChatGPT4PCG Competition: Character-like Level Generation for
					Science Birds - Rules and Evaluation Guidelines
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
					<SectionHeader id="general">General</SectionHeader>
					<ol>
						<li>
							<Paragraph>
							Any form of cheating, as determined by the organizers, will result in automatic disqualification from the competition.
							</Paragraph>
						</li>
						<li>
							<Paragraph>
							Any intended attempts to harm the computing system used to conduct the evaluation process will result in automatic disqualification.
							</Paragraph>
						</li>
						<li>
							<Paragraph>
							The organizers reserve the right to update the rules and details of the competition at any time. Any changes will be communicated through our website.
							</Paragraph>
						</li>
					</ol>
				</Section>
				<Section>
					<SectionHeader id="prompt">Prompt</SectionHeader>
					<Paragraph>
						Please consult the <Link href='/prompt'>Prompt</Link> page for
						information regarding the prompt rules and specifications.
					</Paragraph>
				</Section>
				<Section>
					<SectionHeader id="submission">Submission</SectionHeader>
					<Paragraph>
						Please refer to the <Link href='/submission'>Submission</Link> page
						for information and guidelines on submitting your work.
					</Paragraph>
				</Section>
				<Section>
					<SectionHeader id="evaluation">Evaluation</SectionHeader>
					<Paragraph>
						Please refer to the <Link href='/evaluation'>Evaluation</Link> page
						for information on the evaluation process and policies.
					</Paragraph>
				</Section>
				<Section>
					<SectionHeader id="pledge">Pledge</SectionHeader>
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
