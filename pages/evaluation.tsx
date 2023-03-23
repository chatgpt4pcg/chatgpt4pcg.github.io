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
						In trial <InlineMath math='i' /> of target character{' '}
						<InlineMath math='j' /> for prompt
						<InlineMath math='k' />:
					</Paragraph>
					<ol>
						<li>
							Stability: The stability of a level is evaluated using our{' '}
							<a href='https://github.com/chatgpt4pcg/modified-science-birds'>
								modified version of Science Birds
							</a>
							. Here, <InlineMath math='total\_blocks_{ijk}' /> is defined as
							the total number of blocks at the time of initialization in
							Science Birds. Then the program will calculate the value of{' '}
							<InlineMath math='moving\_blocks_{ijk}' />
							which is defined as the number of moving blocks during the first
							10 seconds after initialization. Each level will receive an{' '}
							<InlineMath math='st_{ijk}' /> score according to the following
							equation. The score has a continuous value in{' '}
							<InlineMath math='[0, 1]' />.
						</li>
						<BlockMath math='st_{ijk} = \frac{total\_blocks_{ijk} - moving\_blocks_{ijk}}{total\_blocks_{ijk}}' />
						<li>
							Similarity: The similarity score reflects the softmax probability,{' '}
							<InlineMath math='\sigma (z_{ijk})' />, obtained from a classifier
							called{' '}
							<a href='https://huggingface.co/pittawat/vit-base-letter'>
								vit-base-letter
							</a>{' '}
							to infer target character <InlineMath math='j' /> in trial{' '}
							<InlineMath math='i' /> from the image of the generated level
							after the first 10 seconds of initialization. Each level will
							receive a continuous value between <InlineMath math='[0, 1]' />.
							This score, <InlineMath math='si_{ijk}' />, is given as
						</li>
						<BlockMath math='si_{ijk} = \sigma (z_{ijk})' />
					</ol>
					<Paragraph>
						Given that <InlineMath math='P' />, <InlineMath math='T' />, and{' '}
						<InlineMath math='C' /> represent the number of prompts in the
						competition, the number of trials per target character, and the
						number of characters, respectively, to give a higher weight to a
						more difficult target character, <InlineMath math='weight_{j}' />{' '}
						for target character <InlineMath math='j' /> is defined as follows:
					</Paragraph>
					<BlockMath math='weight_{j} = w\_st_{j} \times w\_si_{j}\text{,}' />
					<Paragraph>where</Paragraph>
					<BlockMath math='w\_st_{j} = max(1 - \frac{\sum_{k=1}^{P} \sum_{i=1}^{T} st_{ijk}}{PT}, \frac{1}{C})' />
					<BlockMath math='w\_si_{j} = max(1 - \frac{\sum_{k=1}^{P} \sum_{i=1}^{T} si_{ijk}}{PT}, \frac{1}{C})' />
					<Paragraph>
						Next, the weighted <InlineMath math='trial_{ijk}' /> score is
						defined as follows:
					</Paragraph>
					<BlockMath math='trial_{ijk} = weight_{j}\ st_{ijk}\ si_{ijk}' />
					<Paragraph>
						A score for target character <InlineMath math='j' /> of prompt{' '}
						<InlineMath math='k' />, <InlineMath math='char_{jk}' />, is defined
						as follows:
					</Paragraph>
					<BlockMath math='char_{jk} = \frac{\sum_{i=1}^{T} trial_{ijk}}{T}' />
					<Paragraph>
						The <InlineMath math='prompt_{k}' /> score is defined as follows:
					</Paragraph>
					<BlockMath math='prompt_{k} = \frac{\sum_{j=1}^{C} char_{jk}}{C}' />
					<Paragraph>
						The <InlineMath math='competition' /> score is defined as follows:
					</Paragraph>
					<BlockMath math='competition = \sum_{k=1}^{P} prompt_{k}' />
					<Paragraph>
						Next, the normalized <InlineMath math='prompt_{k}' /> score,{' '}
						<InlineMath math='norm\_prompt_{k}' />, is defined as follows:
					</Paragraph>
					<BlockMath math='norm\_prompt_{k} = 100\ \frac{prompt_{k}}{competition}' />
					<Paragraph>
						Finally, <InlineMath math='norm\_prompt_{k}' /> will be used for
						ranking.
					</Paragraph>
					<SectionSubHeader>Ranking Policy</SectionSubHeader>
					<Paragraph>
						The winner is the prompt (team) with the highest{' '}
						<InlineMath math='norm\_prompt_{k}' /> rounded to two decimal
						places. In case of multiple teams with the same highest score, the
						team with the shortest prompt will be selected as the winner.
						However, if multiple teams still have the same score and the
						shortest prompt, they will be declared as co-winners.
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
							<a href='https://huggingface.co/pittawat/vit-base-letter'>
								vit-base-letter
							</a>
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
										Science Birds Evaluator
									</a>
								</li>
								<li>
									<a href='/resources'>Our automation scripts</a>
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
							The <em>qualification script</em> will be first run to check for
							rule violations, including:
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
							The <em>response gathering script</em> will load each qualified
							team&apos;s prompt and repeat the following two steps for each
							character -- (1) replacing <code>&lt;OBJECT&gt;</code> with the
							target character and (2) contacting the ChatGPT API for a specific
							number of trials.
							<ol>
								<li>
									Each trial will always start from scratch and will contain no
									previous conversation.
								</li>
							</ol>
						</li>
						<li>
							The <em>code extraction script</em> will load each response and
							produce a new file containing only a series of{' '}
							<code>ab_drop()</code> commands.
						</li>
						<li>
							The <em>text-to-xml conversion script</em> will load each code
							file and convert it into a Science Birds level.
						</li>
						<li>
							<a href='https://github.com/chatgpt4pcg/modified-science-birds'>
								A modified version of Science Birds
							</a>
							, <em>Science Birds Evaluator</em>, will individually load all
							levels and assess their stability. The results of stability will
							be recorded, and for each level an image of the structure with
							black-textured blocks on a white background will be produced by
							the program.
						</li>
						<li>
							The <em>similarity checking script</em> will load each image and
							pass it through{' '}
							<a href='https://huggingface.co/pittawat/vit-base-letter'>
								vit-base-letter
							</a>
							. It will then record the similarity result.
						</li>
						<li>
							Finally, the <em>scoring and ranking</em> script will load all
							similarity results and produce the final rank and score result for
							all teams.
						</li>
					</ol>
				</Section>
			</PageLayout>
		</>
	);
}
