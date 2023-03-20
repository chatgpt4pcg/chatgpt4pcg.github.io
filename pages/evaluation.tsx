import 'katex/dist/katex.min.css';

import { BlockMath, InlineMath } from 'react-katex';

import Head from 'next/head';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader/PageHeader';
import PageLayout from '@/components/PageLayout/PageLayout';
import PageSubHeader from '@/components/PageSubHeader/PageSubHeader';
import Paragraph from '@/components/Paragraph/Paragraph';
import Section from '@/components/Section/Section';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import SectionSubHeader from '@/components/SectionSubHeader/SectionSubHeader';

export default function Rules() {
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
					<SectionHeader>Evaluation</SectionHeader>
					<Paragraph>
						The submitted prompts will undergo a rigorous evaluation process,
						which includes subjecting them to 10 trials for each of the 26
						English uppercase alphabets. The levels generated for each character
						will be evaluated based on their similarity and stability, and
						scored using the criteria outlined in the scoring policy given
						below. The entire evaluation process will be conducted using
						automated scripts and programs, which are accessible online via the{' '}
						<Link href='/resources'>Resources</Link> page.
					</Paragraph>
					<Paragraph>
						Please note that the evaluation process will be conducted twice, at
						midterm and final stages. The number of trials and characters in the
						evaluation set may be adjusted based on the number of teams.
					</Paragraph>
					<SectionSubHeader>Evaluation Set</SectionSubHeader>
					<Paragraph>All 26 alphabetical uppercase characters.</Paragraph>
					<Paragraph>
						A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
					</Paragraph>
					<SectionSubHeader>Scoring Policy</SectionSubHeader>
					<Paragraph>
						In each trial of the specific trial of a specific character:
					</Paragraph>
					<ol>
						<li>
							Stability: A level is considered stable if it can be constructed
							by our{' '}
							<a href='https://github.com/chatgpt4pcg/modified-science-birds'>
								modified version of Science Birds
							</a>{' '}
							without pieces moving due to the game&apos;s gravity within the
							first 10 seconds of initialization. Each level will receive{' '}
							<code>1</code>
							point if stable; otherwise, <code>0</code>, and for trial{' '}
							<InlineMath math='i' /> of target character{' '}
							<InlineMath math='j' />, its{' '}
							<InlineMath math='stability\_score' /> is given as
							<BlockMath math='stability\_score_{ij} = \begin{cases} 1\ \text{if stable}\\ 0\ \text{if unstable} \end{cases}' />
						</li>
						<li>
							Similarity: The similarity score reflects the confidence
							of the{' '}
							<a href='https://github.com/naptha/tesseract.js'>OCR model</a> in
							inferring the target character from the character in the submitted
							level. Each level will receive a continuous value between{' '}
							<code>0</code> and <code>1</code>, which represents the{' '}
							<InlineMath math='confidence\_score' /> for trial{' '}
							<InlineMath math='i' /> of target character{' '}
							<InlineMath math='j' /> that the model outputs. The{' '}
							<InlineMath math='similarity\_score' /> is given as
							<BlockMath math='similarity\_score_{ij} = confidence\_score_{ij}' />
						</li>
					</ol>
					<Paragraph>
						The <InlineMath math='trial\_score_{ij}' /> for trial{' '}
						<InlineMath math='i' /> of target character <InlineMath math='j' />{' '}
						is defined as follows:
					</Paragraph>
					<BlockMath math='trial\_score_{ij} = stability\_score_{ij} * similarity\_score_{ij}' />

					<Paragraph>
						The <InlineMath math='character\_score_{j}' /> of target character{' '}
						<InlineMath math='j' /> is defined as follows:
					</Paragraph>
					<BlockMath math='character\_score_{ij} = stability\_score_{ij} * similarity\_score_{ij}' />

					<Paragraph>
						The <InlineMath math='team\_score' /> is defined as follows:
					</Paragraph>
					<BlockMath math='team\_score = \frac{\sum_{j=1}^{n_{character}} character\_score_{j}}{n_{character}}' />

					<Paragraph>
						The <InlineMath math='team\_score' /> will be used for ranking.
					</Paragraph>
					<SectionSubHeader>Ranking Policy</SectionSubHeader>
					<Paragraph>
						The winner is the team with the highest{' '}
						<InlineMath math='team\_score' /> rounded to two decimal points. In
						case of multiple teams with the same highest score, the team with
						the shortest prompt will be selected as the winner. However, if
						multiple teams still have the same score and the shortest prompt,
						they will be declared as co-winners.
					</Paragraph>
				</Section>
				<Section>
					<SectionHeader>Evaluation Tools</SectionHeader>
					<ol>
						<li>
							<a href='https://platform.openai.com/docs/models/overview'>
								ChatGPT API
							</a>{' '}
							via <code>openai</code>{' '}
							<a href='https://www.npmjs.com/package/openai'>Node.js package</a>{' '}
							using the latest <code>gpt-3.5-turbo</code> model.
						</li>
						<li>
							<a href='https://github.com/chatgpt4pcg/modified-science-birds'>
								Modified version of Science Birds
							</a>{' '}
							with features to
							<ol>
								<li>Enable/disable gravity</li>
								<li>Enable/disable the background</li>
								<li>Automatically assess the stability</li>
								<li>
									Automatically export images using black-textured blocks on a
									white background for similarity testing
								</li>
							</ol>
						</li>
						<li>
							OCR model using{' '}
							<a href='https://tesseract.projectnaptha.com'>teserract.js</a>
						</li>
						<li>
							Automation scripts are available on our{' '}
							<Link href='/resources'>Resources</Link> page.
						</li>
					</ol>
				</Section>
				<Section>
					<SectionHeader>Evaluation Environment</SectionHeader>
					<ol>
						<li>
							Software:
							<ul>
								<li>OS: Windows 11 Pro</li>
								<li>Node.js: 18.15.0 LTS</li>
								<li>Unity: 2019.4.40f1</li>
								<li>
									<a href='https://github.com/chatgpt4pcg/modified-science-birds'>
										Modified version of Science Birds
									</a>
								</li>
								<li>
									<a href="/resources">Our automation scripts</a>
								</li>
							</ul>
						</li>
						<li>
							Hardware:
							<ul>
								<li>CPU: Intel(R) Xeon(R) W-2135 CPU @ 3.70GHz</li>
								<li>RAM: 16 GB</li>
							</ul>
						</li>
					</ol>
				</Section>
				<Section>
					<SectionHeader>Evaluation Process</SectionHeader>
					<ol>
						<li>
							Qualification scripts will be first run to check for rule
							violations, including:
							<ol>
								<li>Whether the prompt contains disallowed characters.</li>
								<li>
									Whether the prompt length exceeds the maximum number of words.
								</li>
								<li>
									Whether the prompt does not contain the{' '}
									<code>&lt;OBJECT&gt;</code>.
								</li>
							</ol>
						</li>
						<li>
							TThe response gathering script will load each qualified team's
							prompt and repeat the following two steps for each character --
							(1) replacing <code>&lt;OBJECT&gt;</code> with the target
							character and (2) contacting the ChatGPT API for a specific number
							of trials.
							<ol>
								<li>
									Each trial will always start from scratch and will contain no
									previous conversation.
								</li>
							</ol>
						</li>
						<li>
							The code extraction script will load each response and produce a
							new file containing only a series of <code>ab_drop()</code>{' '}
							commands.
						</li>
						<li>
							The text-to-xml converter script will load each code file and convert it into
							a Science Birds level.
						</li>
						<li>
							<a href='https://github.com/chatgpt4pcg/modified-science-birds'>
								A modified version of Science Birds
							</a>{' '}
							will individually load all levels and assess their stability. The
							results of stability will be recorded, and for each stable level
							an image of the structure with black-textured blocks on a white
							background will be produced by the program.
						</li>
						<li>
							The similarity checking script will load each image and pass it
							through an OCR model. It will then record the similarity result.
						</li>
						<li>
							Finally, the scoring and ranking script will load all similarity
							results and produce the final rank and score result for all teams.
						</li>
					</ol>
				</Section>
			</PageLayout>
		</>
	);
}
