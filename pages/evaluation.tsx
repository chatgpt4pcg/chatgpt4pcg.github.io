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
						The submitted prompts will undergo an evaluation process that
						involves subjecting them to 10 trials for each of the 26 uppercase
						letters of the English alphabet (A-Z). The levels generated for each
						character will be evaluated based on their similarity, stability,
						and diversity, and scored using the criteria outlined in the scoring
						policy given below. The entire evaluation process will be conducted
						using <Link href='/resources'>automated scripts and programs</Link>.
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
						<InlineMath math='j' /> for program <InlineMath math='k' />:
					</Paragraph>
					<ol>
						<li>
							<strong>Stability</strong>: The stability of a level is evaluated
							using our{' '}
							<a href='https://github.com/chatgpt4pcg/modified-science-birds'>
								Science Birds Evaluator
							</a>
							. Here, <InlineMath math='total\_blocks_{ijk}' /> is defined as
							the number of blocks at the initialization step of loading the
							level into the evaluator. Then the program will calculate the
							value of <InlineMath math='moving\_blocks_{ijk}' />
							which is defined as the number of moving blocks during the first
							10 seconds after level initialization. Each level will receive an{' '}
							<InlineMath math='sta_{ijk}' /> score according to the following
							equation. The score has a continuous value in{' '}
							<InlineMath math='[0, 1]' />.
						</li>
						<BlockMath math='sta_{ijk} = \frac{total\_blocks_{ijk} - moving\_blocks_{ijk}}{total\_blocks_{ijk}}' />
						<li>
							<strong>Similarity</strong>: The similarity score reflects the
							softmax probability,{' '}
							<InlineMath math='\sigma (\textbf{z}_{ijk})_j' /> of the model
							called{' '}
							<a href='https://huggingface.co/pittawat/vit-base-uppercase-english-characters'>
								vit-base-uppercase-english-characters
							</a>
							{', '}
							which is used to infer target character <InlineMath math='j' /> in
							trial <InlineMath math='i' /> from the image of the generated
							level after the first 10 seconds of initialization. Each level
							will receive a continuous value between{' '}
							<InlineMath math='[0, 1]' />. This score,{' '}
							<InlineMath math='sim_{ijk}' />, is given as
						</li>
						<BlockMath math='sim_{ijk} = \sigma (\textbf{z}_{ijk})_j' />
						<li>
							<strong>Diversity</strong>: The diversity score represents how
							diverse the generated levels are under the same target character{' '}
							<InlineMath math='j' /> for program <InlineMath math='k' />. The
							score, <InlineMath math='div_{jk}' />, is calculated by computing
							cosine distance, <InlineMath math='D_c' />, of unordered pairs
							in the set <InlineMath math='A' /> containing pairs of output
							vectors from the softmax probability,{' '}
							<InlineMath math='\textbf{v}_{ijk} = \sigma(\textbf{z}_{ijk})' />.{' '}
							<InlineMath math='\Xi_{jk}' /> denotes a set containing all such
							vectors across trials of the same target character{' '}
							<InlineMath math='j' /> from the same program{' '}
							<InlineMath math='k' />.
						</li>
						<BlockMath math='div_{jk} = \frac{\sum_a^{|A_{jk}|} D_c(\textbf{v}_a^1, \textbf{v}_a^2)}{0.5T(T+1)-T}\text{,}' />
						<Paragraph>where</Paragraph>
						<BlockMath math='A_{jk} = \{(\textbf{v}_a^1, \textbf{v}_a^2) | (\textbf{v}_a^1, \textbf{v}_a^2)  \in \Xi_{jk} \bowtie \Xi_{jk} \land v_a^1 \neq v_a^2 \}' />
						<Paragraph>
							and <InlineMath math='T' /> represents the number of trials per
							target character.
						</Paragraph>
					</ol>
					<Paragraph>
						Given that <InlineMath math='P' /> and <InlineMath math='C' />{' '}
						represent the number of programs in the competition and the number of
						characters, respectively, to give a higher weight to a more
						difficult target character, <InlineMath math='weight_{j}' /> for
						target character <InlineMath math='j' /> is defined as follows:
					</Paragraph>
					<BlockMath math='weight_{j} = w\_sta_{j} \times w\_sim_{j} \times w\_div_{j}\text{,}' />
					<Paragraph>where</Paragraph>
					<BlockMath math='w\_sta_{j} = max(1 - \frac{\sum_{k=1}^{P} \sum_{i=1}^{T} sta_{ijk}}{PT}, \frac{1}{C})\text{,}' />
					<BlockMath math='w\_sim_{j} = max(1 - \frac{\sum_{k=1}^{P} \sum_{i=1}^{T} sim_{ijk}}{PT}, \frac{1}{C})\text{,}' />
					<Paragraph>and</Paragraph>
					<BlockMath math='w\_div_{j} = max(1 - \frac{\sum_{k=1}^{P} div_{jk}}{P}, \frac{1}{C})' />
					<Paragraph>
						Next, the weighted <InlineMath math='trial_{ijk}' /> score is
						defined as follows:
					</Paragraph>
					<BlockMath math='trial_{ijk} = weight_{j} \times sta_{ijk} \times sim_{ijk}' />
					<Paragraph>
						The average score for target character <InlineMath math='j' /> of
						program <InlineMath math='k' />, <InlineMath math='char_{jk}' />, is
						defined as follows:
					</Paragraph>
					<BlockMath math='char_{jk} = \frac{div_{jk}\sum_{i=1}^{T} trial_{ijk}}{T}' />
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
							<a href='https://pypi.org/project/openai/'>Python package</a>{' '}
							using <code>gpt-3.5-turbo-0125</code> model.
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
							<a href='https://huggingface.co/pittawat/vit-base-uppercase-english-characters'>
								vit-base-uppercase-english-characters
							</a>
						</li>
						<li>
							Automation scripts available on our{' '}
							<Link href='/resources'>Resources</Link> page.
						</li>
					</ol>
				</Section>
				<Section>
					<SectionHeader id='evaluation-env'>
						Evaluation Environment for Response Generation Stage
					</SectionHeader>
					<SectionSubHeader>Software</SectionSubHeader>
					<ul>
						<li>OS: Ubuntu 22.04.3 LTS</li>
						<li>Python: 3.11.xx</li>
						<li>Node.js: 20.xx.xx LTS</li>
						<li>Unity: 2019.4.40f1</li>
						<li>
							<a href='https://github.com/chatgpt4pcg/modified-science-birds'>
								Science Birds Evaluator
							</a>
						</li>
						<li>
							<Link href='/resources'>Our automation scripts</Link>
						</li>
					</ul>
					<SectionSubHeader>Hardware</SectionSubHeader>
					<ul>
						<li>CPU: Intel(R) Xeon(R) Gold CPU 6430x128</li>
						<li>RAM: 250 GB</li>
						<li>GPU: NVIDIA L40S 48GB</li>
					</ul>
				</Section>
				<Section>
					<SectionHeader id='evaluation-process'>
						Evaluation Process
					</SectionHeader>
					<ol>
						<li>
							We manually inspect each submitted program for a potential
							violation of the rules.
						</li>
						<li>
							Qualified programs will be run to gather responses from ChatGPT.
						</li>
						<li>
							The{' '}
							<a
								href='https://github.com/chatgpt4pcg/code-extraction-script'
								rel='noopener'
								target='_blank'
							>
								code extraction script
							</a>{' '}
							will load each response and produce a new file containing only a
							series of <code>drop_block()</code> commands.
						</li>
						<li>
							The{' '}
							<a
								href='https://github.com/chatgpt4pcg/text-to-xml-converter-script'
								rel='noopener'
								target='_blank'
							>
								text-to-xml conversion script
							</a>{' '}
							will load each code file and convert it into a Science Birds level
							description XML file.
						</li>
						<li>
							Next,{' '}
							<a
								href='https://github.com/chatgpt4pcg/modified-science-birds'
								rel='noopener'
								target='_blank'
							>
								Science Birds Evaluator
							</a>{' '}
							will individually load all levels to assess their stability and
							capture their images. The results of stability will be recorded,
							and for each level an image of the structure with black-textured
							blocks on a white background will be produced by the program.
						</li>
						<li>
							The{' '}
							<a
								href='https://github.com/chatgpt4pcg/similarity-checking-script'
								rel='noopener'
								target='_blank'
							>
								similarity checking script
							</a>{' '}
							will load each image and pass it through an open source-model
							called{' '}
							<a
								href='https://huggingface.co/pittawat/vit-base-uppercase-english-characters'
								rel='noopener'
								target='_blank'
							>
								vit-base-uppercase-english-characters
							</a>
							. It will then record the similarity result.
						</li>
						<li>
							The{' '}
							<a
								href='https://github.com/chatgpt4pcg/diversity-checking-script'
								rel='noopener'
								target='_blank'
							>
								diversity checking script
							</a>{' '}
							assesses the diversity of the levels by averaging the cosine
							distance of non-duplicated all-pairs of outputs from softmax for
							each level across trial of the same target character as described
							in the <Link href='/evaluation'>Evaluation</Link>.
						</li>
						<li>
							Finally, the{' '}
							<a
								href='https://github.com/chatgpt4pcg/scoring-and-ranking-script'
								rel='noopener'
								target='_blank'
							>
								scoring and ranking script
							</a>{' '}
							will load all stability, similarity, and diversity results and
							produce the final rank and score result for all teams according to
							the scoring policy.
						</li>
					</ol>
				</Section>
			</PageLayout>
		</>
	);
}
