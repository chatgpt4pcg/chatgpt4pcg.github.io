import Head from 'next/head';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader/PageHeader';
import PageLayout from '@/components/PageLayout/PageLayout';
import PageSubHeader from '@/components/PageSubHeader/PageSubHeader';
import Paragraph from '@/components/Paragraph/Paragraph';
import ReactHighlightSyntax from 'react-highlight-syntax';
import Section from '@/components/Section/Section';
import SectionHeader from '@/components/SectionHeader/SectionHeader';

export default function Submission() {
	return (
		<>
			<Head>
				<title>
					The 1st ChatGPT4PCG Competition: Character-like Level Generation for
					Science Birds
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
					<SectionHeader>Submission Guideline</SectionHeader>
					<Paragraph>
						Before submitting, please ensure that your prompt follows our
						guidelines by checking the <Link href='/rules'>Rules</Link> and{' '}
						<Link href='/prompt'>Prompt</Link> pages. It is particularly
						important that the function used in your prompt is defined in the
						same way as our rules. If not, your results may be unexpected.
					</Paragraph>
					<Paragraph>
						To submit your prompt, send us two <code>.txt</code> files.
					</Paragraph>
					<Paragraph>
						The first file should only contain the prompt, and should be named
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
						{`Use \`ab_drop()\` function to generate a stable structure that looks like the &lt;OBJECT&gt;—the goal. Dropping position and order are crucial.

1. Definitions
Slots: The map's width is equally partitioned into W slots where W = 20, with slots 0 and 19 being the most left and right, respectively.
Layers: The map's height is equally partitioned into H layers where H = 16, with layers 0 and 15 being the bottom and top layers, respectively.
Base: The bottom of the map, i.e., layer 0.

2. Environment
There are three block types as follows:
b11, a square block whose width is 1 unit and height is 1 unit
b31, a horizontal block whose width is 3 units and height is 1 unit
b13, a vertical block whose width is 1 unit and height is 3 units

3. Tool
Use the \`ab_drop()\` function to vertically drop a block from layer H such that its center is at slot y and drop earlier blocks representing more bottom parts of the structure.`}
					</ReactHighlightSyntax>
					<Paragraph>
						The second file should contain the full names of all team members,
						their affiliations, and contact email addresses, also named after
						your team using this convention{' '}
						<code>&lt;TEAM_NAME&gt;_members.txt</code>. For example,
						<code>team1_members.txt</code>. The example of content in this file
						is as follows:
					</Paragraph>
					<ReactHighlightSyntax
						language={'PlainText'}
						theme={'Base16Darcula'}
						copy={true}
						copyBtnTheme={'Dark'}
					>
						{`John Doe, Imaginary Unicorn University, example@example.com
Jane Doe, Imaginary Unicorn University, example2@example.com`}
					</ReactHighlightSyntax>
					<Paragraph>
						Both files should be submitted together via email to{' '}
						<a href='mailto:chatgpt4pcg@gmail.com'>chatgpt4pcg@gmail.com</a>{' '}
						with the subject <code>2023 ChatGPT4PCG - &lt;TEAM_NAME&gt;</code>.
						Please ensure that your team name is consistent throughout both
						files. If you have any questions, please contact us at the provided
						email address.
					</Paragraph>
				</Section>
				<Section>
					<SectionHeader>Submission Deadline</SectionHeader>
					<Paragraph>Midterm: 19 May 2023 (23:59 JST)</Paragraph>
					<Paragraph>Final: 21 July 2023 (23:59 JST)</Paragraph>
					<Paragraph>
						If OpenAI releases an update to free-version web-based ChatGPT one
						week before the deadline (either for the midterm or final), we will
						extend the deadline by one week to give participants enough time to
						adjust their prompts. We will notify all participants who have
						submitted their work by email if this occurs. We will also make an
						announcement on our website.
					</Paragraph>
					<Paragraph>
						Midterm submission is optional, although we recommend it. Any team
						that submits during the mid-term submission will be notified of the
						preliminary results. However, all teams, whether they submit during
						the midterm or not, must submit during the final submission period.
						Only submissions during the final submission period will be
						considered for the final ranking.
					</Paragraph>
				</Section>
				<Section>
					<SectionHeader>Submission Rules</SectionHeader>
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
					<SectionHeader>Result Announcement</SectionHeader>
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
