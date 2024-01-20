import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageMeta from '@/components/content/PageMeta';
import PageTitle from '@/components/content/PageTitle';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';
import SubmissionDeadline from '@/components/content/SubmissionDeadline';

export default function SubmissionPage() {
	return (
		<>
			<PageMeta pageTitle='Submission' />
			<PageLayout>
				<PageTitle />
				<Section>
					<SectionHeader id='guideline'>Submission Guideline</SectionHeader>
					<Paragraph>TBA</Paragraph>
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
							prompts and programs will be made public.
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
