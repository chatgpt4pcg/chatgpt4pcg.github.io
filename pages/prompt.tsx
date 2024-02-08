import Image from '@/components/ui/Image/Image';
import Link from 'next/link';
import PageLayout from '@/components/ui/PageLayout/PageLayout';
import PageMeta from '@/components/content/PageMeta';
import PageTitle from '@/components/content/PageTitle';
import Paragraph from '@/components/ui/Paragraph/Paragraph';
import Section from '@/components/ui/Section/Section';
import SectionHeader from '@/components/ui/SectionHeader/SectionHeader';

export default function PromptPage() {
	return (
		<>
			<PageMeta pageTitle='Prompt Rules and Guidelines' />
			<PageLayout>
				<PageTitle />
				<Section>
					<SectionHeader id='examples'>
						Prompt Engineering Examples
					</SectionHeader>
					<Paragraph>
						We provide a few example programs implemented using various prompt
						engineering techniques. These examples are offered to assist you in
						getting started with the competition. You can utilize these examples
						as a foundation to develop your own advanced prompt engineering
						techniques. The examples are accessible in a GitHub repository,
						which you can find{' '}
						<a href='https://github.com/chatgpt4pcg/pe-examples'>here</a>.
					</Paragraph>
				</Section>
				<Section>
					<SectionHeader id='rules'>Prompt Rules</SectionHeader>
					<ol>
						<li>
							A program submitted to a competition must satisfy the following
							requirements:
							<ol>
								<li>
									A submitted program must implement the interface through the
									Python package provided by the competition to interact with
									ChatGPT via API and output final results in a specified
									format. Participants are not allowed to interact with ChatGPT
									via API through other methods. This is to ensure fairness, as
									our provided interface will count and monitor the number of
									tokens used.
								</li>
								<li>
									During each evaluation, we will use the latest version of the
									required competition's Python package available as of one week
									before the submission deadline.
								</li>
								<li>
									Any tools needed for the implementation of prompt engineering
									techniques are the responsibility of the participants to
									provide to the organizers. We do not aim to provide any free
									or paid services required by your program. We do not guarantee
									the compatibility of additional tools required as a part of
									your program. Instructions on how to set up these tools must
									be provided by participants. In case you utilize paid
									services, such as gated APIs, proprietary software, or
									specialized databases, it is the participants' responsibility
									to provide any required information to run the said software
									and confirm with these providers about the licenses, terms,
									and agreements for use in this competition. Any parts of the
									software that could not be made public must be explicitly
									stated and informed to the organizer to be removed before
									being made publicly available. We recommend participants check
									the specifications of the evaluation computer to ensure
									compatibility beforehand.
								</li>
								<li>
									The program must not modify responses from ChatGPT before
									writing them to files as final output for evaluation. We
									consider direct intervention to be cheating. Only the direct
									response from ChatGPT may be utilized as a final output.
								</li>
								<li>
									Modification of the message history of ChatGPT in a way that
									is considered cheating, such as altering the message history
									with manually created content (i.e., hard-coding answers), is
									prohibited.
								</li>
								<li>
									Modification of the token counter and timer used for the
									evaluation is prohibited.
								</li>
								<li>
									In the event of an error during a trial, that trial will be
									treated as producing an empty response.
								</li>
								<li>
									To ensure fairness, each program combined (source code, tools,
									databases, etc.) must be at most 1GB in total size including
									any data downloaded as a result of running the submitted
									program, and each trial will last only 120 seconds. The total
									maximum number of tokens that can be used per trial is 25,000
									tokens. The sampling temperature and random seed are always
									fixed at 1 and 42, respectively.
								</li>
								<li>
									Automatic prompt optimization may be utilized, but its use
									during the evaluation is discouraged as it quickly consumes
									available token limits. Therefore, we suggest employing these
									techniques beforehand.
								</li>
							</ol>
						</li>
						<li>
							Programs failing to follow the requirements in 1. will result in
							automatic disqualification.
						</li>
						<li>
							To ensure that code blocks can be extracted successfully from
							responses generated by the ChatGPT API, each output must include
							three backticks (<code>```</code>).
							<ol>
								<li>
									The <em>code extraction script</em> will only extract the
									content between the last pair of three backticks (
									<code>```</code>).
								</li>
								<li>
									The extracted code must not contain any loops. Any use of
									loops will be ignored, resulting in only one instance of the
									loop&apos;s content. The code should not use variables in the
									call of the <code>drop_block()</code> function, as this will
									result in an error and that response will be skipped for the
									rest of the evaluation process. To check the behavior of the
									code extractor, please refer to the{' '}
									<Link href='/resources'>Resources</Link> page where you can
									find an online tool for this task.
								</li>
								<li>
									If no code blocks are present or extracted code results in an
									empty string, the response will be skipped, and its score will
									be 0.
								</li>
							</ol>
						</li>
						<li>
							The use of{' '}
							<a href='https://openai.com/blog/chatgpt-plugins'>
								ChatGPT plugins
							</a>{' '}
							is not supported, i.e., all plugins and function callings are
							disabled during the evaluation process.
						</li>
						<li>
							The final response from your program must explicitly include a
							series of <code>drop_block()</code>, which will be executed in
							that order by our tool to generate a character-like structure in a
							Science Birds level.
						</li>
						<li>
							The definition of the <code>drop_block()</code> function is as
							follows:
							<ol>
								<li>
									It drops a block vertically drop a block from the top and
									center it at a specific slot, denoted by{' '}
									<code>x_position</code>.
								</li>
								<li>
									This function works on the following settings:
									<ol>
										<li>
											A structure is situated on a 2D grid with a width (
											<code>W</code>) of 20 columns and a height (<code>H</code>
											) of 16 rows. The grid consists of 320 cells, each of
											equal size.
										</li>
										<li>
											Coordinates <code>(x, y)</code> are used to represent the
											positions in the grid, where <code>x</code> and{' '}
											<code>y</code> show the horizontal and vertical indices of
											cells, respectively. For example, <code>(0, 0)</code>{' '}
											denotes the bottom-left corner cell of the grid, and{' '}
											<code>(W-1, H-1)</code> is the top-right corner cell.
										</li>
										<li>
											A cell on the grid has a size of 1x1. Each cell has unique{' '}
											<code>(x, y)</code> coordinates associated with it.
										</li>
									</ol>
								</li>
								<li>
									This function accepts two parameters:
									<ol>
										<li>
											<code>block_type</code>: a value that indicates the type
											of block to be placed. The possible values are
											<code>b11</code>, <code>b13</code>, and <code>b31</code>.
											An invalid block type will result in an error.
											<ol>
												<li>
													<code>b11</code> denotes a square block whose size is
													1x1.
													<Image
														src='/images/b11.png'
														alt='b11 blocks'
														noBorderRadius
														width={24}
														height={24}
													/>
												</li>
												<li>
													<code>b13</code> denotes a column block whose size is
													1x3.
													<Image
														src='/images/b13.png'
														alt='b13 blocks'
														noBorderRadius
														width={24}
														height={24 * 3}
													/>
												</li>
												<li>
													<code>b31</code> denotes a row block whose size is
													3x1.
													<Image
														src='/images/b31.png'
														alt='b31 blocks'
														noBorderRadius
														width={24 * 3}
														height={24}
													/>
												</li>
											</ol>
										</li>
										<li>
											<code>x_position</code>: a horizontal index of a grid
											cell, where <code>0</code> represents the leftmost column
											of the grid, and <code>W-1</code> represents the rightmost
											column of the grid. The <code>x_position</code> parameter
											indicates the center pivot point of the block being
											placed. For example, if <code>b31</code> is the only block
											in the level and is placed at <code>x_position=4</code>,
											it will occupy cells <code>(3, 0)</code>,{' '}
											<code>(4, 0)</code>, and <code>(5, 0)</code>. An invalid
											position, like a position where a block of interest
											intrudes on the grid boundary, will result in an error.
										</li>
									</ol>
								</li>
							</ol>
						</li>
					</ol>
				</Section>
			</PageLayout>
		</>
	);
}
