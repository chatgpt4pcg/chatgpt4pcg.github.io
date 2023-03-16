import Head from 'next/head';
import Image from '@/components/Image/Image';
import InlineCode from '@/components/InlineCode/InlineCode';
import PageHeader from '@/components/PageHeader/PageHeader';
import PageLayout from '@/components/PageLayout/PageLayout';
import PageSubHeader from '@/components/PageSubHeader/PageSubHeader';
import Paragraph from '@/components/Paragraph/Paragraph';
import Section from '@/components/Section/Section';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import SectionSubHeader from '@/components/SectionSubHeader/SectionSubHeader';
import SectionSubSubHeader from '@/components/SectionSubSubHeader/SectionSubSubHeader';

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
					<SectionHeader>Rules</SectionHeader>
					<ol>
						<li>The maximum word count for the prompt is 900 words.</li>
						<li>
							The result from ChatGPT must contain code blocks (``` must be
							present in the exported Markdown file using the Chrome Extension
							called{' '}
							<a href='https://chrome.google.com/webstore/detail/chatgpt-prompt-genius/jjdnakkfjnnbbckhifcfchagnpofjffo'>
								ChatGPT Prompt Genius
							</a>
							), as we will run a script to extract all code between these
							symbols. If the result from ChatGPT contains no code, we will skip
							that result, and its score will be 0.
						</li>
						<li>
							The{' '}
							<strong>
								<InlineCode>ab_drop()</InlineCode>
							</strong>{' '}
							function is defined as follows:
							<ol>
								<li>
									It has two parameters:
									<ol>
										<li>
											<strong>
												<InlineCode>block_type</InlineCode>
											</strong>
											: one of three possible values:{' '}
											<strong>
												<InlineCode>b11</InlineCode>
											</strong>
											,{' '}
											<strong>
												<InlineCode>b13</InlineCode>
											</strong>
											, and{' '}
											<strong>
												<InlineCode>b31</InlineCode>
											</strong>
											.
											<Image
												src='combined.png'
												alt='Combined block example'
												width={100}
												noBorderRadius
											/>
											<ol>
												<li>
													<strong>
														<InlineCode>b11</InlineCode>
													</strong>{' '}
													denotes a square block whose size is 1x1 cell.
													<Image
														src='b11.png'
														alt='B11 block example'
														width={25}
														noBorderRadius
													/>
												</li>
												<li>
													<strong>
														<InlineCode>b13</InlineCode>
													</strong>{' '}
													denotes a column block whose size is 1x3 cells.
													<Image
														src='b13.png'
														alt='B13 block example'
														width={25}
														noBorderRadius
													/>
												</li>
												<li>
													<strong>
														<InlineCode>b31</InlineCode>
													</strong>{' '}
													denotes a row block whose size is 3x1 cells.
													<Image
														src='b31.png'
														alt='B31 block example'
														width={75}
														noBorderRadius
													/>
												</li>
											</ol>
										</li>
										<li>
											<strong>
												<InlineCode>x_position</InlineCode>
											</strong>
											: a horizontal index of a grid cell having{' '}
											<strong>
												<InlineCode>0</InlineCode>
											</strong>{' '}
											as the leftmost cell of the grid and{' '}
											<strong>
												<InlineCode>W-1</InlineCode>
											</strong>{' '}
											as the rightmost cell of the grid.{' '}
											<strong>
												<InlineCode>x_position</InlineCode>
											</strong>{' '}
											is the center pivot point where the object will be placed.
											For example, if we place{' '}
											<strong>
												<InlineCode>b31</InlineCode>
											</strong>{' '}
											at position{' '}
											<strong>
												<InlineCode>4</InlineCode>
											</strong>
											, it will occupy cells{' '}
											<strong>
												<InlineCode>(3, 0)</InlineCode>
											</strong>
											,{' '}
											<strong>
												<InlineCode>(4, 0)</InlineCode>
											</strong>
											, and{' '}
											<strong>
												<InlineCode>(5, 0)</InlineCode>
											</strong>
											.
										</li>
									</ol>
								</li>
							</ol>
						</li>
						<li>
							The result from ChatGPT must use only the{' '}
							<strong>
								<InlineCode>ab_drop()</InlineCode>
							</strong>{' '}
							function. If it uses other function names or other functions, it
							is the participant&#39;s responsibility to provide a script to
							convert intermediate results into a series of{' '}
							<strong>
								<InlineCode>ab_drop()</InlineCode>
							</strong>{' '}
							functions.
						</li>
						<li>
							A team can only submit once, and a member can only belong to one
							team. Any violation will result in the automatic elimination of
							all teams involved.
						</li>
						<li>
							Any attempts that can be judged by the organizers as cheating will
							result in automatic disqualification from this competition.
						</li>
						<li>
							By submitting, you agree that all submitted prompts will be made
							public.
						</li>
						<li>
							Any submissions received after the deadline will not be considered
							for the evaluation process.
						</li>
						<li>
							Midterm submission is optional, although we recommend it. Any team
							that submits during the mid-term submission will be notified of
							the preliminary results. However, all teams, whether they submit
							during the midterm or not, must submit during the final submission
							period. Only submissions during the final submission period will
							be considered for the final ranking.
						</li>
						<li>
							Please refer to <strong>Evaluation</strong> section below for our
							evaluation process and policies.
						</li>
					</ol>
				</Section>
				<Section>
					<SectionHeader>Submission</SectionHeader>
					<Paragraph>
						Submit via{' '}
						<a href='https://forms.office.com/r/MrTCjsPrwB'>this form</a> (
						<a href='https://forms.office.com/r/MrTCjsPrwB'>
							https://forms.office.com/r/MrTCjsPrwB
						</a>
						)
					</Paragraph>
				</Section>
				<Section>
					<SectionHeader>Evaluation</SectionHeader>
					<SectionSubHeader>Evaluation Rounds</SectionSubHeader>
					<Paragraph>
						We will conduct four rounds in this competition: three preliminary
						rounds and one final round.
					</Paragraph>
					<SectionSubSubHeader>Preliminary Rounds</SectionSubSubHeader>
					<Paragraph>
						The first preliminary round will be based on the easy set, followed
						by the moderate set in the second round, and the hard set in the
						last round. For each prompt, we will randomly select one character
						from the difficulty set and test the response in a Battle
						Royale-style match. Your prompt will be randomly matched with
						another prompt, and both will be tested with the same set of
						characters. In case the number of participants is odd in each round,
						we will randomly select one participant to match against our sample
						prompt. The winner, whose combined score of stability and similarity
						is the highest, will proceed to the next round.
					</Paragraph>
					<SectionSubSubHeader>Final Round</SectionSubSubHeader>
					<Paragraph>
						After the last preliminary round, all winners will be tested on all
						characters from the moderate and hard sets, and ranked based on
						their combined scores. The winner will be determined by the highest
						combined score of stability and similarity. Additionally, we will
						announce two additional winners: the stability winner, whose score
						in stability is the highest, and the similarity winner, whose score
						in similarity is the highest.
					</Paragraph>
					<SectionSubHeader>Evaluation Process</SectionSubHeader>
					<ol>
						<li>Start new chat session of ChatGPT</li>
						<li>
							Adjust the prompt provided by the participant to generate{' '}
							<InlineCode>?</InlineCode> character
							<ol>
								<li>
									E.g., by replacing <InlineCode>&lt;OBJ&gt;</InlineCode> with
									actual character name
								</li>
								<li>
									If the result get cut off due to reach the maximum token
									threshold, we will re-generate the prompt, at most 2 times (a
									total of 3 times (1 original, 2 regenerations). If the result
									of the last time stills get cut off, we will use what remains.
								</li>
							</ol>
						</li>
						<li>
							Export result from ChatGPT to MD file and store it for
							transparency
						</li>
						<li>
							Use the result from ChatGPT and convert it to the actual Science
							Birds level
						</li>
						<li>
							Assess stability by ensuring that after enable gravity and wait
							for 10 seconds, no objects drastically moved
						</li>
						<li>
							Export image with white background for testing with OCR model
						</li>
						<li>Record OCR model result</li>
						<li>
							Repeat step 1-6, <InlineCode>1</InlineCode> more time for each
							character
						</li>
					</ol>
					<Paragraph>
						Please note that we will use the latest version of ChatGPT API
						available at the time of the evaluation process.
					</Paragraph>
					<SectionSubHeader>Public Evaluation Set</SectionSubHeader>
					<Paragraph>
						This is a 30% of our evaluation set. All characters in our
						evaluation sets are capitalized English characters.
					</Paragraph>
					<ul>
						<li>I (easy)</li>
						<li>M (moderate)</li>
						<li>Q (hard)</li>
					</ul>
					<SectionSubHeader>Scoring Policy</SectionSubHeader>
					<ol>
						<li>
							One stable level gives <InlineCode>1</InlineCode> point
						</li>
						<li>
							One similar level gives <InlineCode>1</InlineCode> point
						</li>
					</ol>
					<SectionSubHeader>Ranking Policy</SectionSubHeader>
					<Paragraph>
						We will rank the results based on the teams&#39; scores from highest
						to lowest in the final round.
					</Paragraph>
					<SectionSubSubHeader>Tie-breaking Policy</SectionSubSubHeader>
					<ol>
						<li>
							For stability, if there is a tie after ranked, level with{' '}
							<strong>more number of blocks</strong> will win
						</li>
						<li>
							For similarity, if there is a tie after ranked, level with{' '}
							<strong>more confidence score</strong> will win
						</li>
						<li>
							If the result still a tie, the <strong>shorter</strong> prompt
							will win{' '}
						</li>
					</ol>
				</Section>
				<Section>
					<SectionHeader>Pledge</SectionHeader>
					<Paragraph>
						We pledge to conduct the competition with fairness and impartiality.
						The evaluation process will be recorded, and a reasonable amount of
						evidence will be available upon request with appropriate reasons.
					</Paragraph>
				</Section>
			</PageLayout>
		</>
	);
}
