import 'katex/dist/katex.min.css';

import { BlockMath, InlineMath } from 'react-katex';

import Link from 'next/link';
import PageHeader from '@/components/ui/PageHeader/PageHeader';
import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageMeta from '@/components/content/PageMeta';
import PageSubHeader from '@/components/ui/PageSubHeader/PageSubHeader';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';
import SectionSubHeader from '@/components/ui/SectionSubHeader/SectionSubHeader';

export default function RulesPage() {
	return (
		<>
			<PageMeta pageTitle='Rules and Evaluation Guidelines' />
			<PageLayout>
				<PageSubHeader>The 1st ChatGPT4PCG Competition</PageSubHeader>
				<PageHeader>
					Character-like Level Generation for Science Birds
				</PageHeader>
				<Section>
					<SectionHeader id='evaluation'>Evaluation</SectionHeader>
					<Paragraph>
						The submitted prompts will undergo an evaluation process that
						involves subjecting them to 10 trials for each of the 26 uppercase
						letters of the English alphabet (A-Z). The levels generated for each
						character will be evaluated based on their similarity and stability,
						and scored using the criteria outlined in the scoring policy given
						below. The entire evaluation process will be conducted using{' '}
						<Link href='/resources'>automated scripts and programs</Link>.
					</Paragraph>
					<Paragraph>
						Please note that the evaluation process will be conducted twice, at
						midterm and final stages. The number of trials and characters in the
						evaluation set may be adjusted based on the number of teams.
					</Paragraph>
					<SectionSubHeader id='evaluation-set'>
						Evaluation Set
					</SectionSubHeader>
					<Paragraph>All 26 alphabetical uppercase characters.</Paragraph>
					<Paragraph>
						A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
					</Paragraph>
					<SectionSubHeader id='scoring-policy'>
						Scoring Policy
					</SectionSubHeader>
					<Paragraph>
						In trial <InlineMath math='i' /> of target character{' '}
						<InlineMath math='j' /> for prompt <InlineMath math='k' />:
					</Paragraph>
					<ol>
						<li>
							Stability: The stability of a level is evaluated using our{' '}
							<a href='https://github.com/chatgpt4pcg/modified-science-birds'>
								Science Birds Evaluator
							</a>
							. Here, <InlineMath math='total\_blocks_{ijk}' /> is defined as
							the number of blocks at the initialization step of loading the
							level into the evaluator. Then the program will calculate the
							value of <InlineMath math='moving\_blocks_{ijk}' />
							which is defined as the number of moving blocks during the first
							10 seconds after level initialization. Each level will receive an{' '}
							<InlineMath math='st_{ijk}' /> score according to the following
							equation. The score has a continuous value in{' '}
							<InlineMath math='[0, 1]' />.
						</li>
						<BlockMath math='st_{ijk} = \frac{total\_blocks_{ijk} - moving\_blocks_{ijk}}{total\_blocks_{ijk}}' />
						<li>
							Similarity: The similarity score reflects the softmax probability,{' '}
							<InlineMath math='\sigma (z_{ijk})' />
							of the model called{' '}
							<a href='https://huggingface.co/pittawat/vit-base-letter'>
								vit-base-letter
							</a>
							{', '}
							which is used to infer target character <InlineMath math='j' /> in
							trial <InlineMath math='i' /> from the image of the generated
							level after the first 10 seconds of initialization. Each level
							will receive a continuous value between{' '}
							<InlineMath math='[0, 1]' />. This score,{' '}
							<InlineMath math='si_{ijk}' />, is given as
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
					<Paragraph>and</Paragraph>
					<BlockMath math='w\_si_{j} = max(1 - \frac{\sum_{k=1}^{P} \sum_{i=1}^{T} si_{ijk}}{PT}, \frac{1}{C})' />
					<Paragraph>
						Next, the weighted <InlineMath math='trial_{ijk}' /> score is
						defined as follows:
					</Paragraph>
					<BlockMath math='trial_{ijk} = weight_{j}st_{ijk}si_{ijk}' />
					<Paragraph>
						The average score for target character <InlineMath math='j' /> of
						prompt <InlineMath math='k' />, <InlineMath math='char_{jk}' />, is
						defined as follows:
					</Paragraph>
					<BlockMath math='char_{jk} = \frac{\sum_{i=1}^{T} trial_{ijk}}{T}' />
					<Paragraph>
						The <InlineMath math='prompt_{k}' /> score is defined as follows:
					</Paragraph>
					<BlockMath math='prompt_{k} = \frac{\sum_{j=1}^{C} char_{jk}}{C}' />
					<Paragraph>
						Next, the normalized <InlineMath math='prompt_{k}' /> score,{' '}
						<InlineMath math='norm\_prompt_{k}' />, is defined as follows:
					</Paragraph>
					<BlockMath math='norm\_prompt_{k} = 100\ \frac{prompt_{k}}{competition}\text{,}' />
					<Paragraph>where</Paragraph>
					<BlockMath math='competition = \sum_{k=1}^{P} prompt_{k}' />
					<Paragraph>
						Finally, <InlineMath math='norm\_prompt_{k}' /> will be used for
						ranking.
					</Paragraph>
					<SectionSubHeader id='ranking-policy'>
						Ranking Policy
					</SectionSubHeader>
					<Paragraph>
						The team that has the highest <InlineMath math='norm\_prompt_{k}' />{' '}
						will be declared the winner. If there are multiple teams with the
						same highest score, the one with the shortest prompt will be chosen
						as the winner. However, if multiple teams still have the same score
						and the shortest prompt, they will be considered co-winners.
					</Paragraph>
				</Section>
				<Section>
					<SectionHeader id='evaluation-tools'>Evaluation Tools</SectionHeader>
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
								Science Birds Evaluator
							</a>{' '}
							with features to
							<ol>
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
					<SectionHeader id='evaluation-env'>
						Evaluation Environment
					</SectionHeader>
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
					<SectionHeader id='evaluation-process'>
						Evaluation Process
					</SectionHeader>
					<ol>
						<li>
							The{' '}
							<a href='https://github.com/chatgpt4pcg/qualification-checking-script'>
								qualification checking script
							</a>{' '}
							will be first run to check for rule violations, including:
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
							The{' '}
							<a href='https://github.com/chatgpt4pcg/response-gathering-script'>
								response gathering script
							</a>{' '}
							will load each qualified team&apos;s prompt and repeat the
							following two steps for each character -- (1) replacing{' '}
							<code>&lt;OBJECT&gt;</code> with the target character and (2)
							contacting the ChatGPT API for a specific number of trials.
							<ol>
								<li>
									Each trial will always start from scratch and will contain no
									previous conversation.
								</li>
							</ol>
						</li>
						<li>
							The{' '}
							<a href='https://github.com/chatgpt4pcg/code-extraction-script'>
								code extraction script
							</a>{' '}
							will load each response and produce a new file containing only a
							series of <code>ab_drop()</code> commands.
						</li>
						<li>
							The{' '}
							<a href='https://github.com/chatgpt4pcg/text-to-xml-converter-script'>
								text-to-xml conversion script
							</a>{' '}
							will load each code file and convert it into a Science Birds level
							description XML file.
						</li>
						<li>
							Next,{' '}
							<a href='https://github.com/chatgpt4pcg/modified-science-birds'>
								Science Birds Evaluator
							</a>
							, will individually load all levels to assess their stability and
							capture thier images. The results of stability will be recorded,
							and for each level an image of the structure with black-textured
							blocks on a white background will be produced by the program.
						</li>
						<li>
							The{' '}
							<a href='https://github.com/chatgpt4pcg/similarity-checking-script'>
								similarity checking script
							</a>{' '}
							will load each image and pass it through an open source-model
							called{' '}
							<a href='https://huggingface.co/pittawat/vit-base-letter'>
								vit-base-letter
							</a>
							. It will then record the similarity result.
						</li>
						<li>
							Finally, the{' '}
							<a href='https://github.com/chatgpt4pcg/scoring-and-ranking-script'>
								scoring and ranking script
							</a>{' '}
							will load all stability and similarity results and produce the
							final rank and score result for all teams according to the scoring
							policy.
						</li>
					</ol>
				</Section>
			</PageLayout>
		</>
	);
}
