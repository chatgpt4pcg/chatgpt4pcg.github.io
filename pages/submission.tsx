import Link from 'next/link';
import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageMeta from '@/components/content/PageMeta';
import PageTitle from '@/components/content/PageTitle';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import ReactHighlightSyntax from 'react-highlight-syntax';
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
					<Paragraph>
						Before submitting, please ensure that your program follows our
						guidelines by checking the <Link href='/rules'>Rules</Link> and{' '}
						<Link href='/prompt'>Prompt</Link> pages. It is particularly
						important that the <code>drop_block()</code> function used in your
						program is defined in the same way as our rules. If not, your
						results may be unexpected.
					</Paragraph>
					<Paragraph>
						The submitted file should be zipped and provide a{' '}
						<code>README.md</code> file containing instructions on how to run
						your program along with any required dependencies in the zip file.
						Please also describe your approach in the <code>README.md</code>{' '}
						file. Failure to provide your instructions may result in a delayed
						evaluation process and disqualification from the competition. You
						may find the following <code>README.md</code> template helpful.
					</Paragraph>
					<Paragraph>
						Your submission can be made using the following form:{' '}
						<a
							rel='noopener'
							target='_blank'
							href='https://forms.gle/TVknbAXHuyBA8nh38'
						>
							https://forms.gle/TVknbAXHuyBA8nh38
						</a>
						.
					</Paragraph>
					<ReactHighlightSyntax
						language={'Markdown'}
						theme={'A11yDark'}
						copy={true}
						copyBtnTheme={'Dark'}
					>
						{`# Team Name

## Team Members

List the names of the members of this team.

## Overview

Briefly describe your approach.

## Instructions

Describe what are the necessary environments or specific steps to run your program after unzipping the file.

## How to Run

Include detailed instructions on how to run your program. This may include commands, configurations, or specific steps.

## Dependencies

List all dependencies required to run your program. This may include libraries, frameworks, or specific software versions.`}
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
