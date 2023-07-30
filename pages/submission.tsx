import Link from 'next/link';
import PageHeader from '@/components/ui/PageHeader/PageHeader';
import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageMeta from '@/components/content/PageMeta';
import PageSubHeader from '@/components/ui/PageSubHeader/PageSubHeader';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import ReactHighlightSyntax from 'react-highlight-syntax';
import { SAMPLE_PROMPT } from '@/constants/prompt';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';
import SubmissionDeadline from '@/components/content/SubmissionDeadline';

export default function SubmissionPage() {
	return (
		<>
			<PageMeta pageTitle='Submission' />
			<PageLayout>
				<PageSubHeader>The 1st ChatGPT4PCG Competition</PageSubHeader>
				<PageHeader>
					Character-like Level Generation for Science Birds
				</PageHeader>
				<Section>
					<SectionHeader id='guideline'>Submission Guideline</SectionHeader>
					<Paragraph>
						Before submitting, please ensure that your prompt follows our
						guidelines by checking the <Link href='/rules'>Rules</Link> and{' '}
						<Link href='/prompt'>Prompt</Link> pages. It is particularly
						important that the function used in your prompt is defined in the
						same way as our rules. If not, your results may be unexpected.
					</Paragraph>
					<Paragraph>
						The prompt file should only contain the prompt, and should be named
						after your team using this convention{' '}
						<code>&lt;TEAM_NAME&gt;.txt</code>. For example,{' '}
						<code>team1.txt</code>. The example of content in this file is as
						follows:
					</Paragraph>
					<ReactHighlightSyntax
						language={'PlainText'}
						theme={'Base16Darcula'}
						copy={true}
						copyBtnTheme={'Dark'}
					>
						{SAMPLE_PROMPT}
					</ReactHighlightSyntax>
					<Paragraph>
						If you have any questions, please contact us at this{' '}
						<a href='mailto:chatgpt4pcg@gmail.com'>email address</a>.
					</Paragraph>
				</Section>
				<SubmissionDeadline />
				<Section>
					<SectionHeader id='rules'>Submission Rules</SectionHeader>
					<ol>
						<li>
							If a team submits multiple entries during a stage, midterm or
							final, we will consider the most recent submission as that
							team&#39;s final submission.
						</li>
						<li>
							Submissions received after the deadline will not be considered for
							the evaluation process.
						</li>
						<li>
							By submitting, you accept all rules and agree that all submitted
							prompts will be made public.
						</li>
					</ol>
				</Section>
				<Section>
					<SectionHeader id='result-announcement'>
						Result Announcement
					</SectionHeader>
					<Paragraph>
						All participating teams will receive email notifications of their
						results using the email addresses provided in the submission email.
						The winner will also be announced on our website.
					</Paragraph>
				</Section>
			</PageLayout>
		</>
	);
}
